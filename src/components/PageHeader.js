import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import HashtagChips from './HashtagChips';
import UserMentionChips from './UserMentionChips';
import summary from '../summary.js';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function PageHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Top Hashtags
            </Typography>
            <Typography component="div">
              <HashtagChips data={summary.ht}/>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Top User Mentions
            </Typography>
            <Typography component="div">
              <UserMentionChips data={summary.um}/>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Recent Tweet Frequency
            </Typography>
            <Typography component="p">
              Average Timespan Last 20 Tweets: {summary.avgts} Days
            </Typography>
            <Typography component="p">
              Timespan for Most Frequent Tweeter: {summary.mints} Days
            </Typography>
            <Typography component="p">
              Timespan for Least Frequent Tweeter: {summary.maxts} Days
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}