import React, { Component } from 'react'

export default class NetSalary extends Component {
  render() {
    const { netSalary } = this.props
    return (
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">monetization_on</i>
          <input disabled value={Number(netSalary).toFixed(2)} id="disabled" type="text" className="validate green-text" />
          <label htmlFor="disabled">Net Salary</label>
        </div>
      </div>
    )
  }
}
