import React from 'react'
import Link from 'gatsby-link'
import HeaderMenu from '../header-menu/index';


const Header = ({ siteTitle }) => (
  <header>
    <h1>Amanda Stockbridge - UI/UX Design</h1>
    <Link to="/">{siteTitle}</Link>
    <HeaderMenu></HeaderMenu>
  </header>
)

export default Header
