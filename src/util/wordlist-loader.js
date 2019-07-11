import {promisify} from 'util'
import {readFile} from 'fs'

const readFrom = promisify(readFile)

/**
 * Reads and tokenizes a word list
 *
 * @param {string} path - path to wordlist file
 * @return {string[]}
 */
export default async path => {
    const contents = await readFrom(path, {
        encoding: 'utf-8'
    })
    return contents.split("\r\n")
}
