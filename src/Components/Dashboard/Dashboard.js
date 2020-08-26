import React from 'react';
import Header from './../Header';
import Todos from './../Todos/Todos';
import queryString from 'query-string';

const Dashboard = (props) => {
    return (
        <div>
            <Header />
            <Todos />
        </div>
    );
}

export default Dashboard;
