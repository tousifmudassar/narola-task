import React,{Component} from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import Header from './../Header';


class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props.user);
    }

    render(){
        const {user } = this.props;
        return(
            <>
                <Header />
                <Profile user={user}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProfileContainer);