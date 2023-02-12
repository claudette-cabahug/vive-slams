import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField"

import customers from '../../data/customers'

export default function SearchBar () {

  //const [query, setQuery] = useState('')

  const [state, setState] = useState({
    query: '',
    list: []
  })

  const handleChange = (e) => {
    const results = customers.filter( customer => {
      if ( e.target.value === "" ) return customers
      return customer.familyName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setState({
     query: e.target.value,
     list: results 
    })
  }

  return (
    <div>
      <div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"

          value={state.query} 
          onChange={handleChange} 
        />
        <ul>
          {
            (state.query === '' ? "" : !state.list.length ? "No customer match the query" : state.list.map( customer => {
              return (
              <>
                <Link to={`/customers/${customer.id}`}>
                  <li key={customer.id}> {customer.familyName}, {customer.givenName} </li>
                </Link>
              </>
              )
            }))
          }
        </ul>
      </div>
    </div>
  )
}

// resource: https://www.makeuseof.com/react-search-bar-filters-data-create/ 
