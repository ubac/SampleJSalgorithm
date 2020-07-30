function alphabetPosition(text){
    const arr = [] ;
    const textLower = text.toLowerCase();
    for(var i = 0; i<textLower.length; i++){
        let code = textLower.charCodeAt(i);
        if (code>=97 && code<=122){
            arr.push(code -96);
        }
    }
    return arr.join('');
}

console.log(alphabetPosition("hey"));

function replaceStr(str,search, replacement){

    let result = str.split(search).join(replacement);

return result + alphabetPosition(replacement) ;
}

console.log(replaceStr("hellow techmonastic ", "hellow", " hey"));
