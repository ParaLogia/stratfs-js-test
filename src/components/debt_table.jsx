import React, { useState, useEffect } from 'react'
import DebtRow from './debt_row'
import '../style/debt_table.css'


const DebtTable = () => {
  const [ debts, setDebts ] = useState([])
  const [checkedStates, setCheckedStates] = useState([])

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const newCheckedStates = Array(data.length)
        newCheckedStates.fill(true)
        setCheckedStates(newCheckedStates)
        setDebts(data)
      })
  }, [])

  const handleToggleAllChecks = (e) => {
    const newCheckedStates = Array(checkedStates.length)
    newCheckedStates.fill(e.target.checked)
    setCheckedStates(newCheckedStates) 
  }

  const handleToggleCheck = (i) => (e) => {
    const newCheckedStates = Array.from(checkedStates)
    newCheckedStates[i] = e.target.checked
    setCheckedStates(newCheckedStates) 
  }

  let debtRows = [];
  let rowsChecked = 0;
  let totalBalance = 0;

  debts.forEach((debt, i) => {
    debtRows.push(
      <DebtRow
        key={debt.id}
        debt={debt}
        checked={checkedStates[i]}
        handleToggleCheck={handleToggleCheck(i)} />
    )

    if (checkedStates[i]) {
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