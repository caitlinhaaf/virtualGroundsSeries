// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import componentStyles from "./aboutGrid.module.scss" 

// const imageStyle = {
//     grid-column: 3 / span 2;
// };

const AboutGrid = () => (

  <section className={componentStyles.grid}>

        <div>
            <h2 className={componentStyles.underline}>ABOUT</h2>
            <p>fjdlfjdsljfksjfkjdskfjsd</p>
        </div>

        <div className={componentStyles.yellow}>
            <h2>OPEN WORKSHOPS</h2>
        </div>

        {/* WHITE LINES */}
        <div></div>



        <div className={`${componentStyles.white} ${componentStyles.tall}`}>
            <h2>CLASS CONTENT</h2>
        </div>

        {/* IMAGE */}
        <div className={componentStyles.image}></div>

        <div className={componentStyles.white}>
            <h2>PUBLICATION</h2>
        </div>



        <div className={componentStyles.tall}>
            <h2 className={componentStyles.alt}>PARTNERS</h2>
        </div>


        <div>
            <h2 className={componentStyles.alt}>CONTACT</h2>
        </div>



  </section>
)

export default AboutGrid