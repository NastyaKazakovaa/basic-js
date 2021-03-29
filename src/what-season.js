const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
  if(date.getMonth()== 1 ||date.getMonth()== 2 ||date.getMonth()== 12){
    return "winter"
    }
    if(date.getMonth()== 3 ||date.getMonth()== 4 ||date.getMonth()== 5){
    return "spring"
    }
    if(date.getMonth()== 6 ||date.getMonth()== 7 ||date.getMonth()== 8){
    return "summer"
    }
    
    if(date.getMonth()== 9 ||date.getMonth()== 10 ||date.getMonth()== 11){
    return "autumn"
    }
    
};
