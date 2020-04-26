import React, { useState } from 'react'

const handleChange = (setState) => (e) => {
  e.preventDefault()
  setState(e.target.value)
}

const DebtForm = ({ addDebt }) => {
  const [ creditorName, setCreditorName ] = useState("")
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ minPaymentPercentage, setMinPaymentPercentage ] = useState("")
  const [ balance, setBalance ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addDebt({
      creditorName,
      firstName,
      lastName,
      minPaymentPercentage: minPaymentPercentage || 0,
      balance: balance || 0
    })
    const setters = [setCreditorName, setFirstName, setLastName, setMinPaymentPercentage, setBalance]
    setters.forEach(setter => setter(""))
  }

  return (
    <>
      <button onClick={handleSubmit}>
        Add Debt
      </button>

      <input type="text" 
        placeholder="AMEX"
        value={creditorName} 
        onChange={handleChange(setCreditorName)} />
        
      <input type="text"
        placeholder="Suman"
        value={firstName} 
        onChange={handleChange(setFirstName)} />
        
      <input type="text"
        placeholder="Tester79"
        value={lastName} 
        onChange={handleChange(setLastName)} />
        
      <input type="number"
        placeholder="2.50"
        value={minPaymentPercentage} 
        onChange={handleChange(setMinPaymentPercentage)} />
        
      <input type="number"
        placeholder="1200.00"
        value={balance} 
        onChange={handleChange(setBalance)} />
        
    </>
  )
}

export default DebtForm