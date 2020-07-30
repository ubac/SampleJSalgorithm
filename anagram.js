// // Anagram

function anagram(str1, str2){
    if(str1.length !==str2.length ){
        return false;
    }
    let freqComparison1 = {};
    let freqComparison2 = {};
    for(let val of str1){
        freqComparison1[val] = (freqComparison1[val] || 0) + 1; 
    }
    for(let val of str2){
        freqComparison2[val] = (freqComparison2[val] || 0) + 1;
    }
    for(let key in freqComparison1){
        if(freqComparison2[key] !== freqComparison1[key] ){
            return false;
        }
    }

    console.log(freqComparison1);
    console.log(freqComparison2);
    return true;
}
console.log(anagram('cinema','iceman'))