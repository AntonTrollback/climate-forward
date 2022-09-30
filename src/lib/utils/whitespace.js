export default function resolve(text) {
  return text
    .replaceAll('·', '&nbsp;') // middle dot -> non-breaking space
    .replaceAll('Part 1', 'Part&nbsp;1')
    .replaceAll('Part 2', 'Part&nbsp;2')
    .replaceAll('Part 3', 'Part&nbsp;3')
}
