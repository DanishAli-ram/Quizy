import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, Jumbotron} from "react-bootstrap";
import { connect } from 'react-redux';

class Result extends React.Component {
  render() {
    if(this.props.song=== null){
      return <div></div>
    }
    return (
      <div style={{ width: "600px", margin: "auto", marginTop: "100px" }}>
        <Jumbotron>
          <ul>
            <li>Result: </li>
            <li>Correct: {this.props.song.correct} </li>
            <li>Incorrect: {this.props.song.incorrect} </li>
            <li>Score: {this.props.song.score} </li>
          </ul>
          <div style={{ marginTop: "50px", margin: "auto", width: "200px" }}>
            <Button
              onClick={() => {
                this.props.history.push("/");
              }}
              variant="primary"
            >
              Take our Quiz again
            </Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(Result);
