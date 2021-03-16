const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  let formula = false;
  
  if (Number(sampleActivity)!=isNaN && typeof(sampleActivity)=="string"){
   
  let k = (Math.log(2)/HALF_LIFE_PERIOD);
  
  formula = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k);
  }
  
  if(isNaN(formula) || formula===Infinity || formula<0) {
    formula = false;
  }   
  
  return formula;
}

  