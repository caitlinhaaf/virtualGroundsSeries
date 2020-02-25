import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ResourceList from "../components/resourceList/resourceList"
import {normalizeResourceList,sortResourcesAlphabetically} from "../utils/helpers"

import componentStyles from "./links.module.scss"

class LinksPage extends React.Component {
  render() {
    const {data} = this.props;
    const workshops = data.allMarkdownRemark.edges
    const openWorkshops = workshops.filter(({node}) => (
      node.frontmatter.privacySetting === "open" && node.frontmatter.links))
    const closedWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "closed"))

    const allClosedWorkshopLinks = ( closedWorkshops.length >=1 ) ? (
      closedWorkshops
        .filter(({node}) => (node.frontmatter.links))
        .reduce((acc, {node}) => {
          const normalizedLinks = normalizeResourceList(node.frontmatter.links, "url");
          return [...normalizedLinks, ...acc]
        }, [])
    ):([])
    
    return(
      <Layout bodyClass="greenBody">
        <SEO title="Links" pageUrl="/links"/>
          <section className={componentStyles.container}>
              <div className={componentStyles.list}>
                  {/* If there are no resources from either closed or open workshops, display this message */}
                  {(openWorkshops.length === 0 && allClosedWorkshopLinks.length === 0) &&
                    <p style={{fontStyle: `italic`}}>No workshop links have been posted yet.</p>
                  }

                  {/* 
                    ADDING OPEN WORKSHOP LINKS
                    - sort by workshop
                    - include workshop title above list
                  */}
                  {openWorkshops.length >= 1 &&
                      openWorkshops.map(({node}, i) => {
                          if(node.frontmatter.links) {
                            const linksList = normalizeResourceList(node.frontmatter.links, "url")
                            return(
                                <div key={i}>
                                  <h4 style={{marginBottom: `.5rem`}}>{node.frontmatter.title}</h4>
                                  <ResourceList 
                                    resources={linksList} />
                                </div>
                              )
                          }
                          else return null;
                      })
                  }

                  {/*   
                    ADD CLOSED WORKSHOP LINKS
                    - collect all links under common header
                  */}
                  {allClosedWorkshopLinks.length >= 1 &&
                      <>
                        <h4 style={{marginBottom: `.5rem`}}>Extra Links</h4>
                        <ResourceList resources={ sortResourcesAlphabetically(allClosedWorkshopLinks) }/>
                      </>
                  }
              </div>

              <div className={componentStyles.links}>
                  <Link to="/classContent" aria-label="class content page">
                    <h2 className={componentStyles.pageLink}>LIN<br/>KS</h2>
                  </Link>
              </div>

          </section>
      </Layout>
    )
  }
}

export default LinksPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        filter: {frontmatter: {placeholder: {eq: false}}},
        sort: { fields: [frontmatter___date], 
        order: ASC })
    {
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