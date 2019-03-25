import React, { Component } from 'react';
import { FormControl,InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 200
  }
})

 class SelectStatus extends Component {

  state = {
    status: '',    
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

    render () {

      const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
          <InputLabel htmlFor="status">Status</InputLabel>
          <Select
            value={this.state.status}
            onChange={this.handleChange}
            inputProps={{
              name: 'status',
              id: 'status',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Postpone">Postpone</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>
        )
    }
}

export default withStyles(styles)(SelectStatus);