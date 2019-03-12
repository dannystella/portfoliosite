import React, { Component } from 'react';
import { Link } from "gatsby"
import "./layout.css"
class Nav extends Component {
  render() {
    return (
      <div className = "container">
        <nav className = "navv">
        <p style = {{textAlign: "center", margin: "0", padding: "0"}}>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          </p>
        </nav>
      </div>
    );
  }
}

export default Nav;
