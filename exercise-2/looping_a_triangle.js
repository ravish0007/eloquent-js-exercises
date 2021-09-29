
let number_of_calls = 7

for (var i = 1; i <= number_of_calls ; i++) {
	for (var j = 0; j < i ; j++) {
		process.stdout.write('#')
	}
	console.log()
}
