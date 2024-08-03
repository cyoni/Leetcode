 
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/
// O(n) runtime
// O(1) space

var findDisappearedNumbers = function(arr) {
    const minNums = [];
    const n = arr.length;
    
    for (let i=0; i < n; i++){
        const index = Math.abs(arr[i]) - 1;
        if (arr[index] > 0) arr[index] *= -1;
    } 
    
    
    for (let i=0; i<n; i++){
        if (arr[i] > 0) {
            minNums.push(i+1);
        }
    }
    
    return minNums;
};

//module.export = 
findDisappearedNumbers([4,3,2,7,8,2,3,1])