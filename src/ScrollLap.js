import React from "react";
import "./style.css";


class ScrollLap extends React.Component {
  render(){
    return (
      <div className="scroll_lap">
      {this.props.lap_content.map((lap, index) => (
        <div className = "">Hello, {person.name} from {person.country}!</p>
      ))}
      </div>
    );
  }
}

export default ScrollLap ;