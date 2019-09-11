import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ToDoListItem from 'src/components/todoListItem';

import { useStateValue } from 'src/context/state';

const ToDoList = () => {
    const [{ todoItems: items }, dispatch] = useStateValue();

    const classes = useStyles();

    const handleClick = (updatedItem) => {

        dispatch({ type: 'UPDATE_ITEM_STATUS', payload: updatedItem });
    };

    return (
        <List className={classes.root}>
            {
                items.map(({ isChecked, value }, index) => {
                    return (
                        <ToDoListItem key={index} isChecked={isChecked} value={value} handleClick={handleClick}/>
                    );
                })
            }
        </List>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}));

export default ToDoList;
