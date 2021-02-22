import React from "react";
import "./style.css";


class LapButton extends React.Component{
  render(){
    return (
      <div className ="buttons lap" onClick = {this.props.onClick}>Lap </div>
    );
  }
}

export default LapButton ;