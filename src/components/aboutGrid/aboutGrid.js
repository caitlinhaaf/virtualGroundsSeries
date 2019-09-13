import { Link } from "gatsby"
import React from "react"

import componentStyles from "./aboutGrid.module.scss" 

const AboutGrid = () => (

  <section className={componentStyles.grid}>

        <div>
            <h3 className={componentStyles.underline}>ABOUT</h3>
            <p className={componentStyles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <Link 
            to="/workshops" 
            className={`${componentStyles.yellow} ${componentStyles.centered}`}>
            <h3>
                <span style={{"font-size": "7vw"}}>OPEN</span>
                {/* &nbsp; */}
                <br/>
                <span 
                    className={componentStyles.light}
                    style={{"font-size": "3vw"}}>
                        WORKSHOPS
                </span>
            </h3>
        </Link>

        {/* WHITE LINES */}
        <div></div>


        <Link 
            to="/workshops"
            className={`${componentStyles.white} ${componentStyles.tall}`}>
            <div>
                <h3>
                    <span style={{"font-size": "4vw"}}>CLASS</span>
                    {/* &nbsp; */}
                    <br/>
                    <span className={componentStyles.light}>CONTENT</span>
                </h3>
            </div>
            
        </Link>

        {/* IMAGE */}
        <div className={componentStyles.image}></div>

        <div className={componentStyles.white}>
            <h3>PUBLICATION</h3>
        </div>



        <div className={componentStyles.tall}>
            <h3 className={componentStyles.alt}>
                PARTNERS
            </h3>
        </div>


        <a className={componentStyles.green} href="mailto:me@caitlinhaaf.com">
            <h3>CONTACT</h3>
        </a>

  </section>
)

export default AboutGrid