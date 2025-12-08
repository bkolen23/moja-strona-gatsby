import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"

const Layout = ({ pageTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false)

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
    <div className="font-inter min-h-screen flex flex-col">

      <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">

        <Link to="/" className="flex items-center">
          <StaticImage className="w-10 mr-2" src="../images/icon.png" alt="Moja strona Gatsby" />
          <span className="text-2xl font-semibold">Moja strona Gatsby</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-white focus:outline-none"
        >
          {isOpen ? (
            <span className="text-3xl">&#10005;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-sm px-4 py-2 rounded-full hover:bg-gray-700">Strona główna</Link>
          <Link to="/about" className="text-sm px-4 py-2 rounded-full hover:bg-gray-700">O mnie</Link>
          <Link to="/blog" className="text-sm px-4 py-2 rounded-full hover:bg-gray-700">Blog</Link>
          <Link to="/weatherapp" className="text-sm px-4 py-2 rounded-full hover:bg-gray-700">Aplikacja pogodowa</Link>
        </div>
      </nav>

      <div
        className={`
          md:hidden w-full bg-gray-900 overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="flex text-gray-300 flex-col">
          <Link to="/" className="px-4 py-2 hover:bg-gray-800">Strona główna</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-gray-800">O mnie</Link>
          <Link to="/blog" className="px-4 py-2 hover:bg-gray-800">Blog</Link>
          <Link to="/weatherapp" className="px-4 py-2 hover:bg-gray-800">Aplikacja pogodowa</Link>
        </div>
      </div>

      <main className="mx-auto max-w-6xl flex-grow">
        <h1 className="text-purple-700 text-2xl font-semibold my-8 text-center">{pageTitle}</h1>
        {children}
      </main>

      <footer className="flex flex-col space-y-10 justify-center mt-10 bg-gray-700 mx-auto py-7 w-full">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-300 font-medium">
          <Link to="/" className="hover:text-gray-400">Strona główna</Link>
          <Link to="/about" className="hover:text-gray-400">O mnie</Link>
          <Link to="/blog" className="hover:text-gray-400">Blog</Link>
          <Link to="/weatherapp" className="hover:text-gray-400">Aplikacja pogodowa</Link>
        </nav>

        <p className="text-center text-gray-200 font-medium">&copy;2025 Moja strona Gatsby</p>
      </footer>

    </div>
  )
}

export default Layout
