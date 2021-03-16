const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
   
  let result = false;

if( Array.isArray(members)){

  let arr = [];

    for (i = 0; i<members.length; i++) {
      
      if (typeof(members[i]) == 'string' ){
        members[i] = members[i].trim();
        arr[i] = members[i][0].toUpperCase();
      }      
    }

    result = arr.sort().join('');
}

 return result;
};
