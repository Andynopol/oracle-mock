import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( ( theme ) => ( {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing( 2 ),
    },
    textField: {
        width: 200,
    },
} ) );

const date = new Date();
date.setDate( date.getDate() );
console.log( `${ date.toISOString().slice( 0, 4 ) }-${ date.toISOString().slice( 5, 7 ) }-${ date.toISOString().slice( 8, 10 ) }` );


const defaultDate = `${ date.toISOString().slice( 0, 4 ) }-${ date.toISOString().slice( 5, 7 ) }-${ date.toISOString().slice( 8, 10 ) }`;

export default function DatePickers ( props ) {
    const classes = useStyles();
    const { setDate } = props;

    const handleOnChange = ( event ) => {
        setDate( event.target.value );
    };

    return (
        <Grid className={classes.container} noValidate>
            <TextField
                id="date"
                label="Due to"
                type="date"
                defaultValue={defaultDate}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleOnChange}
            />
        </Grid>
    );
}