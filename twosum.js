/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let h={}
    for(let i=0;1<nums.length;i++){
        const j=target-nums[i]
        if(j in h){
            return[h[j],i]
        }
        h[nums[i]]-i
    }
};