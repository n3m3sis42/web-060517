import React from 'react'
import { NavLink } from 'react-router-dom'


class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><NavLink to="/interests" activeClassName="linkClicked">My Interests</NavLink></li>
        <li><NavLink to="/about-me" activeClassName="linkClicked">About me</NavLink></li>
        <li><NavLink to="/languages" activeClassName="linkClicked">Languages</NavLink></li>
      </ul>
    )
  }
}


export default Nav
