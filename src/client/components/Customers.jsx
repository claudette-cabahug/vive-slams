import React, { Component } from 'react'

import customers from '../../data/customers'

import CustomerCard from './CustomerCard'

export default class Customers extends Component {
  render() {
    return (
      <div>
        <h1>All Customers</h1>
        <div>
          {customers.map(customer => {
            return <CustomerCard key={customer.id} customer={customer} />
          })}
        </div>
      </div>
    )
  }
}
