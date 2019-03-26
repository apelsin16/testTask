import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import { FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

const styles = {
  root: {
    marginTop: 20,
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class ImportanceRadioGroup extends React.Component {
  state = {
    value: 'urgent-important',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Importance</FormLabel>
          <RadioGroup
            aria-label="importance"
            name="importance"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="urgent important"
              control={<Radio color="primary" />}
              label="urgent important"
              labelPlacement="start"
            />
            <FormControlLabel
              value="urgent unimportant"
              control={<Radio  color="primary" />}
              label="urgent unimportant"
              labelPlacement="start"
            />
            <FormControlLabel
              value="non-urgent important"
              control={<Radio color="primary" />}
              label="non-urgent important"
              labelPlacement="start"
            />
            <FormControlLabel
              value="non-urgent unimportant"
              control={<Radio color="primary" />}
              label="non-urgent unimportant"
              labelPlacement="start"
            />
            
          </RadioGroup>
          
        </FormControl>
      </div>
    );
  }
}

ImportanceRadioGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImportanceRadioGroup);