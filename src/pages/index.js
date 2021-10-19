import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/gatsby-astronaut.png"


const meta = [{
  charset: 'utf-8'
}, {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
}, {
  name: 'keywords',
  content: 'example, blog, gatsby, cool'
}, {
  property: 'og:url',
  content: '{YOUR_WEBSITE_URL}'
}]


const IndexPage = () => (
  <Layout>
    <SEO meta={meta} />
    <div className="bg-primary flex items-center flex-col w-screen xl:flex-row text-secondary">
      <img src={Logo} className="w-4/5 xl:w-full h-full flex pt-16 xl:py-32 xl:px-24 max-w-screen-sm" title="logo" alt="logo"></img>
      <div className="xl:p-32">
        <p className="p-10 font-sans text-center text-xl xl:text-left xl:text-2xl">
          Welcome to my blog where I'm gonna write about some cool stuff!
        </p>
      </div>
    </div>
    <div className="bg-offwhite flex content-center flex-row text-secondary text-center xl:text-left">
      <div className="p-10 xl:py-12 xl:px-64">
        <h1 className="font-mono text-3xl xl:text-4xl p-4 font-extrabold">Cool Stuff - Explained.</h1>
        <p className="py-8 xl:p-4 font-sans text-xl xl:text-2xl">
          My <Link className="text-highlight underline" to="/blog/">blog</Link> is constantly expanding, providing you with the latest content!
        </p>
      </div>
    </div>
  </Layout >
)

export default IndexPage