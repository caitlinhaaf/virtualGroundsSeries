import React from 'react'

import componentStyles from "./workshopBlock.module.scss" 

import Lines from '../lines/lines'

const WorkshopBlock = ({workshopNum}) => {
    
    const lineColor = (workshopNum%2===0) ? "white" : "green";

    return(
        <section className={componentStyles.workshopRow}>
            <div>
                <h4>WORK<br/><span className={componentStyles.light}>SHOP {workshopNum}</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <br/>
                <a href="google.com">Learn More</a>
            </div>

            <div>
                <Lines color={lineColor}/>
                {/* pass image in as child or query? */}
            </div>
        </section>
    )
}

export default WorkshopBlock