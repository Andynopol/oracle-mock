import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from './DatePicker';
import StatusSelect from './StatusSelect';

const useStyles = makeStyles( ( theme ) => ( {
    main: {
        minHeight: '100vh',
        width: '100%',
        paddingTop: '100px',
        overflowY: 'auto'
    },
    titleWrapper: {
        color: 'black',
        padding: '1rem 0',
    },
    title: {
        padding: '0 2rem',
        fontSize: '2rem',
        borderBottom: '1px solid #000',
        width: 'fit-content',
    },
    stamp: {
        height: 'fit-content',
    },
    titleField: {
        [ theme.breakpoints.up( 'sm' ) ]: {
            width: 300
        }
    },
    submit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'block',
            margin: theme.spacing( 5 ),
        }
    },
    submitWrapper: {
        paddingTop: '1rem',
        [ theme.breakpoints.up( 'md' ) ]: {
            paddingTop: 0,
        }
    }
} ) );

export default function AddTodo () {

    const classes = useStyles();

    const [ complete, setComplete ] = useState( false );
    const [ title, setTitle ] = useState( null );
    const [ dueDate, setDueDate ] = useState( null );

    const addTodo = async () => {

    };


    const handleOnChange = ( event ) => {
        setTitle( event.target.value );
    };

    useEffect( () => {
        console.log( title );
    }, [ title ] );

    useEffect( () => {
        console.log( complete );
    }, [ complete ] );


    useEffect( () => {
        console.log( dueDate );
    }, [ dueDate ] );


    return (
        <Grid container className={classes.main}>
            <Grid item xs={1} className={classes.stamp} />
            <Grid item xs={10}>
                <Grid container>
                    <Grid item xs={12} className={`${ classes.titleWrapper } ${ classes.stamp }`}>
                        <Typography className={classes.title}>
                            Add a new Todo
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid xs={1} md={false} />
                            <Grid xs={11} md={12}>
                                <TextField className={classes.titleField} id="outlined-basic" label="Todo" onChange={handleOnChange} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={1} md={false} />
                            <Grid item xs={11} md={12}>
                                <DatePicker setDate={setDueDate} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={12}>
                        <Grid container>
                            <Grid item xs={2} md={false} />
                            <Grid item xs={10} md={12}>
                                <StatusSelect setComplete={setComplete} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={12} className={`${ classes.submit } ${ classes.submitWrapper }`}>
                        <Grid container className={classes.submit}>
                            <Button variant="contained" color="primary" onClick={addTodo}>Add Todo</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Grid >
    );
}
