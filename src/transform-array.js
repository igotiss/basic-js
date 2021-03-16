const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  
  if (!Array.isArray(arr)) return THROWN;
  
  if (arr.length == 0) return arr;
 
  var newArr = arr.slice();  

  for (i=0; i<newArr.length; i++) { 

    switch(newArr[i]) {     
      case('--double-next'):        
        newArr[i] = newArr[i+1];
        break;
      case('--double-prev'):
      newArr[i] = newArr[i-1];
      break;
      case('--discard-next'):
        delete newArr[i]; 
        delete newArr[i+1];        
        break;
      case('--discard-prev'):
        delete newArr[i]; 
        delete newArr[i-1];         
        break;
    }
  }      

    for (i=0; i<newArr.length; i++) {
      if (newArr[i] == null){        
        newArr.splice(i, 1);
        i--;
      }      
    }    
   
  return newArr;  
};