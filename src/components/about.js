import * as React from "react"
import Skills from "./skills"
import Divider from "./divider"
import AboutDetail from "./aboutDetail"

const languages = ['javascript', 'python', 'c# (Unity)']
const tools = ['vue', 'node',  'express', 'django', 'nginx', 'unity', 'docker']
const test = ['jest', 'gherkin',  'cypress']
const general = ['web', 'animation',  'games']

const details = [languages, tools, test, general]


const About = () => {
  return (
  		<section>
				<div className="about">

					<div className="blurb mb-4">
						<p>Currently available for contract work on Web Development projects?</p>
						<a href="mailto:hi@kubedev.co.uk">hi@kubedev.co.uk</a>
					</div>

					<div className="skills">
						<Divider className="mb-1">
							<strong>Skills </strong>
							<span>(full-stack)</span>
						</Divider>

						<div className="details">
							{details.map((detail, idx) =>
									<Skills key={idx} listName={idx} list={detail}/>
							)}
						</div>
					</div>

					<AboutDetail />

				</div>
			</section>
  )
}

export default About