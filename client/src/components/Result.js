import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, Jumbotron} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

const Result = (props) => {
  return (
    <div style={{width:'600px', margin:'auto',marginTop:'100px'}}>
      <Jumbotron>
        <ul>
            <li>Result: </li>
            <li>Correct: </li>
            <li>Incorrect: </li>
            <li>Score: </li>
        </ul>
        <div style={{marginTop:'50px', margin:'auto', width:'200px'}}>
          <Button onClick={() => { props.history.push("/") } } variant="primary">Take our Quiz again</Button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Result;
