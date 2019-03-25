import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import ImportanceRadioGroup from '../importance-radio-group';
import { MuiPickersUtilsProvider, 
    // DatePicker 
} from 'material-ui-pickers';
// import DateFnsUtils from '@date-io/date-fns';


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
            <div>
               
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
               
                { console.log(selectedDate) }
                { dateWasSelect && <ImportanceRadioGroup />}
            </div>
        )
    }
}



