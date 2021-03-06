import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ name, alt, minWidth }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find((item) => {
    return item.node.relativePath.includes(name)
  })

  if (!image) {
    return null
  }

  return <Img fluid={image.node.childImageSharp.fluid} alt={alt} />
}

export default Image
