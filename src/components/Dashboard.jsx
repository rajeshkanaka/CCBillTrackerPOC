import React, { useState, useEffect } from 'react'
import CreditCardList from './CreditCardList'
import TotalDue from './TotalDue'
import { fetchCreditCardData } from '../services/gmailService'
import { setReminder } from '../services/calendarService'

function Dashboard() {
  const [creditCards, setCreditCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCreditCardData()
      setCreditCards(data)
      data.forEach(card => {
        setReminder(card.dueDate, `Payment due for ${card.name}`)
      })
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>Dashboard</h2>
      <CreditCardList creditCards={creditCards} />
      <TotalDue creditCards={creditCards} />
    </div>
  )
}

export default Dashboard
