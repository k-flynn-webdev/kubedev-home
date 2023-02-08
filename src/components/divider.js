import * as React from "react"

const Divider = ({ children, className}) => {
  return (
		<div className={`divider ${className}`}>
			<hr />
			<div className="divider-content">
				{children}
			</div>
			<hr />
		</div>
  )
}

export default Divider