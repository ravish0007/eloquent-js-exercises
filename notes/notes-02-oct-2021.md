# 02-oct-2021

### 1 - Exercise-3, Minimum

- Minimum

```javascript

let min = (a, b) => a < b ? a : b ;

```

v/s


```javascript
//author's code

function min(a, b) {
  if (a < b) return a;
  else return b;
}

```

<hr>

### 2 - Exercise-3, Recursion

- Recursion 

```javascript
function isEven(num) {

    if (num < 0) num *= -1;

    if (num == 0) return true;
    else if (num == 1) return false;
    else return isEven(num - 2);
}

```
v/s

```javascript
//author's code

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

```

<hr>

### 3 - Exercise-3, Beans-Counting

- Beans-Counting

```javascript
function countBs(str) {
    let count = 0;
    for(let char of str) {

        if (char == "B")  count++;

    }

    return count;
}


function countChar(str, key) {
    let count = 0;
    for(let char of str) {

        if (char == key)  count++;

    }

    return count;
}

```
v/s

```javascript
//author's code

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

```
