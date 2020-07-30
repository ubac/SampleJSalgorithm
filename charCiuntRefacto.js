function charCount(str){
    var obj ={};
    for(var char of str){
       char = char.toLowerCase();
        if (alphaNumeric(char)){
            obj[char]=++obj[char] || 1;
        }
    }
return obj;
}
function alphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)){
          return false;
      }
      return true;
}
console.log(charCount("practice makes perfect!!"))