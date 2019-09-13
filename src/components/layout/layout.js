import React from "react"
import PropTypes from "prop-types"
import BodyClassName from 'react-body-classname'

import componentStyles from "./layout.module.scss" 

import Nav from "../nav/nav"
import Footer from "../footer/footer"

const Layout = ({ bodyClass, children }) => {

  return (
    <BodyClassName className={bodyClass}>
      <div>
        <Nav altBorder={
          (bodyClass !== "greenBody") ? true : false
        }/>

        <main 
          className={componentStyles.siteBody}>
          {children}
        </main>

        <Footer />

      </div>
    </BodyClassName>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
