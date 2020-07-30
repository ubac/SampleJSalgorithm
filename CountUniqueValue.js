// //count Qnique val
function countQniqueValues(arr){
    if(arr.length===0){
        return 0;
    }
    let i=0;
    for(let j = 1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i + 1;
} 
console.log(countQniqueValues([1,1,3,3,3,2,2,2,4,4,8,5,5]));