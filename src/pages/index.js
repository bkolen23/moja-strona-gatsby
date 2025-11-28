import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

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

export const Head = () => <title>Strona główna</title>

export default IndexPage