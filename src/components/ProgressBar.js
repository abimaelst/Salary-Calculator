import React, { Component } from 'react'
import css from '../components/app.module.css'

export default class ProgressBar extends Component {

  render() {
    const { barInss, barIrrf } = this.props
    return (
      <div className={`progress green lighten-1 tooltipped ${css.bar}`}>
        <div className={`determinate blue ${css.bar}`} style={{ width: `${barInss + barIrrf}%`, animation: "grow 4s" }}></div>
        <div className={`determinate red ${css.bar}`} style={{ width: `${barInss}%`, animation: "grow 4s" }}></div>
      </div>
    )
  }
}