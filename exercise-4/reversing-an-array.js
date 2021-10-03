function reverseArray(array) {

    let newArray = [];

    for (let element of array) newArray.unshift(element);

    return newArray;

}


function reverseArrayInPlace(array) {

   let stack = [] 
 
   for( let element of array) stack.push(element);

   console.log(stack);

   array.length = 0; // clear array

   while(stack.length) array.push(stack.pop()) ;


}




console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
