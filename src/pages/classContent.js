import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import ClassLinksGrid from "../components/classLinksGrid/classLinksGrid"

const ClassContentPage = () => {

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content" />

      <ClassLinksGrid />
      
    </Layout>
  )
  
}

export default ClassContentPage
