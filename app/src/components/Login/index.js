import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    glass: {
        minHeight: '80vh',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255,255,255,0.7))',
        borderRadius: '16px'
    }
} ) );

export default function Login () {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={1} md={4} />
            <Grid item xs={10} md={4} lg={6}>
                <Grid container className={classes.root}>
                    <Grid item xs={12} className={classes.glass}>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} md={4} />
        </Grid>
    );
}
