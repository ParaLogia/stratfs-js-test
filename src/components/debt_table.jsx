import React, { useState, useEffect } from 'react'
import DebtRow from './debt_row'
import '../style/debt_table.css'

const DebtTable = () => {
  const [ debts, setDebts ] = useState([])

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    fetch(url)
      .then(res => res.json())
      .then(data => setDebts(data))
  }, [])

  const rows = debts.map(debt => (
    <DebtRow key={debt.id} debt={debt}/>
  ))

  return (
    <div className="debt-table">
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