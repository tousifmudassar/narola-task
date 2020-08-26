import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from './../Actions';
import TodoList from './TodoList';

class TodoListContainer extends Component {
    constructor(props) {
        super(props);

    }

    handleTodoCompleted = (id) => {
        this.props.markCompleted(id);
    }

    render() {
        return(
            <TodoList todos={this.props.todos} handleTodoCompleted={this.handleTodoCompleted} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    markCompleted: actions.markCompleted
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer);