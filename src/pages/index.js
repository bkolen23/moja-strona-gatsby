import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Strona główna">
      <p>Robię tę stronę przy pomocy poradnika Gatsby</p>
    </Layout>
  )
}

export const Head = () => <title>Strona główna</title>

export default IndexPage