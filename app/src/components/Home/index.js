import React, { useState, useEffect } from 'react';
import { Grid, IconButton, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Todo from './Todo';
import Tabs from './Tabs';

const useStyles = makeStyles( ( theme ) => ( {
    main: {
        minHeight: '100vh',
        width: '100%',
        paddingTop: '60px',
    },
    todos: {
        overflowY: 'auto',
        height: '70vh',
        '@media screen and (orientation: landscape)': {
            height: '50vh'
        },
    },
    message: {
        color: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '5rem',
        userSelect: 'none'
    },
    noSelect: {
        userSelect: 'none'
    },
    box: {
        display: 'flex',
        flexFlow: "column",
        height: '100%',
    },
} ) );

export default function Todos ( props ) {
    const classes = useStyles();
    const { userData, setUserData, setPath } = props;
    const [ todos, setTodos ] = useState( null );
    const [ value, setValue ] = useState( 0 );

    const updateTodos = async () => {
        const response = await ( await fetch( `/${ userData.id }` ) ).json();
        setUserData( { ...response.userData } );
        setTodos( [ ...response.userData.todos ] );
    };

    useEffect( () => {
        updateTodos();
    }, [] );

    useEffect( () => {
        setTodos( userData.todos );
    }, [ userData ] );

    useEffect( () => {
        console.log( todos );
    }, [ todos ] );

    const handleOnClick = async ( id ) => {
        const obj = { target: id };
        const options = {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify( obj )
        };
        const response = await ( await fetch( `./complete/${ userData.id }`, options ) ).json();
        console.log( response );
        setUserData( { ...response } );
    };


    return (
        <Grid container direction="row" className={classes.main}>
            <Grid item xs={false} md={2} />
            <Grid item xs={12} md={8} className={classes.box}>
                <Grid container>
                    <Grid item xs={12}>
                        <IconButton id="add-note" onClick={() => { setPath( '/add' ); }}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                        <label htmlFor="add-todo" className={classes.noSelect}>Add a new Todo</label>
                    </Grid>
                    <Grid item xs={12}>
                        <Tabs value={value} setValue={setValue} />
                    </Grid>
                </Grid>

                <Grid container className={classes.todos}>
                    <Grid item xs={12}>
                        {
                            todos && todos.length ? todos.map( todo => <Todo id={todo.id} complete={handleOnClick} title={todo.title} date={todo.date} completed={todo.isComplete} /> ) :
                                <Grid item xs={12} className={classes.message}><div>No Todo</div></Grid>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={false} md={2} />
        </Grid>
    );
}
