import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }
  
  render() {
    return (
      <div value={this.state.mood}></div>
    )
  }
}
