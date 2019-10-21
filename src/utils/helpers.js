export const normalizeResourceList = (resourceList, linkKey) => {
    return resourceList.map(resource => (
        {
          name: resource.name,
          linkPath: resource[linkKey]
        }
    ))
}