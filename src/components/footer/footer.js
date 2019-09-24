import React from "react"

import componentStyles from "./footer.module.scss" 

const Footer = () => (
  <footer className={componentStyles.root}>

      <div>
        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <em>Follow</em>
          <br/>
          <span className={componentStyles.light}>Twitter</span>
        </a>
      </div>

      <div>
        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <em>Follow</em>
          <br/>
          <span className={componentStyles.light}>Facebook</span>
        </a>
      </div>

      <div>
        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <em>See</em>
          <br/>
          <span className={componentStyles.light}>Instagram</span>
        </a>
      </div>

      <div>
        <a href="mailto:me@caitlinhaaf.com">
        <em>Send</em>
          <br/>
          <span className={componentStyles.light}>Email</span>
        </a>
      </div>

  </footer>
)

export default Footer
