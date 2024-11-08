import React from 'react'
import CreditCard from './CreditCard'

function CreditCardList({ creditCards }) {
  return (
    <div>
      <h3>Your Credit Cards</h3>
      {creditCards.map(card => (
        <CreditCard key={card.id} card={card} />
      ))}
    </div>
  )
}

export default CreditCardList
