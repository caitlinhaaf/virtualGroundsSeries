import React from 'react'
import {Link} from 'gatsby'

import componentStyles from "./workshopBlock.module.scss" 

import Lines from '../lines/lines'

const WorkshopBlock = ({workshopNum, pageLink, thumbnailSrc, ...props}) => {
    
    const lineColor = (workshopNum%2===0) ? "white" : "green";

    return(
        <section className={componentStyles.workshopRow}>

            <div>
                <h4>WORK<br/><span className={componentStyles.light}>SHOP {workshopNum}</span></h4>
                {props.children}
                <br/>
                <div>
                    <Link to={pageLink} >Learn More</Link>
                </div>
            </div>

            <div
                className={componentStyles.thumbnail}>
                <div className={componentStyles.lineOffset}>
                    <Lines color={lineColor}/>
                </div>
                
                <div className={componentStyles.imageContainer}>
                    <div
                        style={{
                            "opacity": ".4",
                            "width": "100%",
                            "height": "100%",
                            "background-image": `url(${thumbnailSrc})`,
                            "background-repeat": "no-repeat",
                            "background-position": "center",
                            "background-size": "cover"}}
                    >
                    </div>
                </div>

            </div>

        </section>
    )
}

export default WorkshopBlock