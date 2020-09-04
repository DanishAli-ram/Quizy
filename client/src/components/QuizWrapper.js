import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import QuizPage from "./QuizPage";
import Result from "./Result";

const array = [
  {
    question:
      "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    firstRadio: "first radio",
    secondRadio: "second radio",
    thirdRadio: "third radio",
    fourthRadio: "fourth radio",
  },
  {
    question:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima facilis dolores delectus exercitationem? Delectus, voluptatem animi architecto ab velit magnam odit. Tempore consectetur id sed, sunt perferendis fugiat quam iure.",
    firstRadio: "first radio",
    secondRadio: "second radio",
    thirdRadio: "third radio",
    fourthRadio: "fourth radio",
  },
  {
    question:
      "This is a simple hero unit, dsfdskjdskjfkldsjfkldsjflkdsjklfjdsklfjdslkfjdslkjfkldjfkldsjfkldsjfkldsjfkldsjflkdsjklf",
    firstRadio: "first radio",
    secondRadio: "second radio",
    thirdRadio: "third radio",
    fourthRadio: "fourth radio",
  },
  {
    question:
      "he is a fgoog bouy scout and a man of power component for calling extra attention to featured content or information.",
    firstRadio: "first radio",
    secondRadio: "second radio",
    thirdRadio: "third radio",
    fourthRadio: "fourth radio",
  },
  {
    question:
      "what the hell am i doing here im writing code which i dont know attention to featured content or information.",
    firstRadio: "first radio",
    secondRadio: "second radio",
    thirdRadio: "third radio",
    fourthRadio: "fourth radio",
  },
];

let count = 0;

class QuizWrapper extends React.Component {
  state = { arr: array[0] };

  onNextClick = (term) => {
    if (count === 4) {
        this.props.history.push("/result");
    }
    count++;
    this.setState({ arr: array[count] });
  };

  onBackClick = (term) => {
    if (count === 0) {
        this.props.history.push("/");
    }
    count--;
    this.setState({ arr: array[count] });
  };

  render() {
    return (
      <div>
        <QuizPage
          question={this.state.arr.question}
          firstRadio={this.state.arr.firstRadio}
          secondRadio={this.state.arr.secondRadio}
          thirdRadio={this.state.arr.thirdRadio}
          fourthRadio={this.state.arr.fourthRadio}
          onNext={this.onNextClick}
          onBack={this.onBackClick}
        />
      </div>
    );
  }
}

export default QuizWrapper;
