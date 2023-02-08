import * as React from "react"
import "../reset.css"
import "../styles.scss"

import { SEO } from "../components/seo"
import Header from "../components/header"
import About from "../components/about"
import AboutSkills from "../components/about-skills"
import AboutLinks from "../components/about-links"
import Footer from "../components/footer"
import Divider from '../components/divider';

const websiteName = "Kubedev"

const IndexPage = () => {
  return (
    <main>
      <section className="mt-1">

        <Header className="anim-fade-in anim-delay-0" />

        <div className="text-center content">
          <h1 className="mb-4 anim-fade-in anim-delay-1">{websiteName}</h1>

          <About className="anim-fade-in anim-delay-2" />

          <Divider className="anim-fade-in anim-delay-3">
            <strong>Skills </strong>
            <span>(full-stack)</span>
          </Divider>

          <AboutSkills className="anim-fade-in anim-delay-4" />

          <Divider className="anim-fade-in anim-delay-5">
            <strong>Links</strong>
          </Divider>

          <AboutLinks className="anim-fade-in anim-delay-6" />
        </div>

        <Footer />

      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)