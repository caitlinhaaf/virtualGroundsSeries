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

    // const workshopList = ["test", "test", "test", "test"]

    return(
      <Layout bodyClass="orangeBody">
        <SEO title="Workshops" />

        {
          posts.map(({node}, i) => (
            <WorkshopBlock workshopNum={i+1} pageLink={node.fields.slug}>
              <p>{node.frontmatter.description}</p>
            </WorkshopBlock>
          ))
        }

        {/* {
          posts.map(({node}, i) => (
              <WorkshopBlock workshopNum={i+1} pageLink={node.fields.slug}>
                <p>{node.frontmatter.description}</p>
              <WorkshopBlock/>
          ))
        } */}

        {/* {
          posts.map((node, i) => {
            return(
              <WorkshopBlock workshopNum={i+1} pageLink={node.fields.slug}>
                  <p>{node.frontmatter.description}</p>
              <WorkshopBlock/>
            )
          })
        } */}

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`



// {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug
//           return (
//             <article key={node.fields.slug}>
//               <header>
//                 <h3
//                   style={{
//                     marginBottom: rhythm(1 / 4),
//                   }}
//                 >
//                   <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                     {title}
//                   </Link>
//                 </h3>
//                 <small>{node.frontmatter.date}</small>
//               </header>
//               <section>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </section>
//             </article>
//           )
//         })}