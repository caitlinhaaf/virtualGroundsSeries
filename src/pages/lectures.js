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
  let lecturesListed = false;
  workshops.forEach(({node}) => {
    if(node.frontmatter.lectures !== null) lecturesListed = true;
  })

  return(
    <Layout bodyClass="greenBody">
      <SEO title="Class Content" />

      <div>
            <section className={componentStyles.grid}>

                {/* <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.leftCol} ${componentStyles.readings}`}
                >
                    <Link to="/classContent">
                        <h2>READI<br/>NGS</h2>
                    </Link>
                </div> */}

                <div 
                    className={`${componentStyles.gridSeciton} ${componentStyles.rightCol} ${componentStyles.lectures}`}
                >   
                    <Link to="/classContent">
                        <h2>LECTU<br/>RES</h2>
                    </Link>
                </div>

                <div className={`${componentStyles.list} ${componentStyles.gridSeciton}`}>
                    { !lecturesListed ? (
                        <h4>No lectures added yet.</h4>
                    ):(
                        workshops.map(({node}, i) => {
                            if(node.frontmatter.lectures !== null){
                                return(
                                <div key={i}>
                                    <h4>{node.frontmatter.title}</h4>
                                    <ul style={{"margin-top" : "1em", "list-style": "none"}}>
                                        {node.frontmatter.lectures.map((lecture, j) =>(
                                            <li key={j}>
                                            <a href={lecture.url}
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
                            }else return null
                        })
                    )
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
            title
            lectures{
                name
                url
            }
          }
        }
      }
    }
  }
`