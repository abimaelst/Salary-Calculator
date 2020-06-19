import React, { Component } from 'react'

export default class Salary extends Component {
  handleInputChange = (event) => {
    const value = event.target.value
    this.props.onChangeSalary(value)
  }
  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">monetization_on</i>
          <input id="icon_prefix" onChange={this.handleInputChange} type="number" className="validate" />
          <label htmlFor="icon_prefix">Salary</label>
        </div>
      </div>
    )
  }
}
