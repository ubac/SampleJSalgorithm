//nonrecursive way
function totalSum(num) {
    var total = 0;
    for (var i = 0; i<=num; i++ ){
        total = total + i;
    }
    return total;
}
console.log(totalSum(3));
//recursive way
function totalSummation(num) {
    if (num ===1) return 1;
    return num + totalSummation (num - 1);
}
console.log(totalSummation(5));