import React from 'react';
import {Card,CardBody,Button} from 'reactstrap';

const Todo = (props) => {
    const {title,completed,id} = props.todo;
    return(
        <Card>
            <CardBody>
                <p className={completed ? "todo-title todo-title-p" : "todo-title"}>{title}</p>
                <Button onClick={(e) => props.handleTodoCompleted(id)} close />
            </CardBody>
        </Card>
    )
}

export default Todo;