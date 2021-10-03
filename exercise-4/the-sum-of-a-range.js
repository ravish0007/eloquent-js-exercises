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


console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

