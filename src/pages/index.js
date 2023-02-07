import * as React from "react"
import "../reset.css"
import "../styles.scss"

import Header from "../components/header"
import About from "../components/about"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>

      <Header />

      <div className="content text-center">
        <h1 className="mb-4">Kubedev</h1>
        <About />
      </div>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Kubedev</title>
