import express from 'express'
import getIndex from './anagrams/anagram-index'
import getAnagrams from './anagrams/resolve-anagrams-handler'

const index = {}

const app = express()
  /**
   * Default route.
   */
  .get(/^\/([^\/]*)$/, (req, res) => {
    const requestedWords = req.params[0].split(',') || []

    res.send(
      getAnagrams(requestedWords, index)
    )

  })
  .listen(process.env.PORT || 8080, async () => {
    console.log("Generating anagram index...")

    const generatedIndex = await getIndex('./asset/wordlist.txt')
    Object.assign(index, generatedIndex)

    console.log('Index size:', Object.keys(index).length)
    console.log("Ready for requests")
  })
