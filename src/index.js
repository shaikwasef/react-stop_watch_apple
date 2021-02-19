import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class StartButton extends React.Component {
  render() {
    return (
    <div className ="buttons start">Start</div>
    );
  }
}

class ResetButton extends React.Component{
  render() {
    return (
      <div className ="buttons reset reset_hidden">Reset</div>
    );
  }
}

class LapButton extends React.Component{
  render(){
    return (
      <div className ="buttons lap">Lap </div>
    );
  }
}
class Timer extends React.Component{
  render(){
    return (
      <div id="timer" >00:00:00</div>
    );
  }
}

class StopWatch extends React.Component {
  render(){
    return (
    <body> 
      <Timer/>
      <div className ="row_buttons">
        <LapButton />
        <StartButton/>
        <ResetButton/>
      </div>
      <div class="scroll_lap"></div>
    </body>
    );
  }
}

ReactDOM.render(<StopWatch /> , document.getElementById('root'));
