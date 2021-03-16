const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let {
    repeatTimes=1,
    separator="+",
    addition="",
    additionRepeatTimes=1,
    additionSeparator="|"
    } = options;

  let stringBase = String(str),
     stringAdditional = String(addition),
     stringToJoinWithBase,
     result,
     arrayBase = [],
     arrayAddition = [];

  for (i = 0; i<additionRepeatTimes; i++){
    arrayAddition.push(stringAdditional);
  }
  
  stringToJoinWithBase = arrayAddition.join(additionSeparator);

  for (i = 0; i<repeatTimes; i++){
    arrayBase.push(stringBase+stringToJoinWithBase);
  }

  result = arrayBase.join(separator);
  
  return result;  
};
  