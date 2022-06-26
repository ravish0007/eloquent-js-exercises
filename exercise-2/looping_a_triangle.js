
const number_of_calls = 7

for (let i = 1; i <= number_of_calls; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write('#')
  }
  console.log()
}
