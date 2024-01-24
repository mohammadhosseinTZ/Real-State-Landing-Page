import React from 'react'
import headerStyle from './HeaderStyle.module.scss'
import logo from './Logo.png'
import { searchIcon } from './searchIcon'

export default function Header() {
  return (
    <header className={headerStyle.header}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>About us</li>
          <li>Projects</li>
          <li>Agents</li>
          <li>Services</li>
          <li>Listings</li>
          <li>{searchIcon}</li>
        </ul>
      </nav>
      <span>Other services</span>
      <span>Contact us</span>
    </header>
  )
}
