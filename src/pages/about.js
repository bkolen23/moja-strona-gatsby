import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <h1>O mnie</h1>
            <Link to="/">Powrót na stronę główną</Link>
            <p>Witaj! Jestem twórcą tej strony zrobionej przy użyciu Gatsby.</p>
        </main>
    )
}

export const Head = () => <title>O mnie</title>

export default AboutPage