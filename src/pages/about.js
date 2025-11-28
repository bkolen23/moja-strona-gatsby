import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="O mnie">
            <p>Witaj! Jestem twórcą tej strony zrobionej przy użyciu Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="O mnie" />

export default AboutPage