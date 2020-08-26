import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import actions from './Actions';
import Login from './Login';
import axios from 'axios';
import Cookies from 'js-cookie';

class LoginContainer extends Component {

    constructor(props) {
        super(props);

    }
    handleLogin = async(e) => {
        e.preventDefault(); 
        // e.persist();
        const email = e.target[0].value;
        this.props.userLogin(email);
        
        // axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`).then((result) => {
        //     result.data.length && Cookies.set('token',email);   
        //     this.props.history.push('/dashboard');
        // }).catch((e) => {
        //     console.log(e);
        // });

        // const result = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
        // result.data.length && Cookies.set('token',email);   
        // //set some data to the store 
        // this.props.history.push('/dashboard');
        
    }

    componentDidUpdate() {
        // this.props.user.id && this.props.history.push('/dashboard');
    }

    render() {
        return this.props.user.id ? <Redirect to="/dashboard" /> : (
            <Login 
                handleLogin = {this.handleLogin}
            />
        );

        // return <Login handleLogin = {this.handleLogin} />
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    userLogin : actions.userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);