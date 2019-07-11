import hashWord from './hash-word'

/**
 * Determine if requested word is present on the wordlist
 *
 * @param {string} word
 * @param {array[]} index
 * @return {boolean}
 */
const indexHasWord = (word, index) => {
  const hashedWord = hashWord(word)
  return (index[hashedWord] || []).includes(word)
}

/**
 * Array.Filter function to exclude requested word from the anagram list
 *
 * @param {string} original
 * @param {string} anagram
 * @return {string}
 */
const filterOriginalWord = (original, anagram) => anagram !== original

/**
 * Returns a hash of (valid) requested words and their anagrams from a wordlist
 *
 * @param {string[]} requestedWords
 * @param {array[]} index
 * @return {Object}
 */
export default (requestedWords, index) => {
  const response = {}

  requestedWords.map(word => {
    const hashedWord = hashWord(word)
    if (indexHasWord(word, index)) {
      response[word] = index[hashedWord]
        .filter(filterOriginalWord.bind(null, word))
    } else {
      response[word] = []
    }
  })
  return response
}
