import { Link } from "gatsby"
import React from "react"

import Lines from '../lines/lines'
import FemmeUsingPhone from '../images/femmeUsingPhone'

import componentStyles from "./aboutGrid.module.scss" 

const AboutGrid = () => {
    return(
        <section className={componentStyles.grid}>

            <div style={{ "grid-area": "about"}}>
                <h3 className={componentStyles.underline}>ABOUT</h3>
                <p className={componentStyles.content}>
                    A series dedicated to  feminist perspectives on digital sustainability and survival presented by Trinity Square Video and the Digital Justice Lab.
                    <br/>
                    Virtual Grounds is a two-phase project dedicated to how we navigate our virtual selves of the future. In this program we will be specifically focused on feminist perspectives on digital sustainability and survival. Over the course of 11 months we will be studying, creating and disseminating together. 
                </p>
            </div>

            <Link
                style={{ "grid-area": "wrkshps"}} 
                to="/workshops" 
                className={`${componentStyles.yellow} ${componentStyles.centered}`}>
                <h3>
                    <span style={{"font-size": "7vw"}}>OPEN</span>
                    <br/>
                    <span className={componentStyles.light}>WORKSHOPS</span>
                </h3>
            </Link>

            <div
                className={componentStyles.lines}
                style={{ "grid-area": "stripes1"}}>
                <Lines color="white"/>
            </div>

            <Link 
                to="/classContent"
                className={`${componentStyles.white} ${componentStyles.centered}`}
                style={{ "grid-area": "classCnt"}}>
                <div>
                    <h3>
                        <span style={{"font-size": "4vw"}}>CLASS</span>
                        <br/>
                        <span className={componentStyles.light}>CONTENT</span>
                    </h3>
                </div>     
            </Link>

            <div 
                className={componentStyles.image}
                style={{ "grid-area": "img"}}>
                <FemmeUsingPhone />
            </div>

            {/* TO ADD BACK INTO PAGE IN THE FUTURE */}
            {/* <Link 
                to="/publication" 
                className={`${componentStyles.white} ${componentStyles.centered}`}>
                <h3>PUBLICATION</h3>
            </Link> */}

            <div 
                style={{ "grid-area": "partners"}}
                >
                <h3 className={componentStyles.alt}>
                    PARTNERS
                </h3>
                <img 
                    style={{"width":"100%"}}
                    src={'djlLogos.png'} 
                    alt="Logo" />
            </div>

            <div 
                style={{ "grid-area": "stripes2"}}
                className={componentStyles.lines}
                >
                <Lines color="yellow"/>
            </div>

            <a 
                style={{ "grid-area": "contact"}}
                className={`${componentStyles.green} ${componentStyles.centered}`}
                href="mailto:emily@trinitysquarevideo.com">
                <h3>CONTACT</h3>
            </a>

    </section>
  )
}

export default AboutGrid