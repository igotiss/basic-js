const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  machineType = true;
  
  alfabet = ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split("");

  constructor(type = true) {
    this.machineType = type;
  }

  encrypt(message, key) {
    let result = [];
    
    if (!message || !key) {
      throw new Error();
    }

    key = this.transformKeyString(message, key);
    
    let arrayKey = key.toUpperCase().split(""),
        iteration = 0;

    message.toUpperCase().split("").forEach((element, i) => {
      let indexMessageChar = this.alfabet.indexOf(element);
      
      if (indexMessageChar < 0) {
        result.push(element);
      } else {
        let indexKeyChar = this.alfabet.indexOf(arrayKey[iteration]);
        result.push(this.alfabet[(indexMessageChar + indexKeyChar) % this.alfabet.length]);
        iteration++;
      }
    });
    
    if (!this.machineType) {
      return result.reverse().join('');
    }

    return result.join('');
  }

  transformKeyString(message, key) {
    let message_length = message.length,
        key_length = key.length,
        times = message.length / key_length + 1;
    key = key.repeat(times).substr(0, message_length);
    return key;
  }

  decrypt(message, key) {
    let result = [];
    if (!message || !key) {
      throw new Error();
    }
    
    key = this.transformKeyString(message, key);
    let arrayKey = key.toUpperCase().split(""),
        iteration = 0;

    message.toUpperCase().split("").forEach((element, i) => {
      let indexMessageChar;
      indexMessageChar = this.alfabet.indexOf(element);
      
      if (indexMessageChar < 0) {
        result.push(element);
      } else {
        let indexKeyChar = this.alfabet.indexOf(arrayKey[iteration]),
            temp = (indexMessageChar - indexKeyChar) % this.alfabet.length;

        if (temp < 0) temp += this.alfabet.length;
        result.push(this.alfabet[temp]);
        iteration++;
      }
    });
    if (!this.machineType) {
      return result.reverse().join('');
    }
    
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;