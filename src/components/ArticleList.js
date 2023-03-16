import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import DrupalImage from "./DrupalImage"

const ArticleList = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeArticle(sort: {created: DESC}) {
        nodes {
          id
          title
          created(formatString: "MMMM DD, YYYY")
          gatsbyPath(filePath: "/articles/{NodeArticle.title}")
          relationships {
            field_image {
              localFile {
                publicURL
                extension
                childImageSharp {
                  gatsbyImageData(
                    height: 100, 
                    width: 100, 
                    placeholder: BLURRED, 
                    formats: [AUTO, WEBP, AVIF]
                    )
                }
              }
            }
          }
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
              <DrupalImage field_image={article.relationships.field_image} width="100" height="100" />
            <p>Published on {article.created}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleList
