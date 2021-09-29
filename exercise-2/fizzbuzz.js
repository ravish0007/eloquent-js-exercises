for (let num = 1; num < 101; num++) {
	ans = ""
	
	if (num%3 == 0) {
		ans += "Fizz"
	}

	if (num%5 == 0) {
		ans += "Buzz"
	}

	if (ans) {
		console.log(ans)
	} 
	else {
		console.log(num)
	}	
}
