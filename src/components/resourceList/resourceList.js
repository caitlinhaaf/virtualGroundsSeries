import React from "react"

// import componentStyles from "./nav.module.scss" 

const ResourceList = ({resources, ...props}) => {

  return(
    <ul style={{listStyle: "none", marginBottom: `0`}}>
        {
            resources.map((link, i) => (
                <li key={i}>
                    <a href={link.linkPath} target="_blank" rel="noopener noreferrer">
                    {link.name}
                    </a>
                </li>
            ))
        }
    </ul>
  )
}

export default ResourceList
