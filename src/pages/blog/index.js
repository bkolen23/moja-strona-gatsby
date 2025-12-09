import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Posty na Blogu">

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {data.allMdx.nodes.map(node => {
                    const image = getImage(node.frontmatter.hero_image)

                    return (
                        <article 
                            key={node.id} 
                            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-4">
                                {image && (
                                    <GatsbyImage
                                        image={image}
                                        alt={node.frontmatter.hero_image_alt || "Zdjęcie posta"}
                                        className="rounded-md"
                                    />
                                )}
                            </div>

                            <h2 className="text-purple-700 hover:text-purple-900 text-xl font-semibold mt-3">
                                <Link to={`/blog/${node.frontmatter.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>

                            <p className="text-gray-600 text-sm mt-1">
                                Opublikowano: {node.frontmatter.date}
                            </p>
                        </article>
                    )
                })}
            </div>
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
                    hero_image {
                        childImageSharp {
                            gatsbyImageData(width: 600)
                        }
                    }
                    hero_image_alt
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="Mój Blog" />

export default BlogPage
