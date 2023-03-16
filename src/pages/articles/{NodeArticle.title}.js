import { graphql } from "gatsby"
import React from "react"
import DrupalImage from "../../components/DrupalImage"

const ArticleTemplate = ({ data }) => {
  const article = data.nodeArticle
  const image = article.relationships.field_image

  return (
    <div>
      <h1>{article.title}</h1>
      <p>Published on {article.created}</p>
      <DrupalImage field_image = { image } />
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
              extension
              publicURL
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