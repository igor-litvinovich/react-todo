import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { useStateValue } from 'src/context/state';
const TodoInfo = () => {
    const classes = useStyles();
    const [{todoItems}] = useStateValue();

    return (
        <div className={classes.root}>
            <Typography variant="h2" gutterBottom>
                Information
            </Typography>
            <span>Done:</span>
            {
                todoItems.filter(item => item.isChecked).map(item => (
                    <Chip
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

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 300
    },
    chip: {
        margin: theme.spacing(1)
    }
}));

export default TodoInfo;
