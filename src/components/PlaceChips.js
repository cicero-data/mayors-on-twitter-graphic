import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import PlaceIcon from '@material-ui/icons/Place';
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

export default function PlaceChips(props) {
  const classes = useHashtagStyles();
  const data = {...props.data} 

  var data_arr = Object.keys(data).map(function(key) {
         return  {id: key, num: data[key]} ;
      });

  const renderChip = (ht, i) => {

      return (
          <div key={i} >
            <Badge color="secondary" badgeContent={ht.num} className={classes.margin}>
            <Chip
                  avatar={<Avatar><PlaceIcon/></Avatar>}
                  label={ht.id}
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