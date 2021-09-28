export default function trimText(text, nrOfWords) {
  const arr = text.split(' ')
  if (arr.length <= nrOfWords) {
    return text
  } else {
    const truncated = arr.slice(0, nrOfWords)
    return `${truncated.join(' ')}...`
  }
}