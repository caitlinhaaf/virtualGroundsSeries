import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// import ClassLinksGrid from "../components/classLinksGrid/classLinksGrid"
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

                            let allLectures;
                            // const allLectures = [...node.frontmatter.lectureFiles, ...node.frontmatter.lectureLinks]
                            if(node.frontmatter.lectureFiles && node.frontmatter.lectureLinks) allLectures = [...node.frontmatter.lectureFiles, ...node.frontmatter.lectureLinks]
                            else if(node.frontmatter.lectureFiles) allLectures = [...node.frontmatter.lectureFiles]
                            else if(node.frontmatter.lectureLinks) allLectures = [...node.frontmatter.lectureLinks]

                            return(
                            <div key={i}>
                                <h4>{node.frontmatter.title}</h4>
                                <ul style={{"marginTop" : "1em", "listStyle": "none"}}>
                                    {allLectures.map((lecture, j) =>(
                                        <li key={j}>
                                          <a href={lecture.file ? lecture.file : lecture.url}
                                             target="_blank"
                                             rel="noopener noreferrer">
                                            {lecture.name}
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
                          <h4>Extra Lectures</h4>
                          <ul style={{"marginTop" : "1em", "listStyle": "none"}}>
                            {
                              closedWorkshops.map(({node}) => {

                                // const allLectures = [...node.frontmatter.lectureFiles, ...node.frontmatter.lectureLinks]
                                let allLectures;
                                // const allLectures = [...node.frontmatter.lectureFiles, ...node.frontmatter.lectureLinks]
                                if(node.frontmatter.lectureFiles!==null && node.frontmatter.lectureLinks!==null) allLectures = [...node.frontmatter.lectureFiles, ...node.frontmatter.lectureLinks]
                                else if(node.frontmatter.lectureFiles!==null) allLectures = [...node.frontmatter.lectureFiles]
                                else if(node.frontmatter.lectureLinks!==null) allLectures = [...node.frontmatter.lectureLinks]

                                return(
                                  allLectures.map((lecture, j) =>(
                                    <li key={j}>
                                      <a href={lecture.file ? lecture.file : lecture.url}
                                         target="_blank"
                                         rel="noopener noreferrer">
                                        {lecture.name}
                                      </a>
                                    </li>
                                ))
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

export default LecturesPage


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