import React from 'react'
//import { Link } from 'react-router-dom'

export default function CustomerCard (props) {
  const { customer } = props
  return (
    <div>
      <p>{customer.familyName}, {customer.givenName} {customer.middleName}</p>
    </div>
  )
  
}
