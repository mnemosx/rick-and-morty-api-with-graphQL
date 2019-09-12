import React from 'react'
import logo from '../assets/img/main-logo.svg'
import { Nav, Form } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="content-container">
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Nav className="navbar">
        <NavLink to={'/'}
          style={{
            textDecoration: 'none'
          }}>
          <Nav className="navlink">Home</Nav>
        </NavLink>
        <NavLink to={'/episodes'}
          activeStyle={{
            fontWeight: "bold",
          }}
          style={{
            textDecoration: 'none'
          }}>
          <Nav className="navlink">Episodes</Nav>
        </NavLink>
        <NavLink to={'/locations'}
          activeStyle={{
            fontWeight: "bold",
          }}
          style={{
            textDecoration: 'none'
          }}>
          <Nav className="navlink">Planets</Nav>
        </NavLink>
      </Nav>
      <Form inline>
        <input type="text" placeholder="Search" className="search-field" />
      </Form>
    </header >
  )
}