var sortPeople = function(names, heights) {
    const map = new Map();
    
    for (let i=0; i<heights.length; i++){
        map.set(heights[i], names[i]);
    }
    
    heights.sort((a,b)=> b-a);
    
     for (let i=0; i<heights.length; i++){
        names[i] = map.get(heights[i]);
    }
    
    return names;
};

module.exports = sortPeople