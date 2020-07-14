const path = require('path')
test('', () => {
  const params = ['a', 'b', 'c']
  expect(path.join(...params)).toEqual(params.join(path.sep))
})
test('', () => {
  const params = ['a', 'b', 'c']
  expect(path.resolve(...params)).toEqual(
    path.join(__dirname, '../', params.join(path.sep))
  )
})
test('', () => {
  console.log(path.resolve('a', __dirname))
  console.log(path.resolve('a', __dirname, 'b'))
  console.log(path.resolve('a', 'b', __dirname, 'c', 'd'))
})
