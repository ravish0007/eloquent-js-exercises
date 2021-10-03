
function every(array, test) {

    for( let element of array) if(!test(element)) return false;	

    return true;

}


function every(array, test) {

   if( array.length == 0) return true;

   return array.reduce( (a,b) => [a].some(test) && [b].some(test) )

}




console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
