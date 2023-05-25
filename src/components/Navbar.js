import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="nav_bar">
      <ul>
        <li><Link to="/Ed-it-TXT_React-app/">HOME</Link></li>
        <li><Link to="/Ed-it-TXT_React-app/about">About</Link></li>
        <li><Link to="/Ed-it-TXT_React-app/">Text Editor</Link></li>
        <li><Link to="/Ed-it-TXT_React-app/services">Services</Link></li>
        <li><Link to="/Ed-it-TXT_React-app/not_available">{props.additional_item}</Link></li>
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
