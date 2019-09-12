import React from 'react';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { useStateValue } from 'src/context/state';
import { updateItemStatus, deleteItem } from 'src/context/actions/todoItemsActions';

export default function ToDoListItem({ value, isChecked }) {
    const dispatch = useStateValue()[1];
    const handleCheck = (updatedItem) => {
        dispatch(updateItemStatus(updatedItem));
    };

    const handleRemove = () => {
        dispatch(deleteItem(value));
    }

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    onChange={event => handleCheck({ value, isChecked: event.target.checked })}
                />
            </ListItemIcon>
            <ListItemText id={1} primary={value} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="remove" onClick={handleRemove} >
                    <DeleteOutlinedIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
