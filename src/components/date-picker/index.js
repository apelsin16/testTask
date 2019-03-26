import React, { Component } from 'react';
import {  Grid, Icon } from '@material-ui/core';
import ImportanceRadioGroup from '../importance-radio-group';
import { DatePicker } from 'material-ui-pickers';


export default class DatePickerElement extends Component {

    state = {
        selectedDate: ''
    }

    handleDateChange = date => {
        this.setState({ selectedDate: date });
      };

    render () {
        const { selectedDate } = this.state;
       
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
                <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    animateYearScrolling
                    labelFunc={()=>"Select Date"}
                />
               </Grid>             
                { dateWasSelect && <ImportanceRadioGroup />}
            </Grid>
            
        )
    }
}



