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



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
