import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Posty na Blogu">
            {
                data.allMdx.nodes.map((node) =>(
                    <article key={node.id}>
                        <h2 className="text-purple-700 text-xl font-semibold mt-5">
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Opublikowano: {node.frontmatter.date}</p>
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
                slug
            }
            id
            excerpt
            }
        }
    }
`

export const Head = () => <Seo title="Mój Blog"/>

export default BlogPage