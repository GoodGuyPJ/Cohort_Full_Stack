/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  if (cleanedStr.length !== reversedStr.length) {
    return false;
  }
  for (let i = 0; i < cleanedStr.length; i++) {
    if (cleanedStr[i] !== reversedStr[i]) {
      return false;
    }
  }
  // If the cleaned string and reversed string are equal, it's a palindrome
  // If the cleaned string and reversed string are equal, it's a palindrome
  // If the cleaned string and reversed string are equal, it's a palindrome
  return true;
}

module.exports = isPalindrome;
