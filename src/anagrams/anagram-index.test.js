import getIndex from './anagram-index'
import importWordList from '../util/wordlist-loader'

jest.mock('../util/wordlist-loader.js')

test('should return an empty dictionary when no words present', async () => {
  importWordList.mockResolvedValue([])

  const result = await getIndex('some-file')
  expect(importWordList)
  expect(result).toStrictEqual({})

})

test('should return an indexed dictionary when words present', async () => {
  importWordList.mockResolvedValue(['aba', 'baa', 'car'])

  const result = await getIndex('some-file')
  expect(result).toStrictEqual({
    'aab': ['aba', 'baa'],
    'acr': ['car']
  })
})

test('should preserve case for anagrams', async () => {
  importWordList.mockResolvedValue(['aba', 'Baa', 'baa', 'car'])

  const result = await getIndex('some-file')
  expect(result).toStrictEqual({
    'aab': ['aba', 'Baa', 'baa'],
    'acr': ['car']
  })
})
