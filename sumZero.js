
// //sumzero
function sumZero(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j < arr.length; j++ ){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(sumZero([-7,-6,-5,0,1,5,8]));