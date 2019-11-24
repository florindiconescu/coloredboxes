import React, { Component } from 'react';
import Square from './Square';
import './Squares.css';

class Squares extends Component {
  static defaultProps = {
    numBoxes: 18
  }
  render() {
    const boxes = Array.from({length: this.props.numBoxes}).map(
      () => <Square />
    )
    return <div className='Squares'>{boxes}</div>
  }
}

export default Squares;
