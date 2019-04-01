import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

const Warning = ( { classes, open, onWarningClose  } ) => {
   
   
    return (
      <div>
        
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={onWarningClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Exit without save</span>}
          action={[
            <Button 
              key="undo" 
              color="secondary" 
              size="small" 
              onClick={onWarningClose}
            >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={onWarningClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }


Warning.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Warning);