import hashWord from './hash-word'

test('should return an alphabetically ordered index key for a word', function() {
  expect(hashWord('aaa')).toBe('aaa')
  expect(hashWord('crepitus')).toBe('ceiprstu')
})

test('should produce a lower case indexed key', function() {
  expect(hashWord('Aaa')).toBe('aaa')
  expect(hashWord('crepiTus')).toBe('ceiprstu')
})
