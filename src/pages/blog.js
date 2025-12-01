import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) =>(
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Opublikowano: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
            }
            id
            excerpt
            }
        }
        }
`

export const Head = () => <Seo title="Mój Blog"/>

export default BlogPage