import React from 'react'
import {Link} from 'gatsby'

import componentStyles from "./workshopBlock.module.scss" 

import Lines from '../lines/lines'

const WorkshopBlock = ({workshopNum, pageLink, ...props}) => {
    
    const lineColor = (workshopNum%2===0) ? "white" : "green";

    return(
        <section className={componentStyles.workshopRow}>
            <div>
                <h4>WORK<br/><span className={componentStyles.light}>SHOP {workshopNum}</span></h4>

                {props.children}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                <br/>

                <div>
                    <Link to={pageLink} >Learn More</Link>
                </div>
            </div>

            <div
                style={{"min-width": "300px", "position": "relative"}}>
                <div className={componentStyles.lineOffset}
                    style={{
                        "width": "100%;", 
                        "position": "absolute", 
                        "z-index": "-1",
                        "bottom": "-1rem",
                        "right": "-1rem"}}>
                    <Lines 
                        color={lineColor}/>
                </div>
                

                <img 
                    style={{"width":"100%", "z-index": "10"}}
                    src={'workshop.png'} 
                    alt="Logo" />

                {/* pass image in as child or query? */}
            </div>

        </section>
    )
}

export default WorkshopBlock