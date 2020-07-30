// Refactor frequencyCounter:---
function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // how many times the values is going to arrive
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    
     for(let key in frequencyCounter1){
        // checking is the 2nd Counter is squre or not 
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        // checking the (2nd Counter)2 is equels to 1st or not
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
       
        
     }
     console.log(frequencyCounter1);
        console.log(frequencyCounter2);
          return true;
}

console.log(same1([1,2,3,2],[1,4,4,9]));
