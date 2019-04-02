import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Button, Typography, Drawer } from '@material-ui/core';
import './App.css';
import Loader from './components/loader';
import Warning from './components/warning';
import { v4 } from 'uuid';
import TaskCreator from './components/taskCreator';
import TaskList from './components/taskList';
import TaskEditor from './components/taskEditor';

const idSelector = (id, tasks) => {
  return tasks.filter( el => el.id === id );
}

const drawerWidth = 600;

const styles = theme => ({
  
  drawer: {
    [theme.breakpoints.up('xs')]: {
      width: drawerWidth,
      flexShrink: 0,
      overflow: "auto",      
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
      id: '',
      name: '',
      description: '',
      status: '',
      date: '',
      importance: '',
      tag: '',
    },
    taskId: null,
    openDrawer: false,
    warningOpen: false,
    isLoading: false,
    isEditing: false
  }

  openDrawer = () => {
    this.setState({
      openDrawer: true 
    }
    )
  }

  closeDrawer = () => {
    this.setState({
      openDrawer: false,
      isEditing: false 
    }
    )
  }

  warningOpen = () => {
    this.setState({ warningOpen: true });
  };


  warningClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ warningOpen: false });
    this.closeDrawer();
  };

  showLoader = () => {
    this.setState({ isLoading: true})
      setTimeout(
      () => {
        this.setState({ isLoading: false})
      }, 2000
    )    
  } 


  addTask = ( task ) => {
    this.setState(prevState => ({
      tasks: [
        { id: v4(), ...task },
        ...prevState.tasks
      ]
    })); 
    this.showLoader();
    this.closeDrawer();
  } 

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }))
  }

  updateTask = id => {   
      this.setState({
        isEditing: true,
        taskId: id
      });
      this.openDrawer();
  };

  saveUpdatedTask = (task, id) => {
   this.setState(({ tasks }) => {
     const idx = tasks.includes(el => el.id ===id);
     const newArr = [
       ...tasks.slice(0, idx),
       task,
       ...tasks.slice(idx+1)
     ];

     return {
       tasks: newArr
     }     
    })
    this.showLoader();
    this.closeDrawer();
  }

  render() {
    
    const { classes } = this.props;
    const filter = idSelector(this.state.taskId, this.state.tasks);
    return (
      <div className="App">
        <Typography component="h2" variant="h1" gutterBottom>
          Todo List App
        </Typography>
        
        <Button 
          variant = "contained"
          color = "primary" 
          className={classes.button}
          onClick={this.openDrawer}
        >
          Add Task
        </Button>
        
        <TaskList 
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          onUpdateTask={this.updateTask}
        />
        { this.state.isLoading && <Loader />}
        <Warning 
          onWarningClose={this.warningClose} open={this.state.warningOpen}/>
        <Drawer 
          open={this.state.openDrawer} 
          onClose={this.closeDrawer} 
          className={classes.drawer}   
        >
          
          {!this.state.isEditing && <TaskCreator 
            addTask={this.addTask} 
            className={classes.content} 
            task={this.state.task}
            warningOpen={this.warningOpen}
            onShowLoader={this.showLoader}
          />}
          {this.state.isEditing 
            && 
            <TaskEditor 
              task={filter} 
              taskId={this.state.taskId}  
              saveUpdatedTask={this.saveUpdatedTask}
            />
          }
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
