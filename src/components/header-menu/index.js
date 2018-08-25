import React from 'react'
import Link from 'gatsby-link'

const HeaderMenu = () => (
  <div>
    <div className="menu-trigger"></div>
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/rei">REI</Link>
    </div>
  </div>
)

export default HeaderMenu
