import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import 'typeface-roboto';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


import { Chart } from "react-google-charts";
import officials from '../officials.js';

import HashtagChips from './HashtagChips';
import UserMentionChips from './UserMentionChips';
import PageHeader from './PageHeader.js'



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


export default function OfficialExpansionPanel() {

  const classes = useStyles();

  console.log('data!!! ', officials)

  const renderCalendar = (obj, i) => {

      var data = Object.keys(obj).map(function(key) {
         return {date: key, num: obj[key]};
      });
      
      const formatted = data.map(x => [new Date(x.date),x.num]);

      const combo = [...[[ { type: 'date', id: 'Date' },
                           { type: 'number', id: 'tweet' }]],
                           ...formatted,
                           ...[[new Date(),0]]]

      return (
          <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="Calendar"
              data={combo}
              width="100%"
              height="200px"
              loader={<div>Loading Chart</div>}
              rootProps={{ 'data-testid': '1' }}
            />
          </div>
      );
    }

  const preventDefault = event => event.preventDefault();

  const renderPanels = (official, i) => {
      return (
          <div key={i} >
          <ExpansionPanel >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >

            <Grid container spacing={3}>
              <Grid item xs={1}>
                <Avatar className={classes.avatar}>{official.state}</Avatar>
              </Grid>
              <Grid item xs={1}>
                <Avatar alt={official.display_name} src={official.photo_url} className={classes.bigAvatar} />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" component="h6">
                {official.display_name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" component="h6">
                {official.title}
              </Typography>
              </Grid>
              <Grid item xs={2}>
                <Chip
                avatar={<Avatar><TwitterIcon /></Avatar>}
                label={official.twitter_id} 
                color="primary"
                onClick={()=> window.open(`https://twitter.com/${official.twitter_id}`, "_blank")}
              />              
              </Grid>
            </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <List className={classes.root}>
              <ListItem>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="h6">
                      Timespan Last 20 Tweets: {official.timespan} Days
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="h6">
                      Number of Retweets: {official.retweets }
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography variant="h6" component="h3">
                      Recent Hashtags
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <HashtagChips data={official.hashtags}/>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography variant="h6" component="h3">
                      Recent User Mentions
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <UserMentionChips data={official.usermentions}/>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography variant="h6" component="h3">
                      Recent Tweet Frequency
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    {renderCalendar( official.dates )}
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          </div>
      );
    }

    return (        
          <div  >
            <PageHeader/>
            { officials.map(renderPanels) }
          </div>      
    )
}

