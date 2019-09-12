import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import AboutGrid from "../components/aboutGrid/aboutGrid"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout bodyClass="greenBody">
    <SEO title="About" />

    <AboutGrid />

  </Layout>
)

export default IndexPage
