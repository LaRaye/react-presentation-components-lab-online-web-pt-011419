import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }
  
  handleClick = () => {
    this.setState(previousState => {
      return {
        if (previousState.mood === "happy") {
          mood: "sad"
        } else if (previousState.mood === "sad") {
          mood: "happy"
        }
      }
    })  
  }
  
  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
