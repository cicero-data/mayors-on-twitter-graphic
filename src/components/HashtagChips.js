import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Badge from '@material-ui/core/Badge';


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

export default function HashtagChips(props) {
  const classes = useHashtagStyles();
  const data = {...props.data}
  var data_arr = Object.keys(data).map(function(key) {
         return  data[key];
      });
  
  const renderChip = (ht, i) => {
      var data = Object.keys(ht).map(function(key) {
         return {id: key, num: ht[key]};
      });

      return (
          
          <div key={i} >
            <Badge color="secondary" badgeContent={ht.num} className={classes.margin}>
            <Chip
                  avatar={<Avatar>#</Avatar>}
                  label={ht.id}
                  clickable
                  onClick={()=> window.open(`https://twitter.com/hashtag/${ht.id}`, "_blank")}
                  color="primary"
                  variant="outlined"
                />
            </Badge>
          </div>
      );
    }

  return (
    <div className={classes.root}>
      { data_arr.map(renderChip) }
    </div>
  );
}