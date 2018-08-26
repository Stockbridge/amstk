import React from 'react'
import Link from 'gatsby-link'
import './styles.scss';

function openMenu(){
  const menu = document.getElementById('amstk-headerMenu');
  menu.classList.add('header-menu__container--open');
};

function closeMenu(e){
  const menu = document.getElementById('amstk-headerMenu');
  menu.classList.remove('header-menu__container--open');
};

const HeaderMenu = () => (
  <div className="header-menu">
    <span className="header-menu__trigger" onClick={openMenu}>menu</span>
    <div className="header-menu__container" id="amstk-headerMenu">
      <div className="header-menu__scrim" onClick={closeMenu}></div>
      <div className="header-menu__menu">
        <span className="header-menu__close-button" onClick={closeMenu}>close</span>
        <Link to="/" className="header-menu__link">home</Link>
        <Link to="/rei" className="header-menu__link">rei</Link>
      </div>
    </div>
  </div>
)

export default HeaderMenu
