
const str = "Jack went to the doctor due in cf his tooth ache";
const largestSmallest = str => {
   const strArr = str.split(" ").sort();
   let min = strArr[0];
   let max = strArr[0];
   for(let i = 1; i < strArr.length; i++){
      if(strArr[i].length < min.length){
         min = strArr[i];
        
      };
      if(strArr[i].length > max.length){
         max = strArr[i];
      };
   };
   return [`longest string = ${max},  Smallest string is = ${min}`];
};
console.log(largestSmallest(str));
