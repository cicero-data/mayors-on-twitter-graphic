import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useHashtagStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function OutlinedChips(props) {
  const classes = useHashtagStyles();
  const hashtag_array = Object.values({...props.data} )
  const renderChip = (ht, i) => {
      return (
          
          <Chip
                avatar={<Avatar>#</Avatar>}
                label={ht}
                clickable
                onClick={()=> window.open(`https://twitter.com/hashtag/${ht}`, "_blank")}
                color="primary"
                variant="outlined"
              />
      );
    }

  return (
    <div className={classes.root}>
      { hashtag_array.map(renderChip) }
    </div>
  );
}