import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import WorkshopBlock from '../components/workshopBlock/workshopBlock'

const WorkshopPage = () => {

  const workshopList = ["test", "test", "test", "test"]

  return(
    <Layout bodyClass="orangeBody">
      <SEO title="Workshops" />

      {
        workshopList.map((workshop, i) => (
          <WorkshopBlock workshopNum={i+1}/>
        ))
      }
      
    </Layout>
  )
  
}

export default WorkshopPage
