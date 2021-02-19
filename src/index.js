import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class ScrollLap extends React.Component {
  render(){
    return (
      <div class="scroll_lap"></div>
    );
  }
}
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
    const time = this.props.time ;
    return (
      <div id="timer" >00:00:00</div>
    );
  }
}

class StopWatch extends React.Component {
  constructor(props){
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {seconds : 0};
  }

  thisComponentWillMount(){
    this.timerId = setInterval(this.tick,1000);
  }
  
  tick(){
    this.setState({seconds : seconds++});
  }

  render(){
    return (
    <body> 
      <Timer time = {this.state.seconds}/>
      <div className ="row_buttons">
        <LapButton />
        <StartButton/>
        <ResetButton/>
      </div>
      <ScrollLap />
    </body>
    );
  }
}

ReactDOM.render(<StopWatch/> , document.getElementById('root'));
