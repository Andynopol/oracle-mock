import React, { useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import panther from '../res/pink-panther.png';


export default function Main () {

    const [ auth, setAuth ] = useState( null );

    useEffect( () => {
        console.log( auth );
    }, [ auth ] );

    return (
        <Router>
            <Switch>
                <Route path="/login" render={() => <Login panther={panther} setAuth={setAuth} />} />
                <Route path="/user" component={Home} />
                <Route path="/register" render={() => <Register panther={panther} setAuth={setAuth} />} />
            </Switch>
            {!auth ? <Redirect to="/login" /> : <Redirect to="/user" />}
        </Router>
    );
}
