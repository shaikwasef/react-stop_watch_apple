import React from "react";
import "./style.css";

class StartButton extends React.Component {
  render() {
    return (
    <div className ="buttons start" onClick = {this.props.onClick}>Start</div>
    );
  }
}
export default StartButton ;