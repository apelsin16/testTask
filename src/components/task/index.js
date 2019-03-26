import React, { Component } from 'react';
import { withStyles, TableRow, TableCell, Fab } from '@material-ui/core';
import { mdiPencil, mdiDelete } from "@mdi/js";
import Icon from '@mdi/react';

const styles = {
    button: {
        margin: 10,  
    }
}
 
class Task extends Component {



    handleUpdate = () => {
        
        this.props.onUpdateTask(this.props);
    };
    

    
    deleteTask = () => this.props.deleteTask(this.props.id);

    render () {
        const { classes, id, status, name, description, date, importance, tag } = this.props;

        return (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell>{importance}</TableCell>
              <TableCell>{tag}</TableCell>
              <TableCell>
                <Fab color="primary" className={classes.button}>
                  <Icon 
                    path={mdiPencil}
                    size={1}
                    color="white"
                    onClick={this.handleUpdate}
                  />                    
                </Fab>
                <Fab color="secondary" className={classes.button}>
                  <Icon 
                    path={mdiDelete}
                    size={1}
                    color="white"
                    onClick={this.deleteTask}
                  />
                </Fab>
              </TableCell>
            </TableRow>
        )
    }
}

export default withStyles(styles)(Task);
