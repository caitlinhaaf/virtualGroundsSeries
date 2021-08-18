import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ReactMarkdown from 'react-markdown'

const ApplicationsPage = ({ data }) => {
    const pageData = data.allMarkdownRemark.edges[0].node
    console.log(pageData)

    return(
    <Layout bodyClass="greenBody">
        <SEO title="Call for Applications" pageUrl="/call-for-applications/"/>
        <h1 className="alt">{pageData.frontmatter.title}</h1>
        <h2 className="alt">{pageData.frontmatter.subtitle}</h2>

        <section className="pageContentBody">
            <ReactMarkdown>
                {pageData.rawMarkdownBody}
            </ReactMarkdown>
        </section>
    </Layout>
    )
}

export default ApplicationsPage

export const query = graphql`
    query CallForApplications {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
        edges {
            node {
            id
            frontmatter {
                date
                title
                subtitle
            }
            rawMarkdownBody
            }
        }
        }
    }
`