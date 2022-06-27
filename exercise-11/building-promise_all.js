function Promise_all (promises) {
  return new Promise((resolve, reject) => {
    const store = { count: promises.length, result: [] }

    if (store.count == 0) resolve([])

    promises.forEach((promise, i) => promise.then(value => {
      store.result[i] = value
      store.count--

      if (store.count == 0) resolve(store.result)
    }).catch(error => reject(error)))
  })
}
