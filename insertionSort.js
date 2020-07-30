//insertion sort 
function insertionSort(arr){
    for (var i=1; i < arr.length; i++){
        var currentValue = arr[i];
        for(var j=i-1; j>=0 && arr[j]>currentValue; j--){
            arr[j+1] = arr[j];
            console.log(arr);
            }
            arr[j+1]=currentValue;
            console.log(arr);
    }
    return arr;
}
console.log(insertionSort([2,1,9,76,20]));
