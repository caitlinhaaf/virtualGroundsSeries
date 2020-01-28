// Used to normalize the namespaces for different types of resources
// Params: arr (of objs), string (resource type: url or file)
// Returns: arr (of objs)
export const normalizeResourceList = (resourceList, linkKey) => {
  return resourceList.map(resource => (
      {
        name: resource.name,
        linkPath: resource[linkKey]
      }
  ))
}

export const sortResourcesAlphabetically = (arr) => (
  arr.sort((a, b) => {
    let keyA = a.name,
        keyB = b.name;
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
  })
)