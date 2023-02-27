import * as React from "react"
import Skills from "./skills"

const languages = ['javascript', 'python', 'c# (Unity)']
const tools = ['vue', 'node',  'express', 'django', 'nginx', 'unity', 'docker']
const test = ['jest', 'gherkin',  'cypress']
const general = ['web', 'animation',  'games']

const details = [languages, tools, test, general]


const About = ({ className }) => {
  return (
		<div className={`skills mb-5 mb-md-6 ${className}`}>

				<div className="details">
					{details.map((detail, idx) =>
							<Skills key={idx} listName={idx} list={detail}/>
					)}
				</div>

		</div>
  )
}

export default About