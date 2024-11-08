import axios from 'axios'

export async function fetchCreditCardData() {
  // This is a mock function. In a real application, you would
  // use the Gmail API to fetch and parse email data.
  return [
    {
      id: 1,
      name: 'Visa',
      dueDate: '2023-05-15',
      minimumDue: 50,
      totalDue: 500
    },
    {
      id: 2,
      name: 'MasterCard',
      dueDate: '2023-05-20',
      minimumDue: 75,
      totalDue: 750
    }
  ]
}
