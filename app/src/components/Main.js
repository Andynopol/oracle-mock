import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


export default function Main () {

    const [ user, setUser ] = useState( null );

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
            {!user ? <Redirect to="/login" /> : ""}
        </Router>
    );
}
