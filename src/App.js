import React from 'react';
import './App.css';
import ToDoList from './components/todoList';
import { StateProvider } from './context/state';
import todoItems from './constants/listItems';
import rootReducer from 'src/context/reducers/rootReducer';
import TodoInfo from 'src/components/todoInfo';
import { makeStyles } from '@material-ui/core';

function App() {
    const classes = useStyles();
    return (
        <StateProvider initialState={{ todoItems }} reducer={rootReducer}>
            <div className={classes.root}>
                <ToDoList/>
                <TodoInfo/>
            </div>
        </StateProvider>
    );
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        maxWidth: '750px',
        margin: '0 auto'
    }
});

export default App;
