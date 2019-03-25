import React, { Component } from 'react';
import { TextField, Grid, Icon } from '@material-ui/core';
import ImportanceRadioGroup from '../importance-radio-group';


export default class DatePickerElement extends Component {

    state = {
        selectedDate: ""
    }

    handleDateChange = event => {
        this.setState({ selectedDate: event.target.value });
      };

    render () {
        const { selectedDate } = this.state;
        const { handleDateChange } = this.props;
        const dateWasSelect = (selectedDate !== '');
        return (
            <Grid container justify="center" alignItems="center" >
               <Grid item xs={3}>
                <Grid container justify="center" alignItems="center" >
                    <Icon  color="action">
                        date_range
                    </Icon>
                </Grid>      
               </Grid>
               <Grid item xs={9}>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
               </Grid>
                { console.log(selectedDate) }
                { dateWasSelect && <ImportanceRadioGroup />}
            </Grid>
            
        )
    }
}



