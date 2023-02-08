import * as React from "react"

const About = ({ className }) => {
  return (
		<div className={`about ${className}`}>

			<div className="blurb mb-4">
				<p>Available for contract work on Web Development projects</p>
				<a href="mailto:hi@kubedev.co.uk">hi@kubedev.co.uk</a>
			</div>

		</div>
  )
}

export default About