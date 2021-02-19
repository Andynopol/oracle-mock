import React, { useState, useEffect } from 'react';
import Todos from './Home';
import Login from './Login';
import Register from './Register';
import AddTodo from './Add';
import Nav from './Nav';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import panther from '../res/pink-panther.png';


export default function Main () {
    const [ auth, setAuth ] = useState( null );
    const [ path, setPath ] = useState( '/login' );

    useEffect( () => {
        if ( auth )
        {
            setPath( '/todos' );
        }
        return () => {
            setPath( '/login' );
        };
    }, [ auth ] );

    return (
        <Router>

            {auth ? <Nav setAuth={setAuth} /> : null}
            <Switch>
                <Route path="/todos" exact render={() => <Todos setUserData={setAuth} userData={auth} setPath={setPath} />} />
                <Route path="/add" render={() => <AddTodo setUserData={setAuth} userData={auth} setPath={setPath} />} />
                <Route path="/login" render={() => <Login panther={panther} setAuth={setAuth} setPath={setPath} />} />
                <Route path="/register" render={() => <Register panther={panther} setAuth={setAuth} setPath={setPath} />} />
            </Switch>
            <Redirect to={path} />
        </Router>
    );
}
