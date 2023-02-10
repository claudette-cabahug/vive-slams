import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'

const App = () => {
  return (
    <>
      <Router>
      <Nav />
        <Routes>
          <Route exact path='/' element={ <Home /> }>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
