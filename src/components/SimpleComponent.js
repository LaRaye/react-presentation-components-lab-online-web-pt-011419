import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }
  
  handleClick = () => {
    this.state.mood = "sad"  
  }
  
  render() {
    return (
      <div>{this.state.mood}</div>
    )
  }
}
