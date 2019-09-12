import React from "react"
import PropTypes from "prop-types"
import BodyClassName from 'react-body-classname'

import componentStyles from "./layout.module.scss" 

// import Header from "../header"
import Nav from "../nav/nav"

const Layout = ({ bodyClass, children }) => {
  return (
    <BodyClassName className={bodyClass}>
      <div>
        <Nav />

        <main 
          className={componentStyles.siteBody}>
          {children}
        </main>

        <footer>
          &copy; {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </BodyClassName>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
