import React from "react"

import componentStyles from "./footer.module.scss" 

const Footer = () => (
  <footer className={componentStyles.root}>

      <div>
        <a href="https://twitter.com/TSVToronto" target="_blank" rel="noopener noreferrer">
        <em>Follow</em>
          <br/>
          <span className={componentStyles.light}>Twitter</span>
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/trinitysquarevideo?ref=bookmarks" target="_blank" rel="noopener noreferrer">
        <em>Follow</em>
          <br/>
          <span className={componentStyles.light}>Facebook</span>
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/trinitysquare/" target="_blank" rel="noopener noreferrer">
        <em>See</em>
          <br/>
          <span className={componentStyles.light}>Instagram</span>
        </a>
      </div>

      <div>
        <a href="mailto:emily@trinitysquarevideo.com">
        <em>Send</em>
          <br/>
          <span className={componentStyles.light}>Email</span>
        </a>
      </div>

  </footer>
)

export default Footer
