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
      <header className="debt-table-header">
        <div>
          Creditor
        </div>
        <div>
          First Name
        </div>
        <div>
          Last Name
        </div>
        <div className="right-align">
          Min Pay %
        </div>
        <div className="right-align">
          Balance
        </div>
      </header>
      <div className="debt-table-content">
        {rows}
      </div>
    </div>
  )
}

export default DebtTable