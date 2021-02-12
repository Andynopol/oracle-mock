import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {

} ) );

export default function Login () {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={false} md={2} lg={3} />
            <Grid item xs={12} md={8} lg={6}>
                Login Component here
            </Grid>
            <Grid item xs={false} md={2} lg={3} />
        </Grid>
    );
}
