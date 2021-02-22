import React from "react";
import "./style.css";
import StartButton from "./StartButton.js";
import ResetButton from "./ResetButton.js";
import ScrollLap from "./ScrollLap.js";
import LapButton from "./LapButton.js";
import Timer from "./Timer.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      start: true,
      laps: [],
      previousTime: 0
    };
    this.tick = this.tick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.getMinutes  = this.getMinutes.bind(this);
    this.lapTime = this.lapTime.bind(this);
  }


  handleStartClick(){
    const start_button = !this.state.start;
    this.setState({ start: start_button });
    if (start_button == 0) {
      this.timerID = setInterval(this.tick, 1000);
    } else {
      clearInterval(this.timerID);
    }
  }

  handleResetClick() {
    clearInterval(this.timerID);
    this.setState({ seconds: 0, minutes: 0, hours: 0, start: true });
  }

  tick(){
    seconds = this.state.seconds ;
    seconds = seconds + 1 ;
    if (seconds > 59) {
      minutes = Math.floor(seconds / 60);
      seconds = 0;
    }
    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      minutes = 0;
    }
    this.setState({seconds : seconds , minutes: minutes, hours: hours});
  }

  render() {
    return (
      <body>
        <Timer
          seconds={this.state.seconds}
          minutes={this.state.minutes}
          hours={this.state.hours}
        />
        <div className="row_buttons">
          <LapButton onClick={this.handleLapClick} />
          <StartButton onClick={this.handleStartClick} />
          <ResetButton onClick={this.handleResetClick} />
        </div>
        <ScrollLap />
      </body>
    );
  }
}

export default App;
