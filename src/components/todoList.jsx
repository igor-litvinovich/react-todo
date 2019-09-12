import React, { useState } from 'react';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import ToDoListItem from 'src/components/todoListItem';
import { createItem } from 'src/context/actions/todoItemsActions';

import { useStateValue } from 'src/context/state';

const ToDoList = () => {
    const [{ todoItems: items }, dispatch] = useStateValue();

    const classes = useStyles();
    const [newItemValue, changeNewItemValue] = useState('');

    const handleCreateClick = () => {
        dispatch(createItem({ value: newItemValue, isChecked: false }));
        changeNewItemValue('');
    }

    const handleNewItemInputChange = (event) => {
        changeNewItemValue(event.target.value);
    }

    return (
        <div className={classes.list}>
            <List className={classes.root}>
                {
                    items.map(({ isChecked, value }, index) => {
                        return (
                            <ToDoListItem key={index} isChecked={isChecked} value={value} />
                        );
                    })
                }
            </List>
            <div className={classes.controls}>
                <TextField
                    id="new-item"
                    label="New Item"
                    margin="normal"
                    value={newItemValue}
                    onChange={handleNewItemInputChange}
                    variant="outlined"
                />
                <IconButton className={classes.checkButton} onClick={handleCreateClick}>
                    <CheckIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper
    },
    checkButton: {
        margin: theme.spacing(1),
        color: '#f50057'
    },
    controls: {
        display: 'flex',
        flexDirection: 'row'
    },
    list: {
        maxWidth: 302
    }
}));

export default ToDoList;
