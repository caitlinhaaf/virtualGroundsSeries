import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import componentStyles from "./gallery.module.scss"

class GalleryPage extends React.Component {

render() {
  const {data} = this.props;
  const workshops = data.allMarkdownRemark.edges;

  const allGalleryImgs = workshops
    .filter(({node}) => (node.frontmatter.galleryImages))
    .reduce((acc, {node}) => ([...acc, ...node.frontmatter.galleryImages]), [])

  console.log(allGalleryImgs)

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content" pageUrl="/gallery"/>
      <section className={componentStyles.container}>

          <div className={componentStyles.gallery}>
              <Link to="/classContent" aria-label="class content page">
                <h2 className={componentStyles.pageLink}>GALL<br/>ERY</h2>
              </Link>
          </div>

          {/* If there are no images from any workshops, display this message */}
          {allGalleryImgs.length === 0 &&
            <p style={{fontStyle: `italic`}}>No workshop images have been posted yet.</p>
          }

          {/* Add first two images into a separate container, next to page header... */}
          {allGalleryImgs.length >=1 &&
            <div className={componentStyles.list}>
              {allGalleryImgs.slice(0,2).map((image, i) => (
                  <img key={i} src={image.image} alt={image.altText}/>
                ))
              }
            </div>
          }
          {/* ...add the remaining images to a container below the header */}
          {allGalleryImgs.length > 2 &&
            <div className={componentStyles.listContinued}>
              {allGalleryImgs.slice(3).map((image, i) => (
                  <img key={i} src={image.image} alt={image.altText}/>
                ))
              }
            </div>
          }

      </section>
    </Layout>
  )
}
  
}

export default GalleryPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {placeholder: {eq: false}}},
      sort: { fields: [frontmatter___date], 
      order: ASC 
    }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            galleryImages{
                image
                altText
            }
          }
        }
      }
    }
  }
`