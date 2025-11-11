export const getAssetUrl = (src) => {
  if (!src) return src
  if (/^https?:\/\//i.test(src)) return src
  if (src.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${src.slice(1)}`
  }
  return `${import.meta.env.BASE_URL}${src}`
}


