import * as React from "react"

export const Capitalize = (input) => {
	return input.charAt(0).toUpperCase() + input.slice(1);
}

export const CapitalizeList = (list) => {
	return list.map((item) => Capitalize(item))
}

const Skills = ({listName, list}) => {
  return (
		<div className={listName}>
			<span>{CapitalizeList(list).join(' . ')}</span>
		</div>
  )
}

export default Skills