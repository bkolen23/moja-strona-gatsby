import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div classNameName="mx-auto max-w-6xl font-inter">

      <nav class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-tight">Moja strona Gatsby</Link>
        <div class="flex items-center">
            <Link to="/" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Strona główna</Link>
            <Link to="/about" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">O mnie</Link>
            <Link to="/blog" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Blog</Link>
            <Link to="/weatherapp" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Aplikacja pogodowa</Link>
        </div>
      </nav>

      <main className="">
        <h1 className="text-purple-700 text-2xl font-semibold my-6 text-center">{pageTitle}</h1>
        {children}
      </main>
    </div>

  )
}

export default Layout
