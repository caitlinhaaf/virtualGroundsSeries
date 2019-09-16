import { Link } from "gatsby"
// import { graphql } from "gatsby"
import React from "react"
// import Img from "gatsby-image"

import Lines from '../lines/lines'

import componentStyles from "./aboutGrid.module.scss" 

const AboutGrid = ({data}) => (

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
                    // style={{"font-size": "3vw"}}
                    >
                        WORKSHOPS
                </span>
            </h3>
        </Link>

        <div className={componentStyles.lines}>
            <Lines color="white"/>
        </div>

        <Link 
            to="/workshops"
            className={`${componentStyles.white} ${componentStyles.tall}`}>
            <div>
                <h3>
                    <span style={{"font-size": "4vw"}}>CLASS</span>
                    <br/>
                    <span className={componentStyles.light}>CONTENT</span>
                </h3>
            </div>
            
        </Link>

        {/* IMAGE */}
        <div className={componentStyles.image}></div>

        <Link to="/workshops" className={componentStyles.white}>
            <h3>PUBLICATION</h3>
        </Link>

        <div style={{ "grid-row": "span 3"}}>
            <h3 className={componentStyles.alt}>
                PARTNERS
            </h3>
        </div>


        {/* WHITE LINES */}
        <div className={componentStyles.lines}>
            <Lines color="yellow"/>
        </div>
        <a className={componentStyles.green} href="mailto:me@caitlinhaaf.com">
            <h3>CONTACT</h3>
        </a>

  </section>
)

export default AboutGrid