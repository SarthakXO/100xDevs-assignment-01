/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let str2 = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str2[i] == "a") {
      count = count + 1;
    }
    if (str2[i] == "e") {
      count = count + 1;
    }
    if (str2[i] == "i") {
      count = count + 1;
    }
    if (str2[i] == "o") {
      count = count + 1;
    }
    if (str2[i] == "u") {
      count = count + 1;
    }
  }
  return count;
}

module.exports = countVowels;
