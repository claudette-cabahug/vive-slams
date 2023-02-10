import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Customers from './Customers'
import Customer from './Customer'

const App = () => {
  return (
    <>
      <Router>
      <Nav />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/customers' element={ <Customers /> } />
          <Route path='/customers/:id' element={ <Customer /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
