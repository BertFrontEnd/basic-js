const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(type = true) {
    if (type) {
      this.type = 'direct';
    } else {
      this.type = 'reverse';
    }
  }

  encrypt(message, cipher) {
    if (!message || !cipher) {
      throw Error('No message or cipher');
    }

    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let string = message.toUpperCase();
    let code = cipher.toUpperCase();

    let k = 0;
    let result = '';

    for (let i = 0; i < string.length; i++) {
      if (symbols.indexOf(string[i]) >= 0) {
        symbols.indexOf(code[k]) + symbols.indexOf(string[i]) >= 26
          ? (result +=
              symbols[
                symbols.indexOf(code[k]) + symbols.indexOf(string[i]) - 26
              ])
          : (result +=
              symbols[symbols.indexOf(code[k]) + symbols.indexOf(string[i])]);

        k >= code.length - 1 ? (k = 0) : k++;
      } else {
        result += string[i];
      }
    }

    if (this.type === 'reverse') {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }

  decrypt(message, cipher) {
    if (!message || !cipher) {
      throw Error('No message or cipher');
    }

    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let string = message.toUpperCase();
    let code = cipher.toUpperCase();

    let k = 0;
    let result = '';

    for (let i = 0; i < string.length; i++) {
      if (symbols.indexOf(string[i]) >= 0) {
        symbols.indexOf(string[i]) - symbols.indexOf(code[k]) >= 0
          ? (result +=
              symbols[symbols.indexOf(string[i]) - symbols.indexOf(code[k])])
          : (result +=
              symbols[
                symbols.indexOf(string[i]) - symbols.indexOf(code[k]) + 26
              ]);

        k >= code.length - 1 ? (k = 0) : k++;
      } else {
        result += string[i];
      }
    }

    if (this.type === 'reverse') {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
}

module.exports = VigenereCipheringMachine;
