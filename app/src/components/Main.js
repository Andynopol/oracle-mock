import React, { useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import panther from '../res/pink-panther.png';


export default function Main () {

    const [ auth, setAuth ] = useState( null );

    useEffect( () => {
        console.log( auth );
    }, [ auth ] );

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" render={() => <Login panther={panther} setAuth={setAuth} />} />
                <Route path="/register" render={() => <Register panther={panther} setAuth={setAuth} />} />
            </Switch>
            {!auth ? <Redirect to="/login" /> : <Redirect to="/" />}
        </Router>
    );
}
