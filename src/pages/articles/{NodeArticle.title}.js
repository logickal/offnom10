import { graphql } from "gatsby"
import React from "react"
import {GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleTemplate = ({ data }) => {
  const article = data.nodeArticle
  const image = getImage(article.relationships.field_image.localFile)
  return (
    <div>
      <h1>{article.title}</h1>
      <p>Published on {article.created}</p>
      <GatsbyImage image={image} alt={article.title} />
      <div dangerouslySetInnerHTML={{ __html: article.body.processed }} />
    </div>
  )
}

export default ArticleTemplate

export const query = graphql`
    query($id: String!) {
      nodeArticle(id: {eq: $id}, relationships: {field_image: {}}) {
        id
        title
        created(formatString: "MMMM DD, YYYY")
        body {
          processed
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
`