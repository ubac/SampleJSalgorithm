//Recursion
function firstRecurtion(num) {
    if(num <= 0){ 
        console.log("all done !!")
    return;
    } 
    console.log(num);
    num--;
    firstRecurtion(num);
}
console.log(firstRecurtion(10));


//nonrecursive way
function countDown(num){
for(var i = num; i > 0 ; i--){
    console.log(i);
}
console.log("all done !!")
}countDown(5)