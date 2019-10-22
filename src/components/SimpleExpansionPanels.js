import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import 'typeface-roboto';
import Divider from '@material-ui/core/Divider';

import { Chart } from "react-google-charts";
import sample from '../sample.js';

import HashtagChips from './HashtagChips';
import UserMentionChips from './UserMentionChips';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


export default function SimpleExpansionPanel() {

  const classes = useStyles();

  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  const renderCalendar = (arr, i) => {
      
      const formatted = arr.map(x => [new Date(x),1]);

      const combo = [...[[ { type: 'date', id: 'Date' },
                           { type: 'number', id: 'tweet' }]],
                           ...formatted,
                           ...[[new Date(),0]]]

      console.log('combo ', combo)

      return (
          <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="Calendar"
              data={combo}
              width="1000px"
              height="200px"
              loader={<div>Loading Chart</div>}
              rootProps={{ 'data-testid': '1' }}
            />
          </div>
      );
    }

  const renderHashtags = (ht, i) => {
      return (
          
          <Chip
                avatar={<Avatar>#</Avatar>}
                label={ht}
                clickable
                color="primary"
              />
      );
    }

  const renderUserMentions = (um, i) => {
      return (
          
          <Chip
                avatar={<Avatar>@</Avatar>}
                label={um}
                clickable
                color="primary"
              />
      );
  }


  const renderPanels = (official, i) => {
      return (
          <div>
          
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Avatar className={classes.avatar}>{official.state}</Avatar>
              <Avatar alt={official.display_name} src={official.photo_url} className={classes.bigAvatar} />
              <Typography variant="h4" component="h4">
                {official.display_name}
              </Typography>
              <Typography variant="h6" component="h6">
                {official.title}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Hashtags"/>
                <HashtagChips data={official.hashtags}/>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="User Mentions"/>
                
                <UserMentionChips data={official.usermentions}/>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Tweet Dates"/>
                {renderCalendar( official.dates )}
              </ListItem>
            </List>
              

            </ExpansionPanelDetails>
          </ExpansionPanel>
          </div>
      );
    }

    return (
      
          <div style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}  >
            { sample.map(renderPanels) }
            </div>      
    )
}

