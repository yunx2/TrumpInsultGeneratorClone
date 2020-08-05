import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 
      <ul className="nav border-bottom">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/legal">Legal</Link>
        </li>
      </ul>
  )
}

export default Navbar