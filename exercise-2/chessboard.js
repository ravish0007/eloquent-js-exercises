const grid_size = 64

let pattern_x = ''
let pattern_y = ''

for (let i = 0; i < grid_size; i++) {
  if (i % 2) {
    pattern_x += '#'
    pattern_y += ' '
  } else {
    pattern_x += ' '
    pattern_y += '#'
  }
}

for (let i = 0; i < grid_size; i += 2) {
  console.log(pattern_x)
  console.log(pattern_y)
}
