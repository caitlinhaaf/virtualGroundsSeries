import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import componentStyles from "./nav.module.scss" 

const Nav = ({altBorder}) => {
  const classes = altBorder ? `${componentStyles.nav} ${componentStyles.altBorder}` : `${componentStyles.nav}`

  return(
    <nav className={classes}>
      <h1>VIRTUAL GROUNDS</h1>

      <div>
        <Link to="/" className={componentStyles.link}>ABOUT</Link>
        <Link to="/workshops" className={componentStyles.link}>WORKSHOPS</Link>
        <Link to="/workshops" className={componentStyles.link}>CLASS CONTENT</Link>
        <Link to="/workshops" className={componentStyles.link}>PUBLICATION</Link>
      </div>

    </nav>
  )
}

export default Nav
