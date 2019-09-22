import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import componentStyles from "./workshopPost.module.scss"

class WorkshopPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, currentPage } = this.props.pageContext

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
        bodyClass="orangeBody">

        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article>
          <header className={componentStyles.header}>
            <h1 className={componentStyles.heading}>
              {/* {post.frontmatter.title} */}
              WORKSHOP {currentPage}
            </h1>

            <p className={componentStyles.date}>
              {post.frontmatter.date}
            </p>
          </header>

          <section>
            {post.frontmatter.description}
          </section>


          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          
          <hr className={componentStyles.rule}/>
          
        </article>


        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >

            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>

          </ul>
        </nav>


      </Layout>
    )
  }
}

export default WorkshopPostTemplate

export const pageQuery = graphql`
  query WorkshopPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
