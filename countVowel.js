function countVowel (str){

  if(typeof str !== 'string'){
    return -1
  }

  var counter = 0;
  var vowels = ['a','e','i','o','u']

  str.split('').forEach(function(el){
    if(vowels.includes(el)){
      counter+=1;
    }
  })
  return counter;
}



module.exports = countVowel;
