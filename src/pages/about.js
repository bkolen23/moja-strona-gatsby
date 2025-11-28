import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="O mnie">
            <p>Witaj! Jestem twórcą tej strony zrobionej przy użyciu Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <title>O mnie</title>

export default AboutPage