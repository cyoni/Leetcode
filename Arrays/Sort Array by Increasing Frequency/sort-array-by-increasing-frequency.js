const frequencySort = function(nums) {
    const map = new Map();
    for (const num of nums){
        map.set(num, (map.get(num)||0)+1);
    }
    
    nums.sort((a,b)=>{
        const aCount = map.get(a);
        const bCount = map.get(b);
        if (aCount > bCount) return 1
        if (aCount < bCount) return -1
        return a > b ? -1 : 1 
    })
    
    return nums;
};


module.exports = frequencySort;
