const CLOUDNAME = 'dykmd8idd'

export default function src(transforms, src) {
  src = src
    .replace('auto=compress,format&', '')
    .replace('?auto=compress,format', '')
    .replace('hqdefault.jpg', 'maxresdefault.jpg')
  return `https://res.cloudinary.com/${CLOUDNAME}/image/fetch/${transforms}/${src}`
}
