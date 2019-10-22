import React, { Component, PropTypes } from 'react'
import sample from '../sample.js'

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


class PageContainer extends Component {

	componentDidMount() {

		console.log('derp')
		console.log( sample )
	}


  render() {

  	const classes = useStyles();

  	//const { routesList } = this.props;
    const renderPanels = (official, i) => {
      return (
          
          <ExpansionPanel>
	        <ExpansionPanelSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel1a-content"
	          id="panel1a-header"
	        >
	          <Typography className={classes.heading}>official.display_name</Typography>
	        </ExpansionPanelSummary>
	        <ExpansionPanelDetails>
	          <Typography>
	            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
	            sit amet blandit leo lobortis eget.
	          </Typography>
	        </ExpansionPanelDetails>
	      </ExpansionPanel>
      );
    }

    return (
      
        	<div style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}  >
            { sample.map(renderPanels) }
            </div>      
    )
  }
}


export default PageContainer;