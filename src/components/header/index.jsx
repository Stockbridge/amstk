import React from 'react'
import Link from 'gatsby-link'
import HeaderMenu from '../header-menu';
import './styles.scss';


const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/" className="header__logo">am.stk</Link>
    <div className="header__subtitle">visual and user experience designer</div>
    <HeaderMenu></HeaderMenu>
  </header>
)

export default Header
