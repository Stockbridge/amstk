import React from 'react'
import Link from 'gatsby-link'
import './styles.scss';

function openMenu(){
  const menu = document.getElementById('amstk-headerMenu');
  menu.classList.add('header-menu__container--open');
};

function closeMenu(){
  const menu = document.getElementById('amstk-headerMenu');
  menu.classList.remove('header-menu__container--open');
};

const HeaderMenu = () => (
  <div className="header-menu">
    <span className="header-menu__open-button" onClick={openMenu}>menu</span>
    <div className="header-menu__container" id="amstk-headerMenu">
      <div className="header-menu__scrim" onClick={closeMenu}></div>
      <div className="header-menu__menu">
        <div className="header-menu__close-container">
          <span className="header-menu__close-button" onClick={closeMenu}>close</span>
        </div>
        <div className="header-menu__link-list">
          <Link to="/" className="header-menu__link">home</Link>
          <Link to="/work" className="header-menu__link">work</Link>
          <Link to="/alaska-airlines" className="header-menu__work-link">alaska.airlines.</Link>
          <Link to="/rei" className="header-menu__work-link">rei.</Link>
          <Link to="/dranked" className="header-menu__work-link">dranked.</Link>
          <Link to="/outerwall" className="header-menu__work-link">outerwall.</Link>
          <Link to="/alphametrix" className="header-menu__work-link">alphametrix.</Link>
          <Link to="/identity" className="header-menu__work-link">identity.</Link>
          <Link to="/about" className="header-menu__link">about</Link>
          <Link to="/contact" className="header-menu__link">contact</Link>
        </div>
      </div>
    </div>
  </div>
)

export default HeaderMenu
