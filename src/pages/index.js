import React from "react"

import Layout from "../components/layout/layout"
import AboutGrid from "../components/aboutGrid/aboutGrid"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout bodyClass="greenBody">
    <SEO title="About" pageUrl="/"/>
    <AboutGrid />
  </Layout>
)

export default IndexPage
