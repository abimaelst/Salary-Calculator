import React, { Component } from 'react'

export default class IRRF extends Component {

  render() {
    const { irrfBase, irrfDiscount, percentIrrf } = this.props
    return (
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">attach_money</i>
          <input disabled value={`${Number(irrfBase).toFixed(2)}`} id="disabled" type="text" className="validate" />
          <label htmlFor="disabled">IRRF Base</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">local_atm</i>
          <input disabled value={`${Number(irrfDiscount).toFixed(2)}  (${Number(percentIrrf).toFixed(2)})`} id="disabled" type="text" className="validate" />
          <label htmlFor="disabled">IRRF Discount</label>
        </div>
      </div>
    )
  }
}
