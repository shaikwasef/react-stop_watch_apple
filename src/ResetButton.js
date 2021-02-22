import React from "react";
import "./style.css";

class ResetButton extends React.Component{
  render() {
    return (
      <div className ="buttons reset reset_hidden" onClick = {this.props.onClick}>Reset</div>
    );
  }
}

export default ResetButton; 