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


console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
