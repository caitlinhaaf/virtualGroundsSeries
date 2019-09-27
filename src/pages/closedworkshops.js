import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import WorkshopBlock from '../components/workshopBlock/workshopBlock'

class ClosedWorkshopPage extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    // console.log(posts)

    return(
      <Layout bodyClass="orangeBody">
        <SEO title="Workshops" />

        <div style={{"margin": "0em 0 1em 0", "font-size": "5vw"}}>
            <h2>CLOSED WORKSHOPS</h2>
            <p>Note that the workshops listed here are closed to the public.</p>
        </div>

        <div>
            {
            posts.map(({node}, i) => (
                <WorkshopBlock 
                key={i}
                workshopNum={i+1} 
                pageLink={node.fields.slug}
                date={node.frontmatter.date}
                thumbnailSrc={node.frontmatter.thumbnail}>
                <p
                    style={{
                    "max-height": "200px;",
                    "overflow": "hidden",
                    }}>
                    {node.frontmatter.description}
                </p>
                </WorkshopBlock>
            ))
            }
        </div>

        </Layout> 
    )
  }
  
}

export default ClosedWorkshopPage 

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {privacySetting: {eq: "closed"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            workshopNum
            date(formatString: "MMMM, YYYY")
            title
            description
            thumbnail
          }
        }
      }
    }
  }
`