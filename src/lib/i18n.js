import { writable, get } from 'svelte/store'

const defaults = {
  en: {

  }
}

export const language = writable('en')

/**
 * Create i18n text utility with given translation object
 * @param {object} translations
 * @returns {function(string[], ...any): any[]}
 */
export function gettext (translations = defaults) {
  const lang = get(language)
  const defaultTranslations = defaults[lang]
  translations = translations[lang] || defaultTranslations

  return function text (strings, ...values) {
    const key = strings.join('%s')
    let value = translations[key] || defaultTranslations[key] || key

    const numbers = values.filter((value) => typeof value === 'number')
    if (numbers.length) {
      const pluralization = numbers
        .map((value) => value === 1 ? 'one' : 'other')
        .join(':')
      value = value?.[pluralization] || key
      console.assert(value !== key, `Missing pluralization for "${key}"`)
    } else if (lang !== 'en') {
      console.assert(value !== key, `Missing translation for "${key}"`)
    }

    return strings.reduce(function (acc, string, index) {
      acc.push(string)
      if (index < values.length) acc.push(values[index])
      return acc
    }, [])
  }
}
