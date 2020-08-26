import React from 'react';
import {Row,Col,Jumbotron} from 'reactstrap';
import AddTodo from './AddTodo/AddTodoContainer';
import TodoList from './TodoList/TodoListContainer';

const Todos = (props) => {
    return(
        <Row>
            <Col md="8" className="profile">
                <Jumbotron>
                    <AddTodo />
                    <TodoList />
                </Jumbotron>
            </Col>
        </Row>
    )
}

export default Todos;