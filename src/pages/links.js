import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// import ClassLinksGrid from "../components/classLinksGrid/classLinksGrid"
import componentStyles from "./links.module.scss"

class LinksPage extends React.Component {

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
                <div className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.links}`}>
                    <Link to="/classContent">
                      <h2>LIN<br/>KS</h2>
                    </Link>
                </div>

                <div className={`${componentStyles.list} ${componentStyles.gridSeciton}`}>
                    {openWorkshops.length >= 1 &&
                        openWorkshops.map(({node}, i) => {
                            return(
                            <div key={i}>
                                <h4>{node.frontmatter.title}</h4>
                                <ul style={{"margin-top" : "1em", "list-style": "none"}}>
                                    {node.frontmatter.links.map((link, j) =>(
                                        <li key={j}>
                                          <a href={link.url}
                                             target="_blank"
                                             rel="noopener noreferrer">
                                            {link.name}
                                          </a>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                            )
                        })
                    }

                    {
                      closedWorkshops.length >= 1 &&
                        <>
                          <h4>Extra Links</h4>
                          <ul style={{"margin-top" : "1em", "list-style": "none"}}>
                            {closedWorkshops.map.length >1 &&
                              closedWorkshops.map(({node}) => {
                                return(
                                  <>
                                    {
                                      node.frontmatter.links.map((link, j) =>(
                                        <li key={j}>
                                          <a href={link.url}
                                             target="_blank"
                                             rel="noopener noreferrer">
                                            {link.name}
                                          </a>
                                        </li>
                                    ))
                                    }
                                  </>
                                )
                              })

                            }
                          </ul>
                        </>
                    }
                </div>

            </section>
        </div>
      
    </Layout>
  )
}
  
}

export default LinksPage


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
            links{
                name
                url
            }
          }
        }
      }
    }
  }
`