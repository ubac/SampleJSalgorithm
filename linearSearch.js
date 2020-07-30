
//liner search 
function linerSearch(arr,val){
    if(arr.length === 0) return console.log("Please enter a value");

    for(var i = 0;i<arr.length; i++ ){
        if(arr[i]===val){
            return i;
        }
    } return -1;
}

console.log(linerSearch([], 7));
