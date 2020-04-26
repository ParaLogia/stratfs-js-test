import React from 'react'

const DebtRow = ({ debt }) => {
  return (
    <>
      <div className="creditor">
        {debt.creditorName}
      </div>
      <div className="first-name">
        {debt.firstName}
      </div>
      <div className="last-name">
        {debt.lastName}
      </div>
      <div className="min-pay-percent right-align">
        {parseFloat(debt.minPaymentPercentage).toFixed(2)}
      </div>
      <div className="balance right-align">
        {parseFloat(debt.balance).toFixed(2)}
      </div>
    </>
  )
}

export default DebtRow;