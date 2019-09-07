import React from 'react'
import logo from './assets/img/main-logo.svg'
import { Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="content-container">
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Nav className="navbar">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Nav className="navlink">Home</Nav>
        </Link>
        <Link to={'/episodes'} style={{ textDecoration: 'none' }}>
          <Nav className="navlink">Episodes</Nav>
        </Link>
        <Link to={'/planets'} style={{ textDecoration: 'none' }}>
          <Nav className="navlink">Planets</Nav>
        </Link>
      </Nav>
      <Form inline>
        <input type="text" placeholder="Search" className="search-field" />
      </Form>
    </header >
  )
}