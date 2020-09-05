import React from "react";
import QuizPage from "./QuizPage";
import Result from './Result';

const array = [
  {
    question: "When i had you to myself, i didnt want you around",
    firstRadio: "The Love You Save",
    secondRadio: "I Want You Back", // correct one
    thirdRadio: "I'll Be There",
    fourthRadio: "Mama's pearl",
    correctone: "I Want You Back"
  },
  {
    question: "So DJ spin the sounds, there aint no way that you're gonna sit us down",
    firstRadio: "Off The Wall",
    secondRadio: "Girlfriend",
    thirdRadio: "Burn This Disco Out", // correct one
    fourthRadio: "Rock With You",
    correctone: "Burn This Disco Out"
  },
  {
    question: "In time I knew that love would bring, This happiness to me",
    firstRadio: "Bad",
    secondRadio: "You Rock My World", // correct one
    thirdRadio: "The Love You Save",
    fourthRadio: "Loves gone Bad",
    correctone: "You Rock My World"
  },
  {
    question: "Billie Jean was always talking when nobody else was talking, telling lies and rubbing shoulders so they called her mouth a motor",
    firstRadio: "Wanna Be Starting Something", // correct one
    secondRadio: "Billie Jean",
    thirdRadio: "Thriller",
    fourthRadio: "Human Nature",
    correctone: "Wanna Be Starting Something"
  },
  {
    question: "If you want to know why there is a love that cannot lie, love is strong it only cares for joyful giving",
    firstRadio: "Earth Song",
    secondRadio: "We are the world",
    thirdRadio: "What more can i give",
    fourthRadio: "Heal the world", // correct one
    correctone: "Heal the world"
  },
];

let count = 0;

class QuizWrapper extends React.Component {
  state = { arr: array[0] };

  onNextClick = () => {
    if (count === 4) {
        this.props.history.push("/result");
    }
    count++;
    this.setState({ arr: array[count] });
  };

  onBackClick = () => {
    if (count === 0) {
        this.props.history.push("/");
    }
    count--;
    this.setState({ arr: array[count] });
  };

  render() {
    if(this.state.arr === undefined){
      return <div></div>
    }
    return (
      <div>
        <QuizPage
          question={this.state.arr.question}
          firstRadio={this.state.arr.firstRadio}
          secondRadio={this.state.arr.secondRadio}
          thirdRadio={this.state.arr.thirdRadio}
          fourthRadio={this.state.arr.fourthRadio}
          correctone= {this.state.arr.correctone}
          onNext={this.onNextClick}
          onBack={this.onBackClick}
        />
      </div>
    );
  }
}

export default QuizWrapper;
