import React from "react"

import componentStyles from "./resourceList.module.scss" 

const ResourceList = ({resources, ...props}) => {

  return(
    <ul className={componentStyles.list}>
        {
            resources.map((link, i) => (
                <li key={i} className={componentStyles.listItem}>
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
