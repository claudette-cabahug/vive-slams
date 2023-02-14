import React, { Component } from 'react'

import customers from '../../data/customers'

import SearchBar from './SearchBar'
import CustomerCard from './CustomerCard'

export default class Customers extends Component {
  render() {
    return (
      <div>
        <h1>All Customers</h1>
        <div>
          <SearchBar />
        </div>
        <div>
          {customers
            .sort((a, b) => {
              if (a.familyName < b.familyName) {
                return -1
              }
              if (a.familyName > b.familyName) {
                return 1
              }
              return 0
            })
          
            .map(customer => {
              return <CustomerCard key={customer.id} customer={customer} />
            })
          }
        </div>
      </div>
    )
  }
}
