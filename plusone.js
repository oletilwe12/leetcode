/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) 
 {
     for(let index = digits.length - 1; index >= 0; index --)
         {
             if(digits[index] < 9)
                 {
                     digits[index] ++ 
                     return digits
                 }
             // 9 9 9 9 => 0 0 0 0
             digits[index] =0
         }
     
     let resultArray = Array(digits.length + 1).fll(0)
     
     resultArray[0] = 1
     
     return resultArray
 };