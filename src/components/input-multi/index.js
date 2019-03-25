import React, { Component } from 'react';
import { TextField, Grid, Icon } from '@material-ui/core';

export default class InputMulti extends Component {

    state = {
        description: ""
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    render () {
        return (
            
            <Grid container justify="center"
                alignItems="center">
                <Grid item xs={3}>
                    <Grid container justify="center"
                        alignItems="center">
                        <Icon color="action">
                            description
                        </Icon>
                        </Grid>
                    </Grid>
                <Grid item xs={9}>
                <TextField
                    id="standard-multiline-static"
                    label="Description"
                    multiline
                    value={this.state.description}  
                    onChange={this.handleChange('description')}    
                    margin="normal"
                    />
                </Grid>
            </Grid>
            
        )
    }
}   