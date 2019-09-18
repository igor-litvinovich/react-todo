import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { useTodoListState } from 'src/context/state/toDoListState';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 300
    },
    chip: {
        margin: theme.spacing(1)
    }
}));

const TodoInfo = () => {
    const classes = useStyles();
    const { todoItems } = useTodoListState();
    const doneItems = todoItems.filter(item => item.isChecked);
    return (
        <div className={classes.root}>
            <Typography variant="h2" gutterBottom>
                Information
            </Typography>
            {doneItems.length ? <div> Done: </div> : null}
            {
                doneItems.map((item, index) => (
                    <Chip
                        key={index}
                        size="small"
                        label={item.value}
                        className={classes.chip}
                        color="secondary"
                    />
                ))
            }

        </div>
    );
};

export default TodoInfo;
