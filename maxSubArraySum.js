//max SubArray sum
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let maxtemp = 0;
    if(arr.length < num) return null;
    for(let i = 0 ; i<num ; i++){
        maxSum += arr[i];
    }
    maxtemp = maxSum;
    for(var i = num; i < arr.length ; i++ ){
        maxtemp = maxtemp - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, maxtemp);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,4,5,8,7,9,3,3,3],2));