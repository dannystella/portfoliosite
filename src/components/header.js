import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav'
import Danny from '../images/danny.jpg'
const Header = ({ siteTitle }) => (
  <header
    // style={{
    //   background: `rebeccapurple`,
    //   marginBottom: `1.45rem`,
    // }}
  >
    <div>
      <div className = "container">
        <img src = {Danny} className = "avatar"/>
        <h1 className = "title">Danny Schrader</h1>
        <h6 className = "subTitle">Fullstack Software Engineer and Audiowizard</h6>
        {/* <ContactBar/> */}
          <hr className = "pageBreak"/>
          <Nav/>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
