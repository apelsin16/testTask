import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({

  progress: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.2)'
  },
  circle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    
    zIndex: 100
  }
});

function Loader(props) {
  const { classes } = props;
  return (
    <div className={classes.progress}>
      <CircularProgress className={classes.circle} />
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);

