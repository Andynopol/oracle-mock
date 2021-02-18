import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ( {
    root: {
        alignItems: 'center',
        background: 'white',
        height: '3rem',
        border: '1px solid lightgrey',
    },
    title: {
        paddingLeft: "1rem",
        overflow: 'hidden'
    },
    status: {

    },
    date: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '1rem',
    }

} ) );


export default function Todo ( props ) {
    const { title, date, completed } = props;
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={5} md={6} className={classes.title}>{title}</Grid>
            <Grid item xs={4} md={3} className={classes.status}>{completed ? <div>completed</div> : null}</Grid>
            <Grid item xs={3} className={classes.date}>{date}</Grid>
        </Grid>
    );
}
