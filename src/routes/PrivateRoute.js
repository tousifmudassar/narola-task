import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({component: Component, ...rest}) => {
    let isAuthenticated = Cookies.get('token') && true;

    return <Route 
        {...rest}
        render = {props => isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
    />
}

export default PrivateRoute;