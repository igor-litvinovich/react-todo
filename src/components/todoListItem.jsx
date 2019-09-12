import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { useStateValue } from 'src/context/state';
import { updateItemStatus, deleteItem, updateItem } from 'src/context/actions/todoItemsActions';

export default function ToDoListItem({ value, isChecked }) {
    const [{ isEditing, editedValue }, chnageState] = useState({ isEditing: false, editedValue: value })
    const dispatch = useStateValue()[1];
    const handleCheck = (updatedItem) => {
        dispatch(updateItemStatus(updatedItem));
    };

    const handleRemove = () => {
        dispatch(deleteItem(value));
    }

    const handleEditButtonClick = () => {
        chnageState(currentState => ({ ...currentState, isEditing: true }))
    }

    const handleEditInput = ({ target: { value: editedValue } }) => {
        chnageState(currentState => ({ ...currentState, editedValue }))
    }

    const handleSaveEditedData = () => {
        dispatch(updateItem({ newItemValue: editedValue, oldValue: value }));
        chnageState(currentState => ({ ...currentState, isEditing: false }))
    }

    const handleEditCancel = () => {
        chnageState(currentState => ({ ...currentState, editedValue: value, isEditing: false }))
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
            {isEditing ? <TextField
                id="standard-uncontrolled"
                label="Edit"
                defaultValue={value}
                onChange={handleEditInput}
            /> : <ListItemText id={1} primary={value} />}
            <ListItemSecondaryAction>
                {isEditing ?
                    <React.Fragment>
                        <IconButton edge="end" aria-label="edit-save" onClick={handleSaveEditedData} >
                            <CheckIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit-cancel" onClick={handleEditCancel} >
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <IconButton edge="end" aria-label="edit" onClick={handleEditButtonClick} >
                            <EditOutlinedIcon />
                        </IconButton>

                        <IconButton edge="end" aria-label="remove" onClick={handleRemove} >
                            <DeleteOutlinedIcon />
                        </IconButton>
                    </React.Fragment>
                }
            </ListItemSecondaryAction>
        </ListItem>
    );
}
