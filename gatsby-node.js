const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createResolvers = ({ createResolvers }) => {
//   const resolvers = {
//     MarkdownRemarkFrontmatter: {
//       readings: {
//         resolve(source, args, context, info) {
//           if (!source.readings) {
//             return info.originalResolver(
//               {
//                 ...source,
//                 readings: {type: "ReadingsJson"}
//               },
//               args,
//               context,
//               info
//             )
//           }else{
//             return info.originalResolver(source, args, context, info)
//           }
//         },
//       },
//     },
//   }
//   createResolvers(resolvers)
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workshopPost = path.resolve(`./src/templates/workshopPost.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
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

  // Create workshop pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node
    // const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: workshopPost,
      context: {
        slug: post.node.fields.slug,
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
