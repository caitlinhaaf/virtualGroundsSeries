import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// import ClassLinksGrid from "../components/classLinksGrid/classLinksGrid"
import componentStyles from "./gallery.module.scss"

class GalleryPage extends React.Component {

render() {
  const {data} = this.props;
  const workshops = data.allMarkdownRemark.edges

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content" />

      <div>
            <section className={componentStyles.grid}>

                <div className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.gallery}`}>
                    <Link to="/classContent">
                      <h2>GALL<br/>ERY</h2>
                    </Link>
                </div>

                <div className={`${componentStyles.list} ${componentStyles.gridSeciton}`}>
                    {/* {workshops.map(({node}) => (
                      node.galleryImages.map((image, j) => (
                        <img key={j} src={image.image} alt={image.altText}/>
                      ))
                    ))
                    } */}
                    {
                      workshops.map(({node})=>{
                        
                        return(
                          node.frontmatter.galleryImages.map((image, j) => (
                            <img key={j} src={image.image} alt={image.altText}/>
                          ))
                        )
                      })
                    }
                </div>


            </section>
        </div>
    </Layout>
  )
}
  
}

export default GalleryPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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