import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexGrow: 1
    }
}));

export default function Spacer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        </div>
    )
}
