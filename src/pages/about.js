import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="O mnie" headerContent="Uczę się Gatsby, a ta strona dokumentuje moje pierwsze kroki w tym środowisku.">
            <p>Witaj! Jestem twórcą tej strony zrobionej przy użyciu Gatsby.</p>

            <div className="mx-auto max-w-3xl p-6 rounded-xl shadow-md m-8 bg-gray-50 dark:bg-gray-800">
                <h2 className="text-purple-700 dark:text-purple-400 text-xl font-semibold mb-3 w-full">Parę słów o mnie</h2>
                <div className="flex max-md:block">
                    <div>
                        <p className="text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis deleniti consequuntur sunt? Aspernatur quo debitis perspiciatis explicabo placeat sapiente perferendis excepturi dicta et incidunt. Ullam molestias fuga qui optio amet beatae, earum asperiores minima corporis architecto! Ducimus voluptatibus fugit dolorem nulla nihil maiores minus id facilis harum! Molestiae, animi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, excepturi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, in!
                        </p>
                    </div>
                    <div className="ml-5 max-md:ml-auto max-md:mt-5">
                        <StaticImage src='../images/user.png' alt="User" className="rounded-xl"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="O mnie" />

export default AboutPage