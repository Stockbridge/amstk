import React from 'react'
import Link from 'gatsby-link'
import HeaderMenu from '../header-menu';
import './styles.scss';


const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">{siteTitle}</Link>
    <HeaderMenu></HeaderMenu>
  </header>
)

export default Header
