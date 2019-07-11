/**
 * Reorders a word by its letters alphabetically. Not case-sensitive.
 * @param word
 * @return Object
 */
export default word => {
  const chars = word.toLowerCase().split("")
  const sortedChars = chars.sort()
  return sortedChars.join("")
}
