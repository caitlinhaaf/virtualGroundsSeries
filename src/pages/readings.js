import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ResourceList from "../components/resourceList/resourceList"
import {normalizeResourceList} from "../utils/helpers"

import componentStyles from "./readings.module.scss"

class ReadingsPage extends React.Component {

render() {

  const {data} = this.props;
  const workshops = data.allMarkdownRemark.edges
  const openWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "open"))
  const closedWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "closed"))

  const allClosedFiles = ( closedWorkshops.length >=1 ) ? (
    closedWorkshops
      .filter(({node}) => (node.frontmatter.readingFiles))
      .reduce((acc, {node}) => {
        const normalizedLinks = normalizeResourceList(node.frontmatter.readingFiles, "file");
        return [...normalizedLinks, ...acc]
      }, [])
  ):([])
  const allClosedUrls = ( closedWorkshops.length >=1 ) ? (
    closedWorkshops
      .filter(({node}) => (node.frontmatter.readingLinks))
      .reduce((acc, {node}) => {
        const normalizedLinks = normalizeResourceList(node.frontmatter.readingLinks, "url");
        return [...normalizedLinks, ...acc]
      }, [])
  ):([])
  const allClosedLinks = normalizeResourceList([...allClosedFiles, ...allClosedUrls], "linkPath")

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
                    { (openWorkshops.length === 0 && allClosedLinks.length === 0) &&
                      <p style={{fontStyle: `italic`}}>No workshop readings have been posted yet.</p>
                    }
                  
                    { openWorkshops.length >= 1 &&
                        openWorkshops.map(({node}, i) => {
                            const fileLinks = node.frontmatter.readingFiles ? (
                              normalizeResourceList(node.frontmatter.readingFiles, "file")
                            ) : ([])
                            const urlLinks = node.frontmatter.readingLinks ? (
                              normalizeResourceList(node.frontmatter.readingLinks, "url")
                            ) : ([])
                            const allReadings = [...fileLinks, ...urlLinks] 

                            return(
                            <div key={i}>
                                <h4 style={{marginBottom: `.5em`}}>{node.frontmatter.title}</h4>
                                <ResourceList resources={normalizeResourceList(allReadings, "linkPath")} />
                            </div>
                            )
                        })     
                    }

                    {allClosedLinks.length >= 1 &&
                      <div>
                        <h4 style={{marginBottom: `.5em`}}>Extra Readings</h4>
                        <ResourceList resources={allClosedLinks} />
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