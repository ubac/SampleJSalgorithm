//nonrecursive way factorial
function factorial(num) {
    var total = 1;
    //for (var i = num; i>0; i--)
    for (var i = 1; i<=num; i++ ){
        total = total * i; 
    } 
    return total ;
} 
console.log(factorial(5));

//recursive way
function recFactorial(num){
    if(num === 0) return 1;
    return num * recFactorial(num - 1);
} console.log(recFactorial(4));
