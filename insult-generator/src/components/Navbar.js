import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Legal</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar