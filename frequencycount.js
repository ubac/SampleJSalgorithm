function freqCon(str, input) 
{
 var result = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == input) 
      {
        result += 1;
      }
  }
  return "Frequency of "+ input +" = "+ result+'\n'+ 'Final string = ' + str +  makeid(1);
}

function makeid(length) {
    var out          = '';
    var chara       = '@#$%&';
    var charactersLength = chara.length;
    for ( var i = 0; i < length; i++ ) {
       out += chara.charAt(Math.floor(Math.random() * charactersLength));
    }
    return out;
 }
 

console.log(freqCon('I Love Techmonastic Solution', 'n'));