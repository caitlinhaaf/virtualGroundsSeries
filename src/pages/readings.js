import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import ResourceList from "../components/resourceList/resourceList";
import {normalizeResourceList,sortResourcesAlphabetically} from "../utils/helpers";

import componentStyles from "./readings.module.scss";

class ReadingsPage extends React.Component {

  render() {
    const {data} = this.props;
    const workshops = data.allMarkdownRemark.edges;
    const openWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "open"));
    const closedWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "closed"));

    const allClosedFiles = ( closedWorkshops.length >=1 ) ? (
      closedWorkshops
        .filter(({node}) => (node.frontmatter.readingFiles))
        .reduce((acc, {node}) => {
          const normalizedLinks = normalizeResourceList(node.frontmatter.readingFiles, "file");
          return [...normalizedLinks, ...acc]
        }, [])
    ):([]);
    const allClosedUrls = ( closedWorkshops.length >=1 ) ? (
      closedWorkshops
        .filter(({node}) => (node.frontmatter.readingLinks))
        .reduce((acc, {node}) => {
          const normalizedLinks = normalizeResourceList(node.frontmatter.readingLinks, "url");
          return [...normalizedLinks, ...acc]
        }, [])
    ):([])
    const allClosedLinks = sortResourcesAlphabetically([...allClosedFiles, ...allClosedUrls])

    return(
      <Layout bodyClass="greenBody">
        <SEO title="Readings" pageUrl="/readings"/>
          <section className={componentStyles.container}>

              <div 
                  className={componentStyles.readings}
              >
                  <Link to="/classContent" aria-label="class content page">
                      <h2 className={componentStyles.pageLink}>READI<br/>NGS</h2>
                  </Link>
              </div>
              

              <div className={componentStyles.list}>
                  {/* If there are no resources from either closed or open workshops, display this message */}
                  { (openWorkshops.length === 0 && allClosedLinks.length === 0) &&
                    <p style={{fontStyle: `italic`}}>No workshop readings have been posted yet.</p>
                  }
                
                  {/* 
                    ADDING OPEN WORKSHOP LINKS
                    - sort by workshop
                    - include workshop title above list
                  */}
                  { openWorkshops.length >= 1 &&
                      openWorkshops.map(({node}, i) => {
                          const fileLinks = node.frontmatter.readingFiles ? (
                            normalizeResourceList(node.frontmatter.readingFiles, "file")
                          ) : ([])
                          const urlLinks = node.frontmatter.readingLinks ? (
                            normalizeResourceList(node.frontmatter.readingLinks, "url")
                          ) : ([])
                          const allReadings = [...fileLinks, ...urlLinks] 

                          if(allReadings.length >=1){
                            return(
                              <div key={i}>
                                  <h4>{node.frontmatter.title}</h4>
                                  <ResourceList resources={normalizeResourceList(allReadings, "linkPath")} />
                              </div>
                              )
                          }else return null
                      })     

                  }

                  {/*   
                    ADD CLOSED WORKSHOP LINKS
                    - collect all links under common header
                  */}
                  {allClosedLinks.length >= 1 &&
                    <div>
                      <h4>Extra Readings</h4>
                      <ResourceList resources={allClosedLinks} />
                    </div>
                  }
              </div>

          </section>  
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