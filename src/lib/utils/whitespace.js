export default function resolve(text) {
  return text.replaceAll('·', '&nbsp;') // middle dot -> non-breaking space
}
