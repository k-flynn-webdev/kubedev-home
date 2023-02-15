import * as React from "react"

const About = ({ className }) => {
  return (
		<div className={`about mb-5 mb-md-6 ${className}`}>

			<div className="blurb">
				<span>Available for Web Development contract work. </span>
				<span>Based in central London UK. </span>
				<a href="mailto:hi@kubedev.co.uk">hi@kubedev.co.uk</a>
			</div>

		</div>
  )
}

export default About