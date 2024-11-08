import React from 'react'
import { format } from 'date-fns'

function CreditCard({ card }) {
  return (
    <div>
      <h4>{card.name}</h4>
      <p>Due Date: {format(new Date(card.dueDate), 'MMMM d, yyyy')}</p>
      <p>Minimum Due: ${card.minimumDue.toFixed(2)}</p>
      <p>Total Due: ${card.totalDue.toFixed(2)}</p>
    </div>
  )
}

export default CreditCard
