const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    
    let maxLvl = 1;
    
    arr.map(n => {
      
      let depth = 1;
      
      if (Array.isArray(n)) {
        depth += this.calculateDepth(n);
        maxLvl = Math.max(maxLvl, depth);
      };

    });
    return maxLvl;
  }
};

