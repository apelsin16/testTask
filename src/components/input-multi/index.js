import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export default class InputMulti extends Component {

    state = {
        description: ""
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    render () {
        return (
            <div>
                <TextField
                    id="standard-multiline-static"
                    label="Description"
                    multiline
                    value={this.state.description}  
                    onChange={this.handleChange('description')}    
                    margin="normal"
                />
            </div>
        )
    }
}   