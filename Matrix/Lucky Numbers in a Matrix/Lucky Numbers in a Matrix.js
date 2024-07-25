var luckyNumbers  = function(matrix) {
    let maxCol = -Infinity;
    
    for (let i=0; i<matrix.length; i++){
        let minElem = Infinity;
        for (let j=0; j<matrix[i].length; j++){
            minElem = Math.min(matrix[i][j], minElem);
        }
        if (minElem > maxCol) {
            maxCol = minElem;
        }
    }
    
    return maxCol;
};

luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])