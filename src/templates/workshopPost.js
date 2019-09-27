import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

import Lines from '../components/lines/lines'
import componentStyles from "./workshopPost.module.scss"

class WorkshopPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, currentPage } = this.props.pageContext

    console.log(post)

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
              WORK<span className={componentStyles.light}>SHOP {currentPage}</span>
            </h1>

            <p className={componentStyles.date}>
              {post.frontmatter.date}
            </p>
          </header>

          <section style={{"margin-bottom": "1em"}}>
            <h4 style={{"margin-bottom": ".25em"}}>DESCRIPTION</h4>
            <p>{post.frontmatter.description}</p>
          </section>

          <section  style={{"margin-bottom": "1em"}}>
            <h4 style={{"margin-bottom": ".25em"}}>SUMMARY</h4>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
          

          <section className={componentStyles.resourcesGrid}>
            <div style={{ "grid-area": "lines", "width": "100px"}}>
              <Lines color="white" />
            </div>
           
            <div style={{ "grid-area": "readings"}}>
              <h4>Readings</h4>
              {post.frontmatter.readings &&
                <ul className={componentStyles.linkList}>
                {post.frontmatter.readingFiles.map((reading, i)=>(
                  <li className={componentStyles.link}>
                    <a key={i} target="_blank" rel="noopener noreferrer" href={reading.file}>
                      {reading.name}
                    </a>
                  </li>
                ))}
                </ul>
              }
            </div>

            <div style={{ "grid-area": "lectures"}}>
              <h4>Lectures</h4>
            </div>

            <div style={{ "grid-area": "gallery"}}>
              <h4>Gallery</h4>
            </div>

            <div style={{ "grid-area": "links"}}>
              <h4>Links</h4>
            </div>

          </section>

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
                  &lt; Previous Workshop
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  Next Workshop &gt;
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
        readingFiles{
          name
          file
        }
      }
    }
  }
`
