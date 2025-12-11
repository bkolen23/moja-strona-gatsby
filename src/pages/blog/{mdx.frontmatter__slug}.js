import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ArticleLayout from '../../components/article-layout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <ArticleLayout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage
                className="m-4 rounded-lg"
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p className="mb-4">
                Autor zdjęcia:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link} className="text-purple-700 hover:text-purple-900">
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            {children}
        </ArticleLayout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost