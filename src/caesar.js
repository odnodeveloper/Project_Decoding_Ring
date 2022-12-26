// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
       const str = input.toLowerCase();
    input = input.toLowerCase();
    let output = '';
    // If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    if (shift == null || shift == 0 || shift > 25 || shift < -25) return false;
    // if decode
    if (!encode) shift = shift * -1;
    for (let i = 0; i < str.length; i++) {
      const letter = input[i];

      if (alphabet.indexOf(letter) === -1) {
        output += letter;
        continue;
      }

      let index = alphabet.indexOf(letter) + (shift % 26);
      if (index > 25) index -= 26;
      if (index < 0) index += 26;

      output += alphabet[index];
      // console.log(output);
    }
    return output;
  }

  console.log(caesar('Zebra Magazine', 3))
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
