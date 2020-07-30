//merge sort
function merge(arr1, arr2){
    var result = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }        
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}
function mergeSort(arr){
    if(arr.length<=1) return arr;
    var mid = Math.floor(arr.length/2);
    let right = mergeSort(arr.slice(0,mid));
    let left = mergeSort(arr.slice(mid));

    return merge(left, right);
}
 console.log(mergeSort([100,20,5,6,21,85,58]));
