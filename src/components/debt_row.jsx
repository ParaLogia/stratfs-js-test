import React from 'react'

const DebtRow = ({ debt, checked, handleToggleCheck }) => {
  const checkedClass = checked ? "" : "unchecked"
  
  return (
    <>
      <input type="checkbox" 
        checked={checked}
        onChange={handleToggleCheck} />

      <div className={checkedClass}>
        {debt.creditorName}
      </div>
      <div className={checkedClass}>
        {debt.firstName}
      </div>
      <div className={checkedClass}>
        {debt.lastName}
      </div>
      <div className={checkedClass + " min-pay-percent right-align"}>
        {parseFloat(debt.minPaymentPercentage).toFixed(2)}
      </div>
      <div className={checkedClass + " balance right-align"}>
        {parseFloat(debt.balance).toFixed(2)}
      </div>
    </>
  )
}

export default DebtRow;