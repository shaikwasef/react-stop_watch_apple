import "./style.css";
import React from "react";

class Timer extends React.Component{
  component(props){
    super(props);
    this.state = {previousTime : 0}
  }

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

export default Timer ;