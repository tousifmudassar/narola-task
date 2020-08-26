import React from 'react';
import {Row,Col, Input,Button,Form,FormGroup} from 'reactstrap';

const AddTodo = (props) => {
    return (
        <Row>
            <Col md="8" className="add-todo">
                <Form onSubmit={props.handleOnFormSubmit}>
                    <FormGroup row>
                        <Input 
                            type="text" 
                            placeholder="Add Todo" 
                            value={props.todo} 
                            onChange={props.onChangeHandler}
                        />
                        <Button color="primary">Add</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    )
}

export default AddTodo;