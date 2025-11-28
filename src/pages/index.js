import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>Witaj na mojej stronie Gatsby!</h1>
      <Link to="/about">O mnie</Link>
      <p>Robię tę stronę przy pomocy poradnika Gatsby</p>
    </main>
  )
}

export const Head = () => <title>Strona główna</title>

export default IndexPage