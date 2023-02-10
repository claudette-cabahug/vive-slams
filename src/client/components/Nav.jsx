import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <li>About</li>
        <li>IOU</li>
        <li>Regular Loans</li>
        <li>Customers</li>
        <li>Forms</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

