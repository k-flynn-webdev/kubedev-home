import * as React from "react";
import "../reset.css";
import "../styles.scss";

import { Seo } from "../components/seo";
import Header from "../components/header";
import About from "../components/about";
import AboutSkills from "../components/about-skills";
import AboutLinks from "../components/about-links";
import Divider from "../components/divider";
import Tracking from "../components/tracking";

const websiteName = "Kubedev";

const IndexPage = () => {
  return (
    <main>
      <Tracking />
      <section className="px-2">
        <Header className="anim-fade-in anim-delay-0" />

        <div className="text-center content">
          <h1 className="mb-5 mb-md-6 anim-fade-in-quick">{websiteName}</h1>

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
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
