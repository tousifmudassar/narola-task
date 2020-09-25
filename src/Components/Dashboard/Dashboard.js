import React from "react";
import Header from "./../Header";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
// import Todos from './../Todos/Todos';
import queryString from "query-string";

const Dashboard = (props) => {
  return (
    <div>
      <Header />

      <Link className="nav-link" to="/series">
        <Card>
          <CardImg
            top
            width="100%"
            src="./../images/download.png"
            alt="Popular Series"
          />
          <CardBody>
            <CardText>
              <small className="text-muted">Popular Series</small>
            </CardText>
          </CardBody>
        </Card>
      </Link>
      <Link className="nav-link" to="/movies">
        <Card>
          <CardImg
            top
            width="100%"
            src="./../images/download.png"
            alt="Popular Movies"
          />
          <CardBody>
            <CardText>
              <small className="text-muted">Popular Movies</small>
            </CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Dashboard;
