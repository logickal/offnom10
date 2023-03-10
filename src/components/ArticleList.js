import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const ArticleList = () => {
  const data = useStaticQuery(graphql`
    query {
        allNodeArticle(sort: {created: DESC}) {
            nodes {
                id
                title
                created(formatString: "MMMM DD, YYYY")
                gatsbyPath(filePath: "/articles/{NodeArticle.title}")
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
            <h3><Link to={`${article.gatsbyPath}`}>
                {article.title}
                </Link>
                </h3>
            <p>Published on {article.created}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleList
