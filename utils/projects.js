function getUrl(key, locale) {
  const tmp = key.split('-')
  const rest = tmp.slice(3)
  let href = `${rest.join('-')}`
  href = `/projects/${href}`
  if (locale === 'es') {
    href = `/es${href}`
  }
  return href
}

function isRelated(origTags, tags) {
  origTags = origTags.split(',')
  origTags = origTags.map(o => o.toLowerCase().replace(/ /g, ''))
  tags = tags.split(',')
  tags = tags.map(o => o.toLowerCase().replace(/ /g, ''))
  const res = origTags.filter(value => tags.indexOf(value) !== -1)
  if (res.length > 0) {
    return true
  } else {
    return false
  }
}
export { getUrl, isRelated }
