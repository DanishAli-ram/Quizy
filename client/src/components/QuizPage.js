import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Jumbotron, Form, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { selectSong } from '../actions';

let count = 0;
let scoreCount = 0

class QuizPage extends React.Component{
    state = {answer: null, correct: 0, incorrect:0, score:0 }


    onValueChange =(event) => {
        if(this.props.correctone === event.target.value){
            count++;
            scoreCount +=10
            this.setState({correct:count, score: scoreCount})
        }else{
            count++
            this.setState({incorrect:count})
        }
    }

    render() {
        return (
          <div  style={{width:'600px', margin:'auto',marginTop:'100px'}}>
            <Jumbotron>
              <h5>
                {this.props.question}
              </h5>
              <div>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label={this.props.firstRadio}
                      value={this.props.firstRadio}
                      onChange={this.onValueChange}
                      name="answer"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label={this.props.secondRadio}
                      value={this.props.secondRadio}
                      onChange={this.onValueChange}
                      name="answer"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label={this.props.thirdRadio}
                      value={this.props.thirdRadio}
                      onChange={this.onValueChange}
                      name="answer"
                      id="formHorizontalRadios3"
                    />
                    <Form.Check
                      type="radio"
                      label={this.props.fourthRadio}
                      value={this.props.fourthRadio}
                      onChange={this.onValueChange}
                      name="answer"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </div>
              <div style={{float:'left'}}>
                <Button onClick={this.props.onBack} variant="primary">Back</Button>
              </div>
              <div style={{float:'right'}}>
                  <Button onClick={() => { this.props.onNext(); this.props.selectSong(this.state)}} variant="primary">Next</Button>
              </div>
            </Jumbotron>
           
          </div>
        );
    }
};

export default connect(null,{ selectSong } )(QuizPage);
