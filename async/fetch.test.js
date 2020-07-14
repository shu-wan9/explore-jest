const fetchData = require('./promise')
test('', async () => {
  const data = await fetchData(2)
  expect(data).toEqual(2)
})
