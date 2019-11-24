import React, { Component } from 'react';
import { choice, arrayRemove } from './helpers';
import './Square.css';

class Square extends Component {
  static defaultProps = {
    allColors: ['blue', 'red', 'yellow', 'brown', 'green', 'black', 'pink', 'orange', 'purple', 'salmon', 'palegreen', 'olive', 'indianred', 'darkorange', 'powderblue', 'aquamarine', 'plum', 'magenta']
  }
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) }
    this.handleClick = this.handleClick.bind(this);
  }
  changeColor(){
    const newArray = arrayRemove(this.props.allColors, this.state.color);
    const newColor = choice(newArray);
    this.setState(st => {
      return { color: newColor };
    });
  }
  handleClick(){
    this.changeColor();
  }
  render() {
    return (
      <div className={`Square ${this.state.color}`} onClick={this.handleClick}></div>
    )
  }
}

export default Square;
