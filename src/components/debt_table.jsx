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

  const allChecked = checkedStates.every(checked => checked)

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

  const rows = debts.map((debt, i) => (
    <DebtRow 
      key={debt.id} 
      debt={debt} 
      checked={checkedStates[i]} 
      handleToggleCheck={handleToggleCheck(i)} />
  ))

  return (
    <div className="debt-table">
      <input type="checkbox" 
        checked={allChecked} 
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

      {rows}
    </div>
  )
}

export default DebtTable