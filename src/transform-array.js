const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res=[]
  for(let i =0 ; i<arr.length; i++){
  if(arr[i] === '--discard-next'){
  res = res
  }
   else if(arr[i] === '--discard-prev'){
  res.pop()
  }
    else if(arr[i] === '--double-next'){
   res.push(arr[i+1])
  }
     else if(arr[i] === '--double-prev'){
   res.push(arr[i-1])
  }
    else {
   res.push(arr[i])
  }
  }
  return res
};
