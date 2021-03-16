const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {

  let season = '';
    
  // no arguments    
    if (typeof date != 'object' || !date ) {
      season = 'Unable to determine the time of year!';    
    } else {
      
      let month   = date.getMonth(); 
          console.log(month);
    
      switch (month) {
        case (0):
        case (1):
        case (11):
          season = "winter";
          break;
        case (2):
        case (3):
        case (4):
          season = "spring";
          break;
        case (5):
        case (6):
        case (7):
          season = "summer";
          break;
        case (8):
        case (9):
        case (10):
          season = "autumn";
          break;
        default: 
          season = 'Error';
      }     

       // `date` argument is **invalid**
       if (isNaN(date.valueOf()) && date instanceof Date) throw new Error()
    }
  
  return season; 
}