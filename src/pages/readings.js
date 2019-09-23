import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// import ClassLinksGrid from "../components/classLinksGrid/classLinksGrid"
import componentStyles from "./readings.module.scss"

class ReadingsPage extends React.Component {

render() {

  const {data} = this.props;
  const workshops = data.allMarkdownRemark.edges
  console.log(workshops)

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content" />

      <div>
            <section className={componentStyles.grid}>

                <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.readings}`}
                >
                    <Link to="/classContent">
                        <h2>READI<br/>NGS</h2>
                    </Link>
                </div>

                <div className={componentStyles.list}>
                    {
                        workshops.map(({node}, i) => {
                            console.log(i)
                            console.log(node.frontmatter)
                            return(
                            <div key={i}>
                                <h4>{node.frontmatter.title}</h4>
                                <ul>
                                    {node.frontmatter.readings.map((reading, j) =>(
                                        <p key={j}>{reading.name}</p>
                                    ))
                                    }
                                </ul>
                            </div>
                            )
                        })
                    }
                </div>

                {/* <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.lectures}`}
                >
                    <h2>LECTU<br/>RES</h2>
                </div> */}

                {/* <div className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.gallery}`}>
                    <h2>GALL<br/>ERY</h2>
                </div> */}

                {/* <div className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.links}`}>
                    <h2>LIN<br/>KS</h2>
                </div> */}

            </section>
        </div>
      
    </Layout>
  )
}
  
}

export default ReadingsPage


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
            readings{
                name
                file
            }
          }
        }
      }
    }
  }
`