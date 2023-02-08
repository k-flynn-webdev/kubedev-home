import * as React from "react"
import "../reset.css"
import "../styles.scss"

import Header from "../components/header"
import About from "../components/about"
import Footer from "../components/footer"

const websiteName = "Kubedev"

const IndexPage = () => {
  return (
    <main>
      <section className="mt-1">

        <Header />

        <div className="text-center">
          <h1 className="mb-4">{websiteName}</h1>
          <About />
        </div>

        <Footer />

      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>{websiteName}</title>
