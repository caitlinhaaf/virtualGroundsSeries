import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ResourceList from "../components/resourceList/resourceList"
import {normalizeResourceList} from "../utils/helpers"

import componentStyles from "./lectures.module.scss"

class LecturesPage extends React.Component {

render() {
  const {data} = this.props;
  const workshops = data.allMarkdownRemark.edges
  const openWorkshops = workshops.filter(({node}) => (node.frontmatter.privacySetting === "open"))
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
  const allClosedLinks = normalizeResourceList([...allClosedFiles, ...allClosedUrls], "linkPath")

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Lectures" pageUrl="/lectures"/>

      <div>
            <section className={componentStyles.grid}>

                <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.lectures}`}
                >   
                    <Link to="/classContent">
                        <h2>LECTU<br/>RES</h2>
                    </Link>
                </div>

                <div className={`${componentStyles.list} ${componentStyles.gridSeciton}`}>
                    { (openWorkshops.length === 0 && allClosedLinks.length === 0) &&
                      <p style={{fontStyle: `italic`}}>No workshop lectures have been posted yet.</p>
                    }

                    { openWorkshops.length >= 1 &&
                        openWorkshops.map(({node}, i) => {
                            const lectureFiles = node.frontmatter.lectureFiles ? (
                              normalizeResourceList(node.frontmatter.lectureFiles, "file")
                            ) : ([])
                            const lectureLinks = node.frontmatter.lectureLinks ? (
                              normalizeResourceList(node.frontmatter.lectureLinks, "url")
                            ) : ([])
                            const allLectures = [...lectureFiles, ...lectureLinks] 

                            return(
                              <div key={i}>
                                  <h4 style={{marginBottom: `.5em`}}>{node.frontmatter.title}</h4>
                                  <ResourceList resources={normalizeResourceList(allLectures, "linkPath")} />
                              </div>
                            )
                        })
                    }

                    {allClosedLinks.length >= 1 &&
                        <>
                          <h4 style={{marginBottom: `.5em`}}>Extra Lectures</h4>
                          <ResourceList resources={normalizeResourceList(allClosedLinks, "linkPath")} />
                        </>
                    }
                </div>

            </section>
        </div>
      
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