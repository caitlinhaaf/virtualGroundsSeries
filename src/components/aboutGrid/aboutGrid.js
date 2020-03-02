import { Link } from "gatsby"
import React from "react"

import Lines from '../lines/lines'
import FemmeUsingPhone from '../images/femmeUsingPhone'
import Logos from '../images/logos'

import componentStyles from "./aboutGrid.module.scss" 

const AboutGrid = () => {
    return(
        <section className={componentStyles.columnContainer}>

            {/* COLUMN 1 */}
            <div className={componentStyles.column}>
                <section>
                    <h3 className={componentStyles.underline}>ABOUT</h3>
                    <p className={componentStyles.content}>
                    A series dedicated to feminist perspectives on digital sustainability and survival presented by Trinity Square Video and the Digital Justice Lab.
                    <br/><br/>
                    Virtual Grounds is a 2-part training and research initiative that considers how we navigate the future, protect our virtual selves, and shape digital landscapes. Over the course of 11 months, we will survey how technology continues to grow and impact our lives in different ways through a series of workshops led by practicing creative technologists, scholars, and artists. The content and research created will then be compiled into a transmedia publication, which will be distributed publicly to all communities to use and interpret. 
                    </p>
                </section>

                <Link 
                    to="/classContent"
                    aria-label="class content page"
                    className={componentStyles.white}>
                    <div>
                        <h3>
                            <span style={{"font-size": "4vw"}}>CLASS</span>
                            <br/>
                            <span className={componentStyles.light}>CONTENT</span>
                        </h3>
                    </div>     
                </Link>

                <div className={componentStyles.halfWidth}>
                    <Lines color="yellow"/>
                </div>

                <a 
                    aria-label="contact via email"
                    className={`${componentStyles.green} ${componentStyles.halfWidth}`}
                    href="mailto:emily@trinitysquarevideo.com">
                    <h3>CONTACT</h3>
                </a>

            </div>

            {/* COLUMN 2 */}
            <div className={componentStyles.column}>
                
                <Link
                    to="/workshops"
                    aria-label="open workshops page" 
                    className={`${componentStyles.yellow}  ${componentStyles.halfWidth}`}>
                    <h3>
                        <span style={{"font-size": "7vw"}}>OPEN</span>
                        <br/>
                        <span className={componentStyles.light}>WORKSHOPS</span>
                    </h3>
                </Link>

                <div className={`${componentStyles.image} ${componentStyles.halfWidth}`}>
                    <FemmeUsingPhone />
                </div>

            </div>

            {/* COLUMN 3 */}
            <div className={componentStyles.column}>

                <div className={componentStyles.lines}>
                    <Lines color="white"/>
                </div>

                {/* TO ADD BACK INTO PAGE IN THE FUTURE */}
                {/* <Link 
                    to="/publication" 
                    className={componentStyles.white}>
                    <h3>PUBLICATION</h3>
                </Link> */}

                <div style={{padding: `2rem 0`, flex: `auto 0 1`}}>
                    <h3 className={componentStyles.alt}>
                        PARTNERS
                    </h3>

                    <Logos className={componentStyles.logosCol}/>
                </div>

            </div>
    </section>
  )
}

export default AboutGrid