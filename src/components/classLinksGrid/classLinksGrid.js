
import React from "react"
import componentStyles from "./classLinksGrid.module.scss" 

const ClassLinksGrid = () => {
    return(
        <div style={{"width":"auto", "margin": "0 auto"}}>
            <section className={componentStyles.grid}>

                <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.readings}`}
                >
                    {/* <h2>READI<br/>NGS</h2> */}
                    <h2>READI<br/>NGS</h2>
                </div>

                <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.lectures}`}
                >
                    <h2>LECTU<br/>RES</h2>
                    {/* <h2>LECTURES</h2> */}
                </div>

                <div className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.gallery}`}>
                    <h2>GALL<br/>ERY</h2>
                </div>

                <div className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.links}`}>
                    <h2>LIN<br/>KS</h2>
                </div>

            </section>
        </div>
    )

}

export default ClassLinksGrid