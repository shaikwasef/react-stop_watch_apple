import React from "react";
import "./style.css";

class StartButton extends React.Component {
  
  render(){
    let button_status = this.props.status ? ' buttons start' : 'buttons stop' ;
    let value = this.props.status ? 'Start' : 'Stop' ;
    return (
    <div className = {button_status} onClick = {this.props.onClick}>{value}</div>
    );
  }
}
export default StartButton ;