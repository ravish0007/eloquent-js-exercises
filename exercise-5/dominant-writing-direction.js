

let fs = require('fs');
let SCRIPTS = JSON.parse(fs.readFileSync('SCRIPTS.json', 'utf8'));

function characterScript(code) {
    for (let script of SCRIPTS) {
       if (script.ranges.some(([from, to]) => {
         return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}


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



console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
