class PGroup {
  constructor (bucket = []) {
    this.bucket = bucket
  }

  static get empty () {
    return new PGroup()
  }

  add (item) {
    if (this.bucket.indexOf(item) == -1) {
      return new PGroup(this.bucket.concat(item))
    }
  }

  delete (item) {
    return new PGroup(this.bucket.filter(x => x != item))
  }

  has (item) {
    return this.bucket.indexOf(item) != -1
  }
}

const a = PGroup.empty.add('a')
const ab = a.add('b')
const b = ab.delete('a')

console.log(b.has('b'))
// → true
console.log(a.has('b'))
// → false
console.log(b.has('a'))
// → false
