import {readFile} from 'fs'
import loadList from './wordlist-loader'

jest.mock('fs')

test('loads a file from disk', async () => {
  const fileContents = [
    "bread", "Bader", "Beard", "Breda", "Debra", "ardeb", "barde", "bared", "beard", "debar"
  ].join("\r\n")
  readFile.mockImplementation((file, option, cb) => cb(null, fileContents))

  expect(await loadList('some-file')).toStrictEqual([
    "bread", "Bader", "Beard", "Breda", "Debra", "ardeb", "barde", "bared", "beard", "debar"
  ])
})
