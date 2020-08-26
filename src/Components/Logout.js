import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './Login/Actions';

class Logout extends Component {
    constructor(props){
        super(props);
        props.userLogout();
        props.history.push('/');
    }

    render(){
        return true;
    }
}

const mapDispatchToProps = {
    userLogout: actions.userLogout
}
export default connect(undefined,mapDispatchToProps)(Logout);