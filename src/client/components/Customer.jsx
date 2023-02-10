import React from 'react'
import { useParams } from 'react-router-dom'

import customers from '../../data/customers'

export default function Customer () {

  const { id } = useParams()
  const customer = customers.find(c => String(c.id) === id)
  
  return (
    <div>
      <h2><strong>Personal Information</strong></h2>
        <p>Account Name: {customer.familyName}, {customer.givenName} {customer.middleName}</p>
        <p>Address: {customer.address}</p>
      <h2><strong>Account Details</strong></h2>
        <p>Mode: {customer.mode}</p>
        <p>Balance: {customer.balance}</p>
        <p>Due Date: {customer.dueDate}</p>
        <p>Period: {customer.period}</p>
        <p>Co-Maker: {customer.coMaker}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
