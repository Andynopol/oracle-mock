import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import panther from '../res/pink-panther.png'


export default function Main() {

    const [user, setUser] = useState(null);

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" render={() => <Login panther={panther} />} />
                <Route path="/register" render={() => <Register panther={panther} />} />
            </Switch>
            {!user ? <Redirect to="/login" /> : ""}
        </Router>
    );
}
