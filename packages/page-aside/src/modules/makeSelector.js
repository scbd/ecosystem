import ChangeCase from 'change-case'

const makeSelector = ({ name }, postFixRaw) => {
  const cleanName  = ChangeCase.camelCase(name.replace(/[^A-Za-z0-9\s]/ig, ''))
  const postFix    = postFixRaw? `-${ChangeCase.upperCase(postFixRaw)}` : ''

  return `${cleanName}${postFix}`
}

export default makeSelector