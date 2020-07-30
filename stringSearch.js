//nieve search STRING SEARCH 
function stringSearch(long, short){
    var count = 0;
    for(var i = 0; i<long.length; i++){
       
        for(var j = 0; j<short.length;j++){
            console.log(short[j],long[i+j]);
            if(short[j]!==long[i+j]){
                console.log('break!!')
                 break;   
            } 
            if(j===short.length-1){
                console.log('found one !!')
                    count++;
            }
        }
    } return count;

}
console.log(stringSearch('woerewowmw owo', 'wo'));
