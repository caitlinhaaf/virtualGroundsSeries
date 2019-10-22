export const normalizeResourceList = (resourceList, linkKey) => {
    return resourceList.map(resource => (
        {
          name: resource.name,
          linkPath: resource[linkKey]
        }
    ))
    .sort((a, b) => {
      let keyA = a.name,
          keyB = b.name;
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
    })
}