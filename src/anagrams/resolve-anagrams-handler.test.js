import getAnagrams from './resolve-anagrams-handler'

const indexStub = {
  'ceiprstu': ["crepitus","cuprites","pictures","piecrust"],
  'abder': ["Bader","Beard","Breda","Debra","ardeb","barde","bared","beard","bread","debar"]
}

test('should handle single requested word', () => {
  expect(getAnagrams(['bread'], indexStub)).toStrictEqual({
    'bread': ["Bader","Beard","Breda","Debra","ardeb","barde","bared","beard","debar"]
  })
})

test('should handle multiple requested words', () => {
  expect(getAnagrams(['bread', 'crepitus'], indexStub)).toStrictEqual({
    'bread': ["Bader","Beard","Breda","Debra","ardeb","barde","bared","beard","debar"],
    'crepitus': ["cuprites","pictures","piecrust"]
  })
})

test('should produce empty result for words not present on wordlist', () => {
  expect(getAnagrams(['potometer'], indexStub)).toStrictEqual({
    'potometer': []
  })
})
