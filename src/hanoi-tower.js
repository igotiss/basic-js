const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  var turns = 2**disksNumber - 1;
  var time = Math.floor(turns/(turnsSpeed/3600));
  var result = {
    turns: turns,
    seconds: time
  }; 

  return result;
};
