import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Jumbotron, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuizPage = (props) => {
  return (
    <div  style={{width:'600px', margin:'auto',marginTop:'100px'}}>
      <Jumbotron>
        <h5>
          {props.question}
        </h5>
        <div>
          <Form.Group as={Row}>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label={props.firstRadio}
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label={props.secondRadio}
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label={props.thirdRadio}
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
              <Form.Check
                type="radio"
                label={props.fourthRadio}
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </div>
        <div style={{float:'left'}}>
          <Button onClick={props.onBack} variant="primary">Back</Button>
        </div>
        <div style={{float:'right'}}>
            <Button onClick={props.onNext} variant="primary">Next</Button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default QuizPage;
