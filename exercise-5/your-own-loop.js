
function loop(value, test_func, update_func, body_func) {
     while(true) {
        
         if (!test_func(value)) return;
         
         body_func(value);

         value = update_func(value);

    }
}



loop(3, n => n > 0, n => n - 1, console.log);
