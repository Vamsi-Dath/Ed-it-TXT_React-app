import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="nav_bar">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">{props.additional_item}</a></li>
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
