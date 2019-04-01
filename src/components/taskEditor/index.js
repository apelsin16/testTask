 import React, { Component } from 'react';
 import { AppBar, Toolbar, Typography, Button, InputLabel, Select, MenuItem, Radio, Grid, Icon, withStyles, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
 import { DatePicker } from 'material-ui-pickers';
import IntegrationReactSelect from '../autocomplite';
import moment from 'moment';

const styles = theme => ({    
    icon: {
        margin: 0,
        textAlign: "center"
    },
    input: {
        margin: 0,
    },
    formControl: {
       
    minWidth: 160
    }
})

 class TaskEditor extends Component {
    state = {
       name: '',
       description: '',
       status: '',
       date: '',
       importance: '',    
       tag: '',
    }

    componentDidMount() {
      this.updateEditor();
    }

    updateEditor = () => {
      const { taskId, task } = this.props;      
      if (!taskId) return;
     
      this.setState({
       name: task[0].name,
       description: task[0].description,
       status: task[0].status,
       date: task[0].date,
       importance: task[0].importance,    
       tag: task[0].tag,
      })
      console.log(this.state);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState({ [name]: value });       
      };

      handleDateChange = date => {
        this.setState({ date: (moment(date).toDate()).toISOString().substring(0, 10) });
      };

      getTag = tag => {
        this.setState({
            tag: tag
        })
      }

      handleSubmit = () => {
          if (this.state.name === '') {
              alert("Input Name");
              return;
          };
        
          this.props.addTask(this.state);
      }

      onSaveUpdatedTask = () => {
        this.props.saveUpdatedTask(this.state, this.state.id);
      }

     render () {
         const { classes, 
          // taskId, 
          // tasks 
        } = this.props;
         const dateWasSelect = (this.state.date !== '');
   
         return (
           <form>
             { console.log(this.props) }
             <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Edit Task
              </Typography>
            </Toolbar>
          </AppBar>
               <Grid container 
                 
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
                     onChange={this.handleInputChange}
                     className={classes.input}
                     name="name"
                 />
                 </Grid>
             </Grid > 
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
                    onChange={this.handleInputChange}    
                    margin="normal"
                    name="description"
                    />
                </Grid>
            </Grid>
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
                    value={this.state.date}
                    onChange={this.handleDateChange}
                    animateYearScrolling
                    // labelFunc={()=>"Select Date"}
                />
               </Grid>             
                { dateWasSelect && (
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Importance</FormLabel>
                    <RadioGroup
                      aria-label="importance"
                      name="importance"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleInputChange}
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
                )}
            </Grid>
            <Grid container justify="center" alignItems="center">
            <Grid item xs={3}>
              <Grid container justify="center" alignItems="center">
                <Icon color="action">
                  done_all
                </Icon>
              </Grid>
            </Grid>
            <Grid item xs={9}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="status">Status</InputLabel>
            <Select
              value={this.state.status}
              onChange={this.handleInputChange}
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
            
            </Grid>
          </Grid>
    
            <IntegrationReactSelect getTag={this.getTag}/>
            <footer className={classes.footer}>
            <Button 
              color="primary" 
              variant = "contained" 
              className={classes.button}
              onClick={this.onSaveUpdatedTask}
            >
                Save
            </Button>
            <Button color="secondary" variant = "contained" className={classes.button}>
              Cancel
            </Button>
          </footer>
          </form>  
         )
     }
 } 
        
 export default withStyles(styles)(TaskEditor);      
        
        
        
        
        
        
        