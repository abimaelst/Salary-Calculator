import React, { Component } from 'react';
import Salary from './components/Salary';
import INSS from './components/INSS';
import IRRF from './components/IRRF';
import NetSalary from './components/NetSalary';
import ProgressBar from './components/ProgressBar';

import css from './components/app.module.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      salary: '',
      inssBase: 0,
      inssDiscount: 0,
      irrfBase: 0,
      irrfDiscount: 0,
      netSalary: 0,
      percentInss: 0,
      percentIrrf: 0,
    }
  }


  handleSalaryChange = (value) => {
    this.setState({
      salary: value,
      inssBase: value,
      irrfBase: value,
      irrfDiscount: value,
      netSalary: value
    }, () => this.calculateInssDiscount(this.state.inssBase, this.state.irrfBase))
  }

  calculateInssDiscount = (inssBase, irrfBase) => {
    let valueInssDiscout = 0
    let inssBaseFix = inssBase

    if (inssBase <= 1045) {
      valueInssDiscout = inssBase * 0.075
    }
    if (inssBase > 1045 && inssBase <= 2089.6) {
      inssBase -= 1045
      valueInssDiscout += (inssBase * 0.09) + 78.38
    }
    if (inssBase > 2089.6 && inssBase <= 3134.4) {
      inssBase -= 2089.6
      valueInssDiscout += (inssBase * 0.12) + 172.39
    }
    if (inssBase > 3134.4 && inssBase <= 6101.06) {
      inssBase -= 3134.4
      valueInssDiscout += (inssBase * 0.14) + 297.77
    }

    // Aguarda o calculo do disconto de inss para calcular o disconto de IRRF

    this.setState({
      inssDiscount: valueInssDiscout,
      irrfBase: irrfBase - valueInssDiscout,
      percentInss: (valueInssDiscout / inssBaseFix) * 100
    }, () => this.calculateIrrfDiscount(irrfBase, this.state.inssDiscount))

  }

  calculateIrrfDiscount = (irrfBase, inssDiscount) => {
    let valueIrrfDiscout = 0

    irrfBase -= inssDiscount

    if (irrfBase > 1903.98 && irrfBase < 2826.65) {
      valueIrrfDiscout = (irrfBase * 0.075 - 142.8)
    }
    if (irrfBase > 2826.66 && irrfBase < 3751.05) {
      valueIrrfDiscout = (irrfBase * 0.15 - 354.8)
    }
    if (irrfBase > 3751.06 && irrfBase < 4664.68) {
      valueIrrfDiscout = (irrfBase * 0.225 - 636.13)
    }
    if (irrfBase > 4664.69) {
      valueIrrfDiscout = (irrfBase * 0.275 - 869.36)
    }

    const { salary, netSalary } = this.state

    this.setState({
      irrfDiscount: valueIrrfDiscout,
      percentIrrf: (valueIrrfDiscout / salary) * 100,
      netSalary: netSalary - (valueIrrfDiscout + inssDiscount)
    })
  }

  render() {
    const { inssBase, inssDiscount, irrfBase, irrfDiscount, netSalary, percentInss, percentIrrf } = this.state
    return (
      <div className={`container ${css.container}`}>
        <div className={`${css.header}`}>
          <h2 className={`${css.header__h2}`}>React Salary Calculator</h2>
        </div>
        <div className="row">
          <form className="col center s12">
            <Salary onChangeSalary={this.handleSalaryChange} />
            <INSS inssBase={inssBase} inssDiscount={inssDiscount} percentInss={percentInss} />
            <IRRF irrfBase={irrfBase} irrfDiscount={irrfDiscount} percentIrrf={percentIrrf} />
            <NetSalary netSalary={netSalary} />
          </form>
        </div>
        <ProgressBar percentInss={percentInss} percentIrrf={percentIrrf} />
      </div>
    )
  }
}
