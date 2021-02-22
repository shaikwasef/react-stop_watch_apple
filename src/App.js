import React from "react";
import "./style.css";


class ScrollLap extends React.Component {
  render(){
    return (
      <div className="scroll_lap"></div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
    <div className ="buttons start" onClick = {this.props.onClick}>Start</div>
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
    const seconds = this.props.seconds ;
    const minutes = this.props.minutes;
    const hours = this.props.hours;
    const time = ('00' + hours.toString()).slice(-2) + ':' + ('00' + minutes.toString()).slice(-2) + ':' + ('00' + seconds.toString()).slice(-2);
    return (
      <div id="timer" >{time}</div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {seconds : 0 , minutes : 0 , hours :0 , start : 0};
    this.tick = this.tick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    //this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleStartClick(){
    const start_button = !(this.state.start);
    this.setState({start : start_button});
    if (start_button == 1){
      this.timerID = setInterval(this.tick, 1000);
    }
  }
  
  tick(){
    var seconds = this.state.seconds ;
    var minutes = this.state.minutes ;
    var hours = this.state.hours;
    seconds = seconds + 1 ;
    if (seconds > 59){
      minutes = Math.floor(seconds/60);
      seconds  = 0 ;
    }
    if(minutes > 59){
      hours = Math.floor(minutes/60);
      minutes = 0 ;
    }
    this.setState({seconds : seconds , minutes : minutes , hours : hours});
  }

  render(){
    return (
    <body> 
      <Timer seconds = {this.state.seconds} minutes = {this.state.minutes} hours = {this.state.hours}/>
      <div className ="row_buttons">
        <LapButton />
        <StartButton onClick = {this.handleStartClick}/>
        <ResetButton/>
      </div>
      <ScrollLap />
    </body>
    );
  }
}

export default App;
