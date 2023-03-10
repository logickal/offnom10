import { graphql } from "gatsby"
import React from "react"

const ArticleTemplate = ({ data }) => {
  const article = data.nodeArticle
  return (
    <div>
      <h1>{article.title}</h1>
      <p>Published on {article.created}</p>

      <div dangerouslySetInnerHTML={{ __html: article.body.processed }} />
    </div>
  )
}

export default ArticleTemplate

export const query = graphql`
    query($id: String!) {
        nodeArticle(id: {eq: $id}) {
            id
            title
            created(formatString: "MMMM DD, YYYY")
            body {
                processed
            }
        }
    }
`