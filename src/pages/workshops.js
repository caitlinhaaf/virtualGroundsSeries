import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import WorkshopBlock from '../components/workshopBlock/workshopBlock'


class WorkshopPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return(
      <Layout bodyClass="orangeBody">
        <SEO title="Workshops" pageUrl="/workshops"/>
        {posts.length === 0 &&
          <>
            <h1 style={{marginBottom: `1rem`, fontSize: `7vw`}}>WORKSHOPS</h1>
            <p style={{fontStyle: `italic`}}>No open workshops have been posted yet.</p>
          </>
        }

        {posts.length >=1 &&
          posts.map(({node}, i) => (
            <WorkshopBlock 
              key={i}
              workshopNum={node.frontmatter.workshopNum}
              pageLink={node.fields.slug}
              date={node.frontmatter.date}
              thumbnailSrc={node.frontmatter.thumbnail}>
              <p>
                {node.frontmatter.description}
              </p>
            </WorkshopBlock>
          ))
        }

        </Layout> 
    )
  }
  
}

export default WorkshopPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {privacySetting: {eq: "open"}, placeholder: {nin: true}}},
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            placeholder
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