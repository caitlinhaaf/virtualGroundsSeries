import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import WorkshopBlock from '../components/workshopBlock/workshopBlock'

class ClosedWorkshopPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return(
      <Layout bodyClass="orangeBody">
        <SEO title="Workshops" pageUrl="/closedworkshops"/>

        <div style={{"margin": "0em 0 2em 0"}}>
            <h2 style={{"font-size": "7vw"}}>CLOSED WORKSHOPS</h2>
            <h5 style={{"font-size":"1.25em"}}>Note that the workshops listed here are closed to the public.</h5>
            {posts.length === 0 &&
              <p style={{fontStyle: `italic`}}>No open workshops have been posted yet.</p>
            }
        </div>

        <div>
            {posts.length >=1 &&
              posts.map(({node}, i) => (
                  <WorkshopBlock 
                  key={i}
                  workshopNum={node.frontmatter.workshopNum}
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }, 
      filter: {frontmatter: {privacySetting: {eq: "closed"}, placeholder: {nin: true}}}) {
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