import React from 'react'
import logo from './assets/img/main-logo.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className="content-container">
      {/* Since this is the same as header, 
      should probably make it as a seperate component. */}
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <img src={logo} alt="Logo" className="logo footer-logo" />
      </Link>
      <Nav className="navbar footer-navbar">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Nav className="navlink footer-navlink">Home</Nav>
        </Link>
        <Link to={'/episodes'} style={{ textDecoration: 'none' }}>
          <Nav className="navlink footer-navlink">Episodes</Nav>
        </Link>
        <Link to={'/planets'} style={{ textDecoration: 'none' }}>
          <Nav className="navlink footer-navlink">Planets</Nav>
        </Link>
      </Nav>
      <div className="footer-info">
        <p>Made by Andis Kačerovskis | See this site on
          <span className="github">
            <a href="https://github.com/mnemosx/rick-and-morty-api-with-graphQL" target="_blank" rel="noopener noreferrer">Github</a>
          </span>
        </p>
      </div>
      <div className="rick-face" />
    </footer>
  )
}