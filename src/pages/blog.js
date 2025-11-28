import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>Moje posty pojawią się tutaj</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Mój Blog"/>

export default BlogPage