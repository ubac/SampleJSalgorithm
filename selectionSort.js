//selection sort 

function selectionSort(arr) {
    for(var i = 0; i<arr.length; i++){
        var lowest = i;
        for(var j = i+1; j<arr.length; j++){
           
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if (i!==lowest) {
            console.log(i,lowest);
            var temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] =  temp;
        }
                
        
                
    }
    return arr;
}
console.log(selectionSort([0,2,34,22,10,19,17]));