import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import componentStyles from "./classContent.module.scss"

const ClassContentPage = () => {

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content"  pageUrl="/classcontent"/>
        <section className={componentStyles.container}>
            <div>
                <div 
                    className={componentStyles.readings}
                >
                    <Link to="/readings" aria-label="readings">
                        <h2 className={componentStyles.pageLink}>READI<br/>NGS</h2>
                    </Link>
                </div>

                <div 
                    className={componentStyles.lectures}
                >
                    <Link to="/lectures" aria-label="lectures">
                        <h2 className={componentStyles.pageLink}>LECTU<br/>RES</h2>
                    </Link>
                    
                </div>
            </div>

            
            <div>
                <div className={componentStyles.gallery}>
                    <Link to="/gallery" aria-label="image gallery">
                        <h2 className={componentStyles.pageLink}>GALL<br/>ERY</h2>
                    </Link>
                </div>

                <div className={componentStyles.links}>
                    <Link to="/links" aria-label="links">
                        <h2 className={componentStyles.pageLink}>LIN<br/>KS</h2>
                    </Link>
                </div>
            </div>

        </section>
    </Layout>
  )
  
}

export default ClassContentPage
