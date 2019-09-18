import React, {useEffect, useState} from 'react';
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

import {useTodoListDispatch} from 'src/context/state/toDoListState';
import {deleteItem, updateItem, updateItemStatus} from 'src/context/actions/todoItemsActions';

export default function TodoListItem({value, isChecked}) {
    const [{isEditing}, chnageState] = useState({isEditing: false});
    const dispatch = useTodoListDispatch();
    let inputTextRef = React.createRef();

    useEffect(() => {
        if (isEditing && inputTextRef.current && value === inputTextRef.current.value) {
            inputTextRef.current.focus();
        }
    });

    const handleCheck = (updatedItem) => {
        dispatch(updateItemStatus(updatedItem));
    };

    const handleRemove = () => {
        dispatch(deleteItem(value));
    };

    const handleEditButtonClick = () => {
        chnageState({isEditing: true});
    };

    const handleSaveEditedData = () => {
        dispatch(updateItem({newItemValue: inputTextRef.current.value, oldValue: value}));
        chnageState({isEditing: false})
    };

    const handleEditCancel = () => {
        chnageState({isEditing: false})
    };

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    onChange={event => handleCheck({value, isChecked: event.target.checked})}
                />
            </ListItemIcon>
            {isEditing ? <TextField
                id="standard-uncontrolled"
                label={value}
                defaultValue={value}
                inputRef={inputTextRef}
            /> : <ListItemText id={1} primary={value}/>}
            <ListItemSecondaryAction>
                {isEditing ?
                    <React.Fragment>
                        <IconButton edge="end" aria-label="edit-save" onClick={handleSaveEditedData}>
                            <CheckIcon/>
                        </IconButton>
                        <IconButton edge="end" aria-label="edit-cancel" onClick={handleEditCancel}>
                            <CloseIcon/>
                        </IconButton>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <IconButton edge="end" aria-label="edit" onClick={handleEditButtonClick}>
                            <EditOutlinedIcon/>
                        </IconButton>

                        <IconButton edge="end" aria-label="remove" onClick={handleRemove}>
                            <DeleteOutlinedIcon/>
                        </IconButton>
                    </React.Fragment>
                }
            </ListItemSecondaryAction>
        </ListItem>
    );
}
