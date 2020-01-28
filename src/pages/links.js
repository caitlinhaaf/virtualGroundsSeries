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
        <div>
          <section className={componentStyles.grid}>
              <div className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.links}`}>
                  <Link to="/classContent">
                    <h2>LIN<br/>KS</h2>
                  </Link>
              </div>

              <div className={`${componentStyles.list} ${componentStyles.gridSeciton}`}>
                  {(openWorkshops.length === 0 && allClosedWorkshopLinks.length === 0) &&
                    <p style={{fontStyle: `italic`}}>No workshop links have been posted yet.</p>
                  }

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

                  {allClosedWorkshopLinks.length >= 1 &&
                      <>
                        <h4 style={{marginBottom: `.5rem`}}>Extra Links</h4>
                        <ResourceList resources={ sortResourcesAlphabetically(allClosedWorkshopLinks) }/>
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