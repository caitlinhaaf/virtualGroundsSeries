import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import componentStyles from "./classContent.module.scss"
// import ClassLinksGrid from "../components/classLinksGrid/classLinksGrid"

const ClassContentPage = () => {

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content" />

      <div>
            <section className={componentStyles.grid}>

                <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.readings}`}
                >
                    <Link to="/readings">
                      <h2>READI<br/>NGS</h2>
                    </Link>
                </div>

                <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.lectures}`}
                >
                    <h2>LECTU<br/>RES</h2>
                </div>

                <div className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.gallery}`}>
                    <h2>GALL<br/>ERY</h2>
                </div>

                <div className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.links}`}>
                    <h2>LIN<br/>KS</h2>
                </div>

            </section>
        </div>
      
    </Layout>
  )
  
}

export default ClassContentPage
