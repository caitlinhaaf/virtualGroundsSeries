import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import componentStyles from './logos.module.scss';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const PartnerLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      djlLogo: file(relativePath: { eq: "logo_DJI-text_DJI-text-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tsvLogo: file(relativePath: { eq: "TSV_logo_white.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ccfaLogo: file(relativePath: { eq: "CCFA_BW_black_e_WHITE.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={componentStyles.container}>
        <Img fluid={data.djlLogo.childImageSharp.fluid} objectFit="cover" alt="Digital Justice Labs logo."/>
        <Img fluid={data.tsvLogo.childImageSharp.fluid} objectFit="cover" alt="Trinity Square Video logo."/>
        <Img fluid={data.ccfaLogo.childImageSharp.fluid} objectFit="cover" alt="Canada Council for the Arts logo."/>
    </div> 
  )
}

export default PartnerLogos;
