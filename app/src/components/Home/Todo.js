import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ( {
    root: {
        alignItems: 'center',
        background: 'white',
        height: '3rem',
        border: '1px solid lightgrey',
        userSelect: 'none',
        cursor: 'pointer',
    },
    titleWrapper: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: '1.2rem',
        paddingRight: '.5rem'
    },
    title: {
        padding: "0 .5rem",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    status: {
        paddingRight: '.5rem',
        '&>div': {
            background: 'gold',
            color: 'green',
            borderRadius: '.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'lowercase',
            fontWeight: 'bold',
            maxWidth: '200px'
        }
    },
    date: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '1rem',

    }

} ) );


export default function Todo ( props ) {
    const { title, date, id, complete } = props;
    let { completed } = props;
    const classes = useStyles();



    return (
        <Grid container className={classes.root} onClick={() => { completed = !completed; complete( id ); }} >
            <Grid item xs={5} md={6} className={classes.titleWrapper}>
                <Grid container className={classes.title}>
                    {title}
                </Grid>
            </Grid>
            <Grid item xs={4} md={3} className={classes.status}>
                {completed ? <Grid container>completed</Grid> : null}
            </Grid>
            <Grid item xs={3} className={classes.date}>
                <Grid container justify="flex-end">
                    {date}
                </Grid>
            </Grid>
        </Grid >
    );
}
