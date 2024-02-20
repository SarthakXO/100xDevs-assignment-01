/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let palindrome = "";
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == " " ||
      str[i] == "," ||
      str[i] == "." ||
      str[i] == ":" ||
      str[i] == "'" ||
      str[i] == `"` ||
      str[i] == `?` ||
      str[i] == `!`
    ) {
      continue;
    }
    str2 = str2 + str[i];
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (
      str[i] == " " ||
      str[i] == "," ||
      str[i] == "." ||
      str[i] == ":" ||
      str[i] == "'" ||
      str[i] == `"` ||
      str[i] == `?` ||
      str[i] == `!`
    ) {
      continue;
    }
    palindrome = palindrome + str[i];
  }
  if (palindrome.toLowerCase() == str2.toLowerCase()) {
    return true;
  } else return false;
}

module.exports = isPalindrome;
