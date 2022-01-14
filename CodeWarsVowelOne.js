// Task - https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

function vowelOne(s){
  const vowels = ['a', 'A', 'e', 'E', 'i','I','o','O','u','U'];

  let result = '';

  console.log("Y".charCodeAt(0));

  for(let i = 0; i <= s.length - 1; i++){
    if(vowels.includes(s[i])){
      result = result + '1';
    }else{
      result = result + "0";
    }
  }

  return result;
}

// console.log(vowelOne( "vowelOne" ));//"01010101"
// console.log(vowelOne( "123, arou" )); ///"000001011"
console.log(vowelOne("ITuEooeE6EE5Oiegr9IYtuuE7)cE-"));
/////////////////////////10111111011011100010011100010 expected
/////////////////////////10111111011011100011011100010