import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ArticleList = () => {
  const data = useStaticQuery(graphql`
    query {
        allNodeArticle(sort: {created: DESC}) {
            nodes {
                id
                title
                created(formatString: "MMMM DD, YYYY")
            }
        }
    }
  `)

  const articles = data.allNodeArticle.nodes

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>Published on {article.created}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleList
