import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Fab } from '@material-ui/core';
import Task from '../task';



class TaskList extends Component {

    handledelete = () => {
        this.props.delete.Task(this.props.id)
    }


    render () {
        
        return (
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
          {this.props.tasks.map( task => (
            <Task {...task} {...this.props} />
          ))}            
        </TableBody>
      </Table> 
        )
    }
}


export default TaskList;
        