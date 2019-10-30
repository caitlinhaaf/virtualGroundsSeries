import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import {normalizeResourceList} from "../utils/helpers"

import Lines from '../components/lines/lines'
import componentStyles from "./workshopPost.module.scss"

class WorkshopPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    const readingFiles = post.frontmatter.readingFiles ? normalizeResourceList(post.frontmatter.readingFiles, "file") : []
    const readingLinks = post.frontmatter.readingLinks ? normalizeResourceList(post.frontmatter.readingLinks, "url") : []
    const allReadings = normalizeResourceList([...readingFiles, ...readingLinks], "linkPath")

    const lectureFiles = post.frontmatter.lectureFiles ? normalizeResourceList(post.frontmatter.lectureFiles, "file") : []
    const lectureLinks = post.frontmatter.lectureLinks ? normalizeResourceList(post.frontmatter.lectureLinks, "url") : []
    const allLectures = normalizeResourceList([...lectureFiles, ...lectureLinks], "linkPath")

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
        bodyClass="orangeBody">

        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          pageUrl="/"
        />

        <article>
          <header className={componentStyles.header}>
            <h1 className={componentStyles.heading}>
              WORK<span className={componentStyles.light}>SHOP {post.frontmatter.workshopNum}</span>
            </h1>
            <h2 className={componentStyles.subHeading}>
              {post.frontmatter.title} | {post.frontmatter.date}
            </h2> 
           
          </header>

          <section style={{"margin-bottom": "1em"}}>
            <h4 style={{"margin-bottom": ".25em"}}>DESCRIPTION</h4>
            <p>{post.frontmatter.description}</p>
          </section>

          <section  style={{"margin-bottom": "1em"}}>
            <h4 style={{"margin-bottom": ".25em"}}>SUMMARY</h4>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
          
          <h4 style={{"margin-bottom": ".25em"}}>RESOURCES</h4>

          {(allReadings.length===0 
              && allLectures.length ===0
              && !post.frontmatter.galleryImages
              && !post.frontmatter.links
             ) ? (
              <div style={{ "grid-area": "readings"}}>
                <p style={{fontStyle: `italic`}}>
                  No workshop resources posted yet.
                </p>
              </div>
             ): (
              <section className={componentStyles.resourcesGrid}>
                <div style={{ "grid-area": "lines", "width": "100px"}}>
                  <Lines color="white" />
                </div>
              
              {allReadings.length >= 1 &&
                  <div style={{ "grid-area": "readings"}}>
                    <h4>Readings</h4>
                    <ul className={componentStyles.linkList}>
                      {allReadings.map((reading, i) => (
                        <li className={componentStyles.link}>
                          <a key={i} target="_blank" rel="noopener noreferrer" href={reading.linkPath}>
                            {reading.name}
                          </a>
                        </li>
                      ))}
                      </ul>
                  </div>
              }
    
              {allLectures.length >= 1 &&
                  <div style={{ "grid-area": "lectures"}}>
                    <h4>Lectures</h4>
                    <ul className={componentStyles.linkList}>
    
                      {allLectures.map((lecture, i) => (
                        <li className={componentStyles.link}>
                          <a key={i} target="_blank" rel="noopener noreferrer" href={lecture.linkPath}>
                            {lecture.name}
                          </a>
                        </li>
                      ))}
                      </ul>
                  </div>
              }
    
              {(post.frontmatter.galleryImages && post.frontmatter.galleryImages.length >=1) &&
                <div style={{ "grid-area": "gallery"}}>
                  <h4>Gallery</h4>
                  <div style={{"margin-top": "1em"}}>
                    {post.frontmatter.galleryImages.map((image, i)=>(
                        <img key={i} className={componentStyles.galleryImg} src={image.image} alt={image.altText}/>
                      ))}
                  </div>
                </div>
              }
    
              {(post.frontmatter.links && post.frontmatter.links.length >=1) &&
                  <div style={{ "grid-area": "links"}}>
                    <h4>Links</h4>
                    <ul className={componentStyles.linkList}>
                      {post.frontmatter.links !== null  &&
                        post.frontmatter.links.map((link, i)=>(
                        <li className={componentStyles.link}>
                          <a key={i} target="_blank" rel="noopener noreferrer" href={link.url}>
                            {link.name}
                          </a>
                        </li>
                      ))}
                      </ul>
                  </div>
              }
    
              </section>
             )
             
            }


          <hr className={componentStyles.rule}/>

          {post.frontmatter.privacySetting === "closed" ?
            (
              <Link to="/closedworkshops" className={componentStyles.backLink}>
                &lt; Back to Closed Workshops Page
              </Link>
            ):(
              <Link to="/workshops" className={componentStyles.backLink}>
                &lt; Back to Workshops Page
              </Link>
            )
          }
          
        </article>

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
      excerpt
      html
      frontmatter {
        privacySetting
        workshopNum
        title
        date(formatString: "MMMM DD, YYYY")
        description
        readingFiles{
          name
          file
        }
        readingLinks{
          name
          url
        }
        lectureFiles{
          name
          file
        }
        lectureLinks{
          name
          url
        }
        galleryImages{
          image
          altText
        }
        links{
          name
          url
        }
      }
    }
  }
`
