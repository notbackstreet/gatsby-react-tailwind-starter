import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const meta = [{
        charset: 'utf-8'
    }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
    }, {
        name: 'keywords',
        content: frontmatter.keywords || ''
    }, {
        property: 'og:url',
        content: `https://www.exampleblogwithcoolcontent.com${frontmatter.slug}`
    }]
    return (
        <Layout>
            <SEO meta={meta} description={frontmatter.description} title={frontmatter.title} />
            <div className="bg-offwhite flex content-center flex-row text-secondary text-left p-4 xl:pt-16 xl:pb-4 xl:px-24">
                <div className="font-mono text-3xl xl:text-4xl p-2 font-extrabold">
                    <h1 className="font-mono text-3xl xl:text-4xl p-4 font-extrabold">{frontmatter.title}</h1>
                    <h2 className="font-mono text-xl xl:text-2xl p-4 font-extrabold">{frontmatter.date}</h2>
                    <div
                        className="py-8 xl:p-4 font-sans text-xl xl:text-2xl"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`