import React, { Component } from 'react'

export default class ProgressBar extends Component {

  render() {
    const { percentInss, percentIrrf } = this.props
    return (
      <div className="progress green lighten-1 tooltipped">
        <div className="determinate blue" style={{ width: `${percentInss + percentIrrf}%`, animation: "grow 2s" }}></div>
        <div className="determinate red" style={{ width: `${percentInss}%`, animation: "grow 2s" }}></div>
      </div>
    )
  }
}