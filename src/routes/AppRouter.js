import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './../Components/Login/LoginContainer';
import Dashboard from './../Components/Dashboard/Dashboard';
import Profile from './../Components/Profile/ProfileContainer';
import NotFound from './../Components/NotFound';
import PrivateRoute from './PrivateRoute';
import Logout from './../Components/Logout';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/logout" component={Logout} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;