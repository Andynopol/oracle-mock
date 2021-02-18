import React, { useState, useEffect } from 'react';
import { Grid, IconButton, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Todo from './Todo';
import Tabs from './Tabs';

const useStyles = makeStyles( ( theme ) => ( {
    main: {
        minHeight: '100vh',
        width: '100%',
        paddingTop: '100px',
    },
    todos: {
        overflowY: 'auto',
        height: '70vh'
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
    }
} ) );

export default function Todos ( props ) {
    const classes = useStyles();
    const { userData } = props;
    const [ todos, setTodos ] = useState( null );
    const [ value, setValue ] = useState( 0 );

    useEffect( () => {

    }, [] );

    const handleAddTodo = () => {
        if ( userData )
        {
            setTodos( { ...userData.todos } );
        }
    };
    return (
        <Grid container direction="row" className={classes.main}>
            <Grid item xs={false} md={2} />
            <Grid item xs={12} md={8}>
                <Link to="/todos/add">
                    <IconButton id="add-note" onClick={handleAddTodo}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Link>
                <label htmlFor="add-todo" className={classes.noSelect}>Add a new Todo</label>
                <Tabs value={value} setValue={setValue} />
                <Grid container className={classes.todos}>
                    {/* {
                        todos ? todos.map( todo => <Todo title={todo.title} date={todo.date} completed={todo.completed} /> ) :
                            <Grid item xs={12} className={classes.message}><div>No Todo</div></Grid>} */}
                    <Todo title='titleasdasdasdsadasdasdasdsad' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>
                    <Todo title='title' date="21.02.2021" completed={true}></Todo>

                </Grid>
            </Grid>
            <Grid item xs={false} md={2} />
        </Grid>
    );
}
