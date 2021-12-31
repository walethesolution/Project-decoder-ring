// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = [
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

  function caesar(input, shift, encode = true) {
    // if shift is not present, 0, greater than 25, less than -25 return false
    if (!shift || shift > 25 || shift < -25 || shift === 0) return false;
    // create a variable called output
    let output = "";
    // converts shift value to opposite sign if input needs to be decoded
    if (!encode) shift *= -1;

    //loop through input
    for (let i = 0; i < input.length; i++) {
      //make all letters lowercase
      const inputLetter = input[i].toLowerCase();

      const inputLetterPosition = letters.indexOf(inputLetter);
      let newPosition = inputLetterPosition + shift;

      // inserts spaces and non-alphabetic symbols if included in input
      if (!letters.includes(inputLetter)) {
        output += inputLetter;
        // 'wraps' to end of letters if newPosition exceeds beginning of letters
      } else if (newPosition < 0) {
        newPosition = (newPosition % 26) + 26;
        output += letters[newPosition];
        // 'wraps' to front of letters if newPosition exceeds end of letters
      } else {
        newPosition = newPosition % 26;
        output += letters[newPosition];
      }
    }
    return output;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
