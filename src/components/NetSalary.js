import React, { Component } from 'react'
import css from './app.module.css'

export default class NetSalary extends Component {
  render() {
    const { netSalary } = this.props
    return (
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">local_atm</i>
          <input disabled value={Number(netSalary).toFixed(2)} id="disabled" type="text" className={`validate ${css.label__netSalary}`} />
          <label htmlFor="disabled">Net Salary</label>
        </div>
      </div>
    )
  }
}
