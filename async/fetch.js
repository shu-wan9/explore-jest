async function fetchData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    })
  })
}
module.exports = fetchData
