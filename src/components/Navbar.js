import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="nav_bar">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Text Editor</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/not_available">{props.additional_item}</Link></li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
    additional_item: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    additional_item: '_Item'
};
