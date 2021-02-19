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
      <div id="timer" >{time}</div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {seconds : 0};
    this.tick = this.tick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.timerID = setInterval(this.tick, 1000);
  }
  
  tick(){
    let seconds = this.state.seconds ;
    seconds = seconds + 1 ;
    this.setState({seconds : seconds});
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

export default App;
