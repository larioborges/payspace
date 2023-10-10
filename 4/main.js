function isPalindrome(value) {
  if (!value || value.trim() == "") {
    return false;
  }

  return value.split("").reduce(
    (isPalindrome, char, i, arr) =>
      // Compare the current character to the matching character on the other
      // end of the string and decide whether the string is still a palindrome
      isPalindrome && char === arr[arr.length - i - 1],
    // Initialise isPalindrome as true
    true
  );
}

function getAllPalindromes(input) {
  const palindromeArr = [];

  // Get an array of all palindromes by testing all substrings
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      let testStr = input.substring(i, j);
      if (isPalindrome(testStr)) {
        palindromeArr.push(testStr);
      }
    }
  }

  return palindromeArr;
}

// THIS IS THE FUNCTION TO USE
function longestPalindrome(input) {
  if (!input || input.trim() == "") {
    return "";
  }

  // Return the longest palindrome
  return getAllPalindromes(input).reduce(
    (longestPalindrome, current) =>
      current.length > longestPalindrome.length ? current : longestPalindrome,
    ""
  );
}
