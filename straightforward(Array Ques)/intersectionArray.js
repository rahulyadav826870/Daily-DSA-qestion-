var intersect = function(nums1, nums2) {
    let intersectionArr = [];
    
   for(let i=0;i<nums1.length;i++){
       let matchIndex = nums2.indexOf(nums1[i]);

       if(matchIndex > -1){
         intersectionArr.push(nums1[i]);
           
         nums2.splice(matchIndex,1);
       }
    }

    return intersectionArr;
};

console.log(intersect([1,2,2,1],[2,2]))