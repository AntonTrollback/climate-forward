
/**
 * @param {any} page
 * @returns {function(import('@prismicio/types').PrismicDocument): string}
 */
export default function resolve (page, doc) {
  return doc
    ? `${page.url.pathname.replace(/\/$/, '')}/${doc.uid}`
    : (doc) => resolve(page, doc)
}
