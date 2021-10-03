# 03-oct-2021

### 1 - Exercise-4, The Sum of Range

- the sum of range

```javascript

function range(a, b, step) {

    let ans = [];

    if (!step) {   
        if (b > a) step = 1;
        else step = -1;  
    }
    
    function check(i) {
        if (b > a) {
	    if (i<=b) return true;
	    else return false;
	}

        else {      
             if (i>=b) return true;
             else return false;
        }
    }

    for (let i = a; check(i) ; i += step ) {
        ans.push(i);
    }
    
	return ans;                                                                        
}

function sum(array) {
   ans = 0 ;
   for (let num of array) ans += num ;
   return ans;
}
```

v/s

```javascript

//author's code

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

```

<hr>

### 2 - Exercise-4, Reversing an Array

- reversing an array

```javascript

function reverseArray(array) {

	let newArray = [];
    for (let element of array) newArray.unshift(element);
    return newArray;
}

function reverseArrayInPlace(array) {

   let stack = [] 
   for( let element of array) stack.push(element);

   array.length = 0; // clear array

   while(stack.length) array.push(stack.pop()) ;
}

```

v/s

```javascript
//author's code

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

```

<hr>

### 3 - Exercise-4, A List

- a list

```javascript

function arrayToList(array) {

    let list = {};

    array.reverse();
    for ( let element of array) { 

	    if (Object.keys(list).length == 0) list = { value:element, rest: null};

	    else list = { value: element, rest: list };
    }
    array.reverse();
    return list;
}

function listToArray(list) {

    let array = [];
    let temp = list;

    while ( temp.rest != null ) {
		array.push(temp.value);
		temp = temp.rest;
    }
	array.push(temp.value);
    return array;
}

function prepend(value, list) {
    return { value: value, rest: list };
}

function nth(list, n) {
   if (list == null) return undefined;
   else if (n == 0) return list.value;
   else return nth(list.rest, n-1);
}

```

v/s

```javascript
//author's code

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

```

<hr>

### 4 - Exercise-4, Deep Comparision

- deep comparision

```javascript
function deepEqual(x, y) {

    if( (typeof x == "object" && x != null) && ( typeof y == "object" && y != null ))  {

        let keysX = Object.keys(x);
        let keysY = Object.keys(y);

        if( keysX.length != keysY.length) return false;

        for( let i=0; i < keysX.length; i++ ) {

           if (keysX[i] === keysY[i]) return deepEqual(x[keysX[i]], y[keysX[i]]);
           else return false;
      
     	}
    }    
    else return x === y;
}
```

v/s

```javascript
//author's code

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

```

<hr>

### 5 - Exercise-5, Flattening

- flattening

```javascript

let result = arrays.reduce( (a, b) => a.concat(b));

```
v/s

```javascript
//author's code

console.log(arrays.reduce((flat, current) => flat.concat(current), []));

```

<hr>

### 6 - Exercise-5, Your Own Loop

- your own loop

```javascript

function loop(value, test_func, update_func, body_func) {
    while(true) {
        
         if (!test_func(value)) return;
         
         body_func(value);

         value = update_func(value);

    }
}

```

v/s

```javascript
//author's code

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

```

<hr>

### 7 - Exercise-5, Stuff

- everything

```javascript
function every(array, test) {

    for( let element of array) if(!test(element)) return false;	
    return true;

}

function every2(array, test) {

   if( array.length == 0) return true;
   return array.reduce( (a,b) => [a].some(test) && [b].some(test) )

}
```

v/s

```javascript
//author's code

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

```

<hr>

### 8 - Exercise-5, Dominant Writing Direction

- dominant writing direction

```javascript

function dominantDirection(text) {

    let scripts = [];

    for (let char of text) {
        scripts.push(characterScript(char.codePointAt(0)));
    }

    let count = {};
    
    function increment(dir) {
        if(dir in count) count[dir] += 1;
        else count[dir] = 1;
    }

    scripts.filter(x => x != null).map( x => increment(x.direction) )

    let max = -Infinity;
    let dir = null;

    for( let item of Object.keys(count)) {
          if (count[item] > max) {
                max = count[item];
                dir = item;       
        }
    }
    return dir;
}

```

v/s

```javascript
//author's code

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

```

<hr>

### 9 - Exercise-6, A Vector Type

- a vector type

```javascript

class Vec {

   constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    plus(another) {
        return new Vec(this.x + another.x, this.y + another.y );  
    }

    minus(another) { 
    	return new Vec(this.x - another.x, this.y - another.y );  
    }

    get length() {
       return Math.sqrt( this.x*this.x + this.y*this.y);
    }    
}

```

v/s

```javascript
//author's code

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

```

<hr>

### 10 - Exercise-6, Groups

- groups

```javascript

class Group {

    constructor() {
      this.bucket = [];
    }

    add(item) {
        if (this.bucket.indexOf(item) == -1)  this.bucket.push(item);
    }

    delete(item) {
        this.bucket = this.bucket.filter(x => x != item);       
    }

    has(item) {
        return this.bucket.indexOf(item) != -1;
    }

   static from(iterable) {
      let group = new Group();
      for( let item of iterable) group.add(item);
      return group;
   }
}

```

v/s

```javascript
//author's code

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

```

<hr>

### 11 - Exercise-6, Iterable Groups

- iterable groups

```javascript

class Group {

    constructor() {
       this.bucket = [];
    }

    add(item) {
        if (this.bucket.indexOf(item) == -1)  this.bucket.push(item);
    }

    delete(item) {
        this.bucket = this.bucket.filter(x => x != item);       
    }

    has(item) {
        return this.bucket.indexOf(item) != -1;
    }

    static from(iterable) {
       let group = new Group();
       for( let item of iterable) group.add(item);
       return group;
    }

   [Symbol.iterator]() {
        let index = -1;
        let data  = this.bucket;

        return {
            next: () => ({ value: data[++index], done: !(index < data.length) })
        };
    }
}

```

v/s

```javascript
//author's code

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let result = {value: this.group.members[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

```

<hr>

### 12 - Exercise-6, Borrowing a Method

- borrowing a method

```javascript

const hasOwnProperty = Symbol("hasOwnProperty");

Object.prototype[hasOwnProperty] = function(x) {

  return Object.keys(this).indexOf(x) != -1;
};

console.log(map[hasOwnProperty]("one"));

```

v/s

```javascript
//author's code

console.log(Object.prototype.hasOwnProperty.call(map, "one"));

```