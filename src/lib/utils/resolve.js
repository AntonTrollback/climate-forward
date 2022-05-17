export default function resolve(doc, prefix) {
  if (Array.isArray(prefix)) {
    prefix = prefix.reduce(function (prefix, next) {
      if (typeof next === 'string') return prefix + next
      return resolve(next, prefix)
    }, '')
  } else if (prefix == null) {
    prefix = ''
  } else if (typeof prefix !== 'string') {
    prefix = resolve(prefix)
  }

  switch (doc.type) {
    case 'event':
      return `${prefix || '/' + (doc.data.parent?.uid || 'events')}/${doc.uid}`
    case 'Web':
    case 'Media':
      return doc.url?.replace(/^https?:\/\/#/, '#')
    default:
      switch (doc.link_type) {
        case 'Web':
        case 'Media':
          return doc.url?.replace(/^https?:\/\/#/, '#')
        default:
          return `${prefix}/${doc.uid}`.replace('homepage', '')
      }
  }
}
