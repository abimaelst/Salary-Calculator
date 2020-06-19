import React, { Component } from 'react'

export default class IRRF extends Component {
  showDiscoutPercente = () => {
    console.log('onChange ON')
  }

  render() {
    const { irrfBase, irrfDiscount, percentIrrf } = this.props
    return (
      <div className="row">
        <div className="input-field col s12 m6 l6">
          <i className="material-icons prefix">attach_money</i>
          <input disabled value={`${Number(irrfBase).toFixed(2)}`}
            id="disabled" type="text" className="validate"
          />
          <label htmlFor="disabled">IRRF Base</label>
        </div>
        <div className="input-field col s12 m6 l6">
          <i className="material-icons prefix">local_atm</i>
          <input disabled value={`${Number(irrfDiscount).toFixed(2)}  ${percentIrrf}`}
            onChange={this.showDiscoutPercente} id="disabled" type="text" className="validate blue-text"
          />
          <label htmlFor="disabled">IRRF Discount</label>
        </div>
      </div>
    )
  }
}
