import React, { useState, useEffect } from 'react';
import Todos from './Home';
import Login from './Login';
import Register from './Register';
import AddTodo from './Add';
import Nav from './Nav';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import panther from '../res/pink-panther.png';
import { Grid } from '@material-ui/core';


export default function Main () {

    const [ auth, setAuth ] = useState( true );

    useEffect( () => {
        console.log( auth );
    }, [ auth ] );

    return (
        <Router>

            {auth ? <Nav setAuth={setAuth} /> : null}
            <Switch>
                <Route path="/todos" exact render={() => <Todos userData={auth} />} />
                <Route path="/todos/add" render={() => <AddTodo setUserData={setAuth} userData={auth} />} />
                <Route path="/login" render={() => <Login panther={panther} setAuth={setAuth} />} />
                <Route path="/register" render={() => <Register panther={panther} setAuth={setAuth} />} />
            </Switch>
            {!auth ? <Redirect to="/login" /> : <Redirect to="/todos" />}
        </Router>
    );
}
