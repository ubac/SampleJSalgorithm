//RECURTION USING HELPER METHOD 
 function countOddValues(arr) {

     let result = [] ;

    function helperFunction(helperInput) {
            if(helperInput.length === 0){               
                return;
            }

            if(helperInput[0] % 2 !== 0){
                result.push(helperInput[0]);
            } 
            console.log(helperInput)   
             helperFunction(helperInput.slice(1));  
                   
     }helperFunction(arr);

     
     return result;
     
 }
    console.log(countOddValues([1,2,3,4,5,6]));
//in pure recursive way 

function recOddcollection(arr){

    let newarr = [];

    if(arr.length === 0) return newarr;

    if(arr[0]%2!==0) newarr.push(arr[0]);

    newarr = newarr.concat(recOddcollection(arr.slice(1)));
     
    return newarr;

}
console.log(recOddcollection([1,2,4,5,6,9]));