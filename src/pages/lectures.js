import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ResourceList from "../components/resourceList/resourceList"
import {normalizeResourceList,sortResourcesAlphabetically} from "../utils/helpers"

import componentStyles from "./lectures.module.scss"

class LecturesPage extends React.Component {

render() {
  const {data} = this.props;
  const workshops = data.allMarkdownRemark.edges
  const openWorkshops = workshops.filter(({node}) => (
    node.frontmatter.privacySetting === "open"
    &&
    node.frontmatter.lectureFiles
  ))
  const closedWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "closed"))

  const allClosedFiles = ( closedWorkshops.length >=1 ) ? (
    closedWorkshops
      .filter(({node}) => (node.frontmatter.lectureFiles))
      .reduce((acc, {node}) => {
        const normalizedLinks = normalizeResourceList(node.frontmatter.lectureFiles, "file");
        return [...normalizedLinks, ...acc]
      }, [])
  ):([])
  const allClosedUrls = ( closedWorkshops.length >=1 ) ? (
    closedWorkshops
      .filter(({node}) => (node.frontmatter.lectureLinks))
      .reduce((acc, {node}) => {
        const normalizedLinks = normalizeResourceList(node.frontmatter.lectureLinks, "url");
        return [...normalizedLinks, ...acc]
      }, [])
  ):([])
  const allClosedLinks = sortResourcesAlphabetically([...allClosedFiles, ...allClosedUrls])

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Lectures" pageUrl="/lectures"/>
      <section className={componentStyles.container}>

          <div 
              className={componentStyles.lectures}
          >   
              <Link to="/classContent" aria-label="class content page">
                  <h2 className={componentStyles.pageLink}>LECTU<br/>RES</h2>
              </Link>
          </div>

          <div>
              {/* If there are no resources from either closed or open workshops, display this message */}
              { (openWorkshops.length === 0 && allClosedLinks.length === 0) &&
                <p style={{fontStyle: `italic`}}>No workshop lectures have been posted yet.</p>
              }

              {/* 
                ADDING OPEN WORKSHOP LINKS
                - sort by workshop
                - include workshop title above list
              */}
              { openWorkshops.length >= 1 &&
                  openWorkshops.map(({node}, i) => {
                      const lectureFiles = node.frontmatter.lectureFiles ? (
                        normalizeResourceList(node.frontmatter.lectureFiles, "file")
                      ) : ([])
                      const lectureLinks = node.frontmatter.lectureLinks ? (
                        normalizeResourceList(node.frontmatter.lectureLinks, "url")
                      ) : ([])
                      const allLectures = [...lectureFiles, ...lectureLinks] 

                      if(allLectures.length >=1){
                        return(
                          <div key={i}>
                              <h4>{node.frontmatter.title}</h4>
                              <ResourceList resources={sortResourcesAlphabetically(allLectures)} />
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
                  <>
                    <h4>Extra Lectures</h4>
                    <ResourceList resources={sortResourcesAlphabetically(allClosedLinks)} />
                  </>
              }
          </div>

      </section>      
    </Layout>
  )
}
  
}

export default LecturesPage


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
            privacySetting
            title
            lectureFiles{
                name
                file
            }
            lectureLinks{
              name
              url
          }
          }
        }
      }
    }
  }
`