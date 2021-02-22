import React from "react";
import "./style.css";
import StartButton from "./StartButton.js";
import ResetButton from "./ResetButton.js";
import ScrollLap from "./ScrollLap.js";
import LapButton from "./LapButton.js";
import Timer from "./Timer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      start: true,
      laps: [],
      previousTime: "00:00:00"
    };
    this.tick = this.tick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleLapClick = this.handleLapClick.bind(this);
  }

  handleLapClick() {
    const time_difference =
      (this.state.hours - parseInt(this.state.previousTime(0, 2))).toString() +
      ":" +
      (this.state.minutes - parseInt(this.state.previousTime(3, 5))).toString() +
      ":" +
      (this.state.seconds - parseInt(this.state.previousTime(6))).toString();
    this.setState({ laps: laps.concat(time_difference) });
    this.setState({ previousTime: time_difference });
  }

  handleStartClick() {
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

  tick() {
    let seconds = this.state.seconds;
    seconds = seconds + 1;
    if (seconds > 59) {
      this.setState({ minutes: Math.floor(seconds / 60) });
      seconds = 0;
    }
    if (this.state.minutes > 59) {
      this.setState({ hours: Math.floor(this.state.minutes / 60) });
      this.setState({ minutes: 0 });
    }
    this.setState({ seconds: seconds });
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
          <StartButton
            onClick={this.handleStartClick}
            status={this.state.start}
          />
          <ResetButton onClick={this.handleResetClick} />
        </div>
        <ScrollLap lap_content={this.state.laps} />
      </body>
    );
  }
}

export default App;
