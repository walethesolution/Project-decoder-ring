// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // create a standard alphabet array
  const standardArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function substitution(input, alphabet, encode = true) {
    //should return false if there's no alphabet
    // should return false if alphabet is not 26 characters
    if (!alphabet || alphabet.length !== 26) return false;
    // create new alphabets
    let newSet = new Set(alphabet);
    // return false if new alphabet is not 26 different characters
    if ([...newSet].length !== 26) return false;
    // make every input alphabet lowercase
    const inputAlphabet = input.toLowerCase();
    // create an output variable to
    let output = [];
    // for encoded message
    if (encode) {
      // loop through each index
      for (let i = 0; i < standardArray.length; i++) {
        output[standardArray[i]] = alphabet[i];
      }
      // for decoded message
    } else {
      for (let i = 0; i < standardArray.length; i++) {
        output[alphabet[i]] = standardArray[i];
      }
    }
    let result = inputAlphabet.split("").map((letter) => {
      // maintain spaces in the result
      if (letter === " ") return " ";
      return output[letter];
    });
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
