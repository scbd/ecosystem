function getElmByIdentifier(siteNavigationElement, { name, value }){
  const foundMap = siteNavigationElement.map(
    (elm) => {
      const { identifier } = elm

      if(!identifier) return

      const hasMatch = (identifier.filter((keyValuePair) => (keyValuePair.name === name && keyValuePair.value === value))).length
        
      if(hasMatch) return elm
    })

  const found = [ ... new Set(foundMap.filter(i => i)) ]

  return found.length? found[0] : {}
}


function get({ siteNavigationElement, identifierName }, value){
  return getElmByIdentifier(siteNavigationElement, { name: identifierName, value })
}

// function getElm( siteNavigationElement, { name, value }){
//   return siteNavigationElement.filter((elm)=> elm[name]===value)[0] || {}
// }
