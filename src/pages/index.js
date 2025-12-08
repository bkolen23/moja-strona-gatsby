import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Strona główna">
      <p>Robię tę stronę przy pomocy poradnika Gatsby</p>
      <StaticImage
        alt="Pies"
        src="../images/dog.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Strona główna" />

export default IndexPage