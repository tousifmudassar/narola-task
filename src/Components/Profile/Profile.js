import React from 'react';
import {Card,CardBody,Row,Col,Table} from 'reactstrap';
import Header from './../Header';

const Profile = (props) => {
    const {
        id,
        name,
        email,
        address,
        website,
        phone,
        username
    
    } = props.user;
    return (
        <Row>
            <Col md="8" className="profile">
                <Card>
                    <CardBody>
                        <Table>
                            <tbody>
                                <tr><td>Id </td><td>{id}</td></tr>
                                <tr><td>Name </td><td>{name}</td></tr>
                                <tr><td>Username </td><td>{username}</td></tr>
                                <tr><td>Email </td><td>{email}</td></tr>
                                <tr><td>Address </td><td>{address.street}</td></tr>
                                <tr><td>Website </td><td>{website}</td></tr>
                                <tr><td>Phone </td><td>{phone}</td></tr>

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Profile;