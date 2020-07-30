// //maxsum finding in an array
function maxSum(arr, num){
    if(arr.length<num){return null;}
    var max= -Infinity;
    for( var i = 0; i<arr.length - num + 1; i++){
        var temp = 0;
        for(var j = 0; j<num ; j++){
            temp += arr[i+j];
        }
        if(max < temp){
            max = temp;
        }
    }
    return max;
}

console.log(maxSum([2,6,9,2,1,8,5,6] ,3));