import * as React from "react"
import Icon from "./icon"

const Header = ({ className }) => {
  return (
		<div className={`flex flex-row space-between ${className}`}>
			<Icon />
		</div>
  )
}

export default Header