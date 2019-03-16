import React, { Component } from 'react';
import { Link } from "gatsby"
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import "./layout.css"
class Nav extends Component {
  render() {
    return (
      <div className = "nav justify-content-center">
        <nav>
        <p style = {{textAlign: "center", margin: "0", padding: "2"}} className = "row">
          <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
              <li className = "col-md-3 nav-item">
                  <Scroll type="id" element="intro">
                      <a className = "nav-link" href="#">Home</a>
                  </Scroll>
              </li>
              <li className = "col-md-3 nav-item">
                  <Scroll type="id" element="first">
                      <a className = "nav-link" href="#">Skills</a>
                  </Scroll>
              </li>
              <li className = "col-md-3 nav-item">
                  <Scroll type="id" element="second">
                      <a className = "nav-link" href="#">Resume</a>
                  </Scroll>
              </li>
              <li className = "col-md-3 nav-item">
                  <Scroll type="id" element="cta">
                      <a className = "nav-link" href="#">Portfolio</a>
                  </Scroll>
              </li>
          </Scrollspy>
          </p>
        </nav>
        
      </div>
    );
  }
}

export default Nav;
