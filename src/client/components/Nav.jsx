import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <li>IOU</li>
        <li>Regular Loans</li>
        <Link to='/customers'><li>Customers</li></Link>
        <li>Forms</li>
      </ul>
    </div>
  )
}

