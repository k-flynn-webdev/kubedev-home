import * as React from "react"

const LinkWithIcon = ({ href, name, children}) => {
  return (
			<a href={href}
				 className="link mb-1"
				 aria-label={name}
				 title={name}
				 target="_blank"
				 rel="noreferrer">
					<span className="link-name">{name}</span>
					<div className="link-icon">
						<svg width="100%"
								 height="100%"
								 viewBox="0 0 116 116"
						>
							{children}
						</svg>
					</div>
			</a>
  )
}

export default LinkWithIcon