import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export default class Input extends Component {

    state = {
        name: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    render() {
        return (
            <div>
                <TextField
                    id="standard-name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
            </div>
        )
    }
}
