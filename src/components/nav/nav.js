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
        <Link to="/" className={componentStyles.link} activeClassName={componentStyles.active}>
          ABOUT
        </Link>

        <Link to="/workshops" className={componentStyles.link} activeClassName={componentStyles.active}>
          WORKSHOPS
        </Link>

        <Link to="/classContent" className={componentStyles.link} activeClassName={componentStyles.active}>
          CLASS CONTENT
        </Link>

        <Link to="/publication" className={componentStyles.link} activeClassName={componentStyles.active}>
          PUBLICATION
        </Link>

      </div>

    </nav>
  )
}

export default Nav
