import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import WorkshopBlock from '../components/workshopBlock/workshopBlock'


class WorkshopPage extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log(posts)

    return(
      <Layout bodyClass="orangeBody">
        <SEO title="Workshops" />

        {
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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