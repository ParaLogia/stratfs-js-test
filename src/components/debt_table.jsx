import React, { useState, useEffect } from 'react'
import DebtRow from './debt_row'
import DebtForm from './debt_form'
import '../style/debt_table.css'


const DebtTable = () => {
  const [ debts, setDebts ] = useState([])

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.forEach(debt => {
          debt.checked = true
        })
        setDebts(data)
      })
  }, [])

  const addDebt = (debt) => {
    setDebts(debts.concat([debt]))
  }

  const handleRemoveDebt = (e) => {
    e.preventDefault()
    setDebts(debts.slice(0, debts.length-1))
  }

  const handleToggleAllChecks = (e) => {
    const newDebts = []
    debts.forEach(debt => {
      newDebts.push(Object.assign({}, debt, { checked: e.target.checked }))
    })
    setDebts(newDebts) 
  }

  const handleToggleCheck = (i) => (e) => {
    const newDebts = Array.from(debts)
    newDebts[i] = Object.assign({}, debts[i], { checked: e.target.checked })
    setDebts(newDebts)
  }

  let debtRows = [];
  let rowsChecked = 0;
  let totalBalance = 0;

  debts.forEach((debt, i) => {
    debtRows.push(
      <DebtRow
        key={i}
        debt={debt}
        handleToggleCheck={handleToggleCheck(i)} />
    )

    if (debt.checked) {
      rowsChecked += 1
      totalBalance += parseFloat(debt.balance)
    }
  })

  return (
    <div className="debt-table">
      <div className="debt-table-grid">
        <input type="checkbox" 
          checked={rowsChecked === debts.length} 
          onChange={handleToggleAllChecks} />

        <div className="debt-table-header">
          Creditor
        </div>
        <div className="debt-table-header">
          First Name
        </div>
        <div className="debt-table-header">
          Last Name
        </div>
        <div className="debt-table-header right-align">
          Min Pay%
        </div>
        <div className="debt-table-header right-align">
          Balance
        </div>

        {debtRows}

        <button onClick={handleRemoveDebt}>
          Remove Debt
        </button>
        <span className="grid-col-2-7"></span>

        <DebtForm addDebt={addDebt} />

        <div className="debt-table-total right-align">
          Total
        </div>
        <div className="debt-table-total balance right-align grid-col-2-7">
          {totalBalance.toFixed(2)}
        </div>
      </div>

      <footer className="debt-table-footer">
        <span>
          Total Row Count: {debts.length}
        </span>
        <span>
          Check Row Count: {rowsChecked}
        </span>
      </footer>
    </div>
  )
}

export default DebtTable