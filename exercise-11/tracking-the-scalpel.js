
async function locateScalpel (nest) {
  let source = nest.name
  let scalpelHolder = null

  while (source != scalpelHolder) {
    scalpelHolder = source
    source = await routeRequest(nest, source, 'storage', 'scalpel')
  }
  return scalpelHolder
}

function locateScalpel2 (nest) {
  function recurse (nest, source) {
    return Promise.resolve(routeRequest(nest, source, 'storage', 'scalpel'))
      .then(nextSource => nextSource == source ? source : recurse(nest, nextSource))
  }
  return recurse(nest, nest.name)
}

// locateScalpel(bigOak).then(console.log)
// locateScalpel2(bigOak).then(console.log)
