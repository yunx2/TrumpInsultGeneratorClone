import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div>
    <footer className="border-top">
      <p className="form-text text-muted">© 2020 - TrumpInsultGenerator.com - 
        <Link className="text-dark" to="/legal"> Legal</Link>
      </p> 
    </footer>
  </div>
)

export default Footer