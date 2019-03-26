import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Button, Typography, Drawer, AppBar, Toolbar } from '@material-ui/core';
import './App.css';
import Loader from './components/loader';
import Warning from './components/warning';
import { v4 } from 'uuid';
import TaskEditor from './components/taskEditor';
import TaskList from './components/taskList';




const drawerWidth = 600;

const styles = theme => ({
  
  header: {
    // position: "static",
    top: "0",
  },
  content: {
    marginTop: 200
  },
  footer: {
    // position: "fixed",
    bottom: "0"
  },
  drawer: {
    [theme.breakpoints.up('xs')]: {
      width: drawerWidth,
      flexShrink: 0,
      overflow: "auto",
      // position: "relative"
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
    tasks: [ ...tasks ],
    task: {
      name: '',
      description: '',
      status: '',
      date: '',
      importance: '',
      tag: '',
    },
    openDrawer: false,
    warningOpen: false,
    isLoading: false,
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      openDrawer: !prevState.openDrawer 
    })
    )
  }

  addTask = ( task ) => {
    console.log(task);
    this.setState(prevState => ({
      tasks: [
        { id: v4(), ...task },
        ...prevState.tasks
      ]
    })) 
  } 

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }))
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
        
        <Loader isOpen />
        <TaskList 
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
        />
        <Warning />
        <Drawer 
        open={this.state.openDrawer} 
        onClose={this.toggleDrawer}  className={classes.drawer}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                New Task
              </Typography>
            </Toolbar>
          </AppBar>
          <TaskEditor addTask={this.addTask} className={classes.content}/>
          
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
