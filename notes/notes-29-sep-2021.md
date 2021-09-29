# 29-sep-2021

### 1 - Exercise-2, Looping A Triangle

- Looping A Triangle
  - Used two for loops
  - Learnt about *process.stdout.write*, a workaround newline


```javascript

let number_of_calls = 7;

for (var i = 1; i <= number_of_calls ; i++) {
        for (var j = 0; j < i ; j++) {
                process.stdout.write('#');
        }
        console.log();
}

```
v/s

```javascript
//author's code

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

```

<hr>

### 2 - Exercise-2, FizzBuzz

- FizzBuzz
  - Knew about this elegant code from [Tom Scott's video](https://www.youtube.com/watch?v=QPZ0pIK_wsc)
  - Picked up, "||" is better while outputting instead of if else

```javascript
for (let num = 1; num < 101; num++) {
	ans = "";
	
	if (num%3 == 0) {
		ans += "Fizz";
	}

	if (num%5 == 0) {
		ans += "Buzz";
	}

	if (ans) {
		console.log(ans);
	} 
	else {
		console.log(num);
	}	
}
```
v/s

```javascript
//author's code

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

```

<hr>

### 3 - Exercise-2, ChessBoard

- ChessBoard
  - populating two patterns and printing them one after the other

```javascript
let grid_size = 64;

let pattern_x = "";
let pattern_y = "";


for ( let i = 0; i < grid_size; i++) {
	if (i%2)  {
		pattern_x += "#" ;
		pattern_y += " ";
	}
	else {
		pattern_x += " ";
		pattern_y += "#";
	}
}

for ( let i = 0; i < grid_size; i += 2) {
	console.log(pattern_x);
	console.log(pattern_y);
}

```
v/s

```javascript
//author's code

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
}

```
