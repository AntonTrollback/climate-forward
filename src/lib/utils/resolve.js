/** @typedef {function(import('@prismicio/types').PrismicDocument} PrismicDocument */

/**
 * @param {PrismicDocument} doc
 * @param {string} [prefix]
 * @returns {string}
 */
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
    case 'Web':
    case 'Media':
      return doc.url?.replace(/^https?:\/\/#/, '#')
    case 'event':
      return `${prefix || '/events'}/${doc.uid}`
    default:
      return `${prefix}/${doc.uid}`
  }
}
