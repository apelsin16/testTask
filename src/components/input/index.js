import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Icon, Grid } from '@material-ui/core';

const styles = {
    wrapper: {
        
    },
    icon: {
        margin: 0,
        textAlign: "center"
    },
    input: {
        margin: 0,

    }
}

 class Input extends Component {

    state = {
        name: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    render() {
        const { classes } = this.props;
        return (
           
            <Grid container 
                spacing={8} 
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <Grid container
                    justify="center"
                    alignItems="center"
                    >
                <Icon color="action" className={classes.icon} >                   
                    assignment                    
                </Icon>
                    </Grid>
                </Grid >
                <Grid item xs={9} >
                <TextField
                    id="standard-name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    className={classes.input}
                />
                </Grid>
            </Grid > 
           
        )
    }
}

export default withStyles(styles)(Input)
