import React from 'react'

function TotalDue({ creditCards }) {
  const totalMinimumDue = creditCards.reduce((sum, card) => sum + card.minimumDue, 0)
  const totalFinalDue = creditCards.reduce((sum, card) => sum + card.totalDue, 0)

  return (
    <div>
      <h3>Total Due</h3>
      <p>Total Minimum Due: ${totalMinimumDue.toFixed(2)}</p>
      <p>Total Final Due: ${totalFinalDue.toFixed(2)}</p>
    </div>
  )
}

export default TotalDue
