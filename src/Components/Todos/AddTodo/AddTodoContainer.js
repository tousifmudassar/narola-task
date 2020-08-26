import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from './../Actions';
import AddTodo from './AddTodo';

class AddTodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            todo: e.target.value
        });
    }

    handleOnFormSubmit = (e) => {
        e.preventDefault();
        const {todo} = this.state;
        const {id} = this.props.user;
     
        this.setState({todo: ''});
        if(todo){
            this.props.createTodo({
                id,
                todo
            });
        }
        

    }

    render() {
        return(
            <AddTodo 
                todo = {this.state.todo}
                onChangeHandler = {this.onChangeHandler}
                handleOnFormSubmit = {this.handleOnFormSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    createTodo : actions.createTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodoContainer);