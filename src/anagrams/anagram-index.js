import alphaSort from './hash-word'
import importWordList from '../util/wordlist-loader'

/**
 * Generate an anagram index key from a word
 * @param {string} word - word to get key for
 */
const getIndexKey = word => ({
  hash: alphaSort(word),
  original: word
})

/**
 * Adds an anagram index key => original word pair to the index
 *
 * @param {array[]} index - index to manipulate
 * @param {string} hash -
 * @param {string} originalWord
 */
const indexAnagram = (index, {hash, original: originalWord}) => {
  if (index[hash]) {
    index[hash].push(originalWord)
  } else {
    index[hash] = [originalWord]
  }
}

/**
 * Get an indexed list of words in a list
 *
 * @return {string[]}
 */
const getIndex = async (path) => {
  const index = {}

  const hashedWords = await importWordList(path)
  hashedWords
    .map(getIndexKey)
    .forEach(indexAnagram.bind(null, index))

  return index
}

export default getIndex

