import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogPostPreview from "../components/blog/postPreview"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.published) // filter posts
    .map(edge => <BlogPostPreview key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div className="flex items-center flex-col text-darkblue">
        <h1 className="font-montserrat text-3xl xl:text-4xl pt-6 font-extrabold">Latest Blog Posts</h1>
        <div className="font-averia pt-4 text-xl xl:text-2xl">{Posts}</div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            published
            description
            title
            slug
          }
        }
      }
    }
  }
`