function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('').toLowerCase()
  if (reversedWord === word){
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('cat'))

// compare the value of the first index and the last one,
//    second and second to last, and so on to see if they are equal.
//    if they are all equal, return true. else, return false

/* 
  iterate through the word going forward, and then backwards.
  compare the val;ue of the index going forward the value of the index
    going backwards
  if all the values are true, return true, else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
