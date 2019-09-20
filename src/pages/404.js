import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import FemmeInLargeCoat from "../components/images/femmeInLargeCoat"

import componentStyles from "./404.module.scss"

const NotFoundPage = () => (
  <Layout bodyClass="orangeBody">
    <SEO title="404: Not found"/>
    
    <section className={componentStyles.block}>
      
      <div>
        <h1>404</h1>
        <h2>not found</h2>
      </div>
      
      <div>
        <FemmeInLargeCoat />
      </div>
      

    </section>
    

  </Layout>
)

export default NotFoundPage
