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

  const openWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "open"))
  const closedWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "closed"))

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

                <div className={`${componentStyles.list} ${componentStyles.gridSeciton}`}>
                    { openWorkshops.length >= 1 &&
                        openWorkshops.map(({node}, i) => {
                            const allReadings = [...node.frontmatter.readingFiles, ...node.frontmatter.readingLinks]
                            return(
                            <div key={i}>
                                <h4>{node.frontmatter.title}</h4>
                                <ul style={{"margin-top" : "1em", "list-style": "none"}}>
                                    {allReadings.map((reading, j) =>(
                                        <li key={j}>
                                          <a href={(reading.file) ? reading.file : reading.url}
                                             target="_blank"
                                             rel="noopener noreferrer">
                                            {reading.name}
                                          </a>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                            )
                        })
                    }

                    {closedWorkshops.length >= 1 &&
                      <div>
                        <h4>Extra Readings</h4>
                        <ul style={{"margin-top" : "1em", "list-style": "none"}}>
                          {closedWorkshops.map(({node}, i) => { 
                            const allReadings = [...node.frontmatter.readingFiles, ...node.frontmatter.readingLinks]
                            return(
                              <>
                                {
                                  allReadings.map((reading, j) => (
                                    <li key={j}>
                                          <a href={(reading.url) ? reading.url : reading.file}
                                             target="_blank"
                                             rel="noopener noreferrer">
                                            {reading.name}
                                          </a>
                                    </li>
                                  ))
                                }
                              </>
                            )
                          })
                          }
                        </ul>
                      </div>
                    }
                </div>

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
            privacySetting
            title
            readingFiles{
                name
                file
            }
            readingLinks{
              name
              url
          }
          }
        }
      }
    }
  }
`