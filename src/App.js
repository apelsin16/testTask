import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Button, Typography, Table, TableBody, TableHead, TableRow, TableCell, Drawer, AppBar, Toolbar, Fab } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiPencil, mdiDelete } from "@mdi/js";
import Input from './components/input/index';
import './App.css';
import InputMulti from './components/input-multi';
import DatePickerElement from './components/date-picker/';
import SelectStatus from './components/select';
import IntegrationReactSelect from './components/autocomplite';

const drawerWidth = 600;

const styles = theme => ({
  button: {
    margin: 10,  
  },
  header: {
    top: "0",
    bottom: "auto"
  },
  footer: {
    position: "fixed",
    bottom: "0"
  },
  drawer: {
    [theme.breakpoints.up('xs')]: {
      width: drawerWidth,
      flexShrink: 0,
      overflow: "auto"
    },
  }
})


const tasks = [
  {
    id: 1, 
    status: "in progress", 
    name: "to do", 
    description: "to do test task", 
    date: '25.03.2019', 
    importance: "urgent important task",
    tag: "tag0",    
  },
  {
    id: 2, 
    status: "to postpone", 
    name: "coffee", 
    description: "drink coffee", 
    date: '25.03.2019', 
    importance: "urgent unimportant task",
    tag: "tag1",    
  },
  {
    id: 3, 
    status: "done", 
    name: "study", 
    description: "study react", 
    date: '25.03.2018', 
    importance: "not important not urgent task",
    tag: "tag2",    
  },
  {
    id: 4, 
    status: "done", 
    name: "study", 
    description: "study redux", 
    date: '25.03.2018', 
    importance: "unimportant non-urgent task",
    tag: "tag3",    
  }
]


class App extends Component {

  state = {
    openDrawer: false, 
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      openDrawer: !prevState.openDrawer 
    })
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Typography component="h2" variant="h1" gutterBottom>
          Todo List App
        </Typography>
        
        <Button 
          variant = "contained"
          color = "primary" 
          className={classes.button}
          onClick={this.toggleDrawer}
        >
          Add Task
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Importance</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map( task => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.date}</TableCell>
                <TableCell>{task.importance}</TableCell>
                <TableCell>{task.tag}</TableCell>
                <TableCell>
                  <Fab color="primary" className={classes.button}>
                    <Icon 
                      path={mdiPencil}
                      size={1}
                      color="white"
                    />                    
                  </Fab>
                  <Fab color="secondary">
                    <Icon 
                      path={mdiDelete}
                      size={1}
                      color="white"
                    />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}            
          </TableBody>
        </Table>
        <Drawer open={this.state.openDrawer} onClose={this.toggleDrawer}  className={classes.drawer}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                New Task
              </Typography>
            </Toolbar>
          </AppBar>
          <form>
            <Input />
            <InputMulti/>
            <DatePickerElement />
            <SelectStatus />
            <IntegrationReactSelect />
          </form>
          <footer className={classes.footer}>
            <Button color="primary" variant = "contained" className={classes.button}>
              Save
            </Button>
            <Button color="secondary" variant = "contained" className={classes.button}>
              Cancel
            </Button>
          </footer>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
