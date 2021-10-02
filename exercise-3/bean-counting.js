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







console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"));
