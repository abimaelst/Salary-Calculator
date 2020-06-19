import React, { Component } from 'react'

export default class INSS extends Component {

  render() {
    const { inssBase, inssDiscount, percentInss } = this.props

    return (
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">attach_money</i>
          <input disabled value={`${Number(inssBase).toFixed(2)}`} id="validate" type="text" className="validate" />
          <label htmlFor="disabled">INSS Base</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">local_atm</i>
          <input disabled value={`${Number(inssDiscount).toFixed(2)}  (${Number(percentInss).toFixed(2)})`} id="disabled" type="text" className="validate" />
          <label htmlFor="disabled">INSS Discount</label>
        </div>
      </div>
    )
  }
}
