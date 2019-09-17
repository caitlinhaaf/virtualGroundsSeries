import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const PublicationPage = () => {

  return(
    <Layout bodyClass="orangeBody">
      <SEO title="Publication" />

      <h2 style={{"font-size": "10vw", "text-align": "center"}}>
        PUBLICATION <span style={{"font-size": "10vw", "font-weight":"300"}}>NAME</span>
      </h2>
      
    </Layout>
  )
  
}

export default PublicationPage
