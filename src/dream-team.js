const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res=[]
  if(!Array.isArray(members)){
  return false
  }
  for( let i = 0; i<members.length; i++){
      if( typeof members[i] === "string"){
       res.push(members[i].replace(/\s/g, ''))
      }
  }
  let name=""
   res.map(i => name = name+i[0].toUpperCase() )
   return name.split('').sort().join('')
};
