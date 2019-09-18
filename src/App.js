import React from 'react';
import TodoList from 'src/components/TodoList';
import TodoInfo from 'src/components/TodoInfo';
import {makeStyles} from '@material-ui/core';
import {ToDoListStateProvider} from "./context/state/toDoListState";


function App() {
    const classes = useStyles();
    return (
        <ToDoListStateProvider>
            <div className={classes.root}>
                <TodoList/>
                <TodoInfo/>
            </div>
        </ToDoListStateProvider>
    );
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: '750px',
        margin: '0 auto'
    }
});

export default App;
