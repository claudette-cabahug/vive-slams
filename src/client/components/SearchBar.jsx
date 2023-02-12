import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField"

import customers from '../../data/customers'

export default function SearchBar () {

//   const [query, setQuery] = useState('')
//      const handleChange = (e) => {
//        setQuery(e.target.value)
//      }

  const [state, setState] = useState({
    query: '',
    list: []
  })

  const handleChange = (e) => {

    const results = customers.filter( customer => {
      let fullName = `${customer.familyName} ${customer.givenName} ${customer.middleName}`
      if ( e.target.value === "" ) return customers
      return fullName.toLowerCase().includes(e.target.value.toLowerCase())
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
        <button onClick={() => setState({query: '', list: []})}>Clear Search</button>
        <ul>
          {
            (state.query === '' ? "" : !state.list.length ? "No customer match the query" : state.list.map( customer => {
              return (
              <div>
                <Link to={`/customers/${customer.id}`}>
                  <li key={customer.id}> 
                    {customer.familyName}, {customer.givenName} {customer.middleName}
                  </li>
                </Link>
              </div>
              )
            }))
          }
        </ul>
      </div>
    </div>
  )
}

// resources:
// https://www.makeuseof.com/react-search-bar-filters-data-create/ 
// https://mui.com/material-ui/react-text-field/
