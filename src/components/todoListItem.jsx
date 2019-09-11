import React from 'react';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { useStateValue } from 'src/context/state';
import { updateItemStatus } from 'src/context/actions/todoItemsActions';

export default function ToDoListItem({ value, isChecked }) {
    const dispatch = useStateValue()[1];
    const handleClick = (updatedItem) => {
        dispatch(updateItemStatus(updatedItem));
    };

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    onChange={event => handleClick({ value, isChecked: event.target.checked })}
                />
            </ListItemIcon>
            <ListItemText id={1} primary={value}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
