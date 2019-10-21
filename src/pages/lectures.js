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

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content" />

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
                                  <ResourceList resources={allLectures} />
                              </div>
                            )
                        })
                    }

                    {
                      closedWorkshops.length >= 1 &&
                        <>
                          <h4 style={{marginBottom: `.5em`}}>Extra Lectures</h4>
                          <ul style={{"listStyle": "none"}}>
                            {
                              closedWorkshops.map(({node}, i) => {
                                const lectureFiles = node.frontmatter.lectureFiles ? (
                                  normalizeResourceList(node.frontmatter.lectureFiles, "file")
                                ) : ([])
                                const lectureLinks = node.frontmatter.lectureLinks ? (
                                  normalizeResourceList(node.frontmatter.lectureLinks, "url")
                                ) : ([])
                                const allLectures = [...lectureFiles, ...lectureLinks] 

                                return <ResourceList key={i} resources={allLectures} />
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

export default LecturesPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { 
        fields: [frontmatter___date], 
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