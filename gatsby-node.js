const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: 'MarkdownRemark',
      fields: {
        frontmatter: 'Frontmatter!'
      },
      interfaces: ['Node'],
      extensions: {
        infer: true,
      },
    }),
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        title: {
          type: 'String!',
          resolve(parent) {
            return parent.title || '(Untitled)'
          }
        },
        date: {
          type: 'Date!',
          extensions: {
            dateformat: {},
          },
        },
        lectures: {
          type: 'LectureJson',
          extensions: {
            link: {},
          },
        }
      }
    }),
    schema.buildObjectType({
      name: 'LectureJson',
      fields: {
        name: 'String!',
        file: 'String!',
        url: 'String!'
      },
    }),
  ]
  createTypes(typeDefs)
}

// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//     }
//     type Frontmatter {
//       lectures: []
//     }
//   `
//   createTypes(typeDefs)
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workshopPost = path.resolve(`./src/templates/workshopPost.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: workshopPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        currentPage: index + 1
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
