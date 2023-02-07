import * as React from "react"
import Skills from "./skills"
import Divider from "./divider"

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
						<p>Happy to be building ideas for the web and mobile. Have a project, idea or problem you'd like to discuss?</p>
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

				</div>
			</section>
  )
}

export default About