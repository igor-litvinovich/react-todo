import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ToDoListItem from 'src/components/todoListItem';

import { useStateValue } from 'src/context/state';

const ToDoList = () => {
    const [{ todoItems: items }] = useStateValue();

    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                items.map(({ isChecked, value }, index) => {
                    return (
                        <ToDoListItem key={index} isChecked={isChecked} value={value} />
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
