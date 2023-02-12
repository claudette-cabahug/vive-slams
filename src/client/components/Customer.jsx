import React from 'react'
import { useParams } from 'react-router-dom'

import customers from '../../data/customers'

export default function Customer () {

  const { id } = useParams()
  const customer = customers.find(c => String(c.id) === id)
  const { familyName, givenName, middleName, address, mode, balance, dueDate, period, coMaker } = customer
  
  return (
    <div>
      <h2><strong>Personal Information</strong></h2>
        <p>Account Name: {familyName}, {givenName} {middleName}</p>
        <p>Address: {address}</p>
      <h2><strong>Account Details</strong></h2>
        <p>Mode: {mode}</p>
        <p>Balance: {balance}</p>
        <p>Due Date: {dueDate}</p>
        <p>Period: {period}</p>
        <p>Co-Maker: {coMaker}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
