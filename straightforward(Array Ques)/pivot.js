function pivot(nums){
    let total =0

    for(let i=0;i<nums.length;i++){
        total +=nums[i]
    }

    let leftSum=0

    for(let i=0;i<nums.length;i++){
       let rigthSum = total -nums[i] -leftSum

       if(leftSum ===rigthSum){
        return i
       }

       leftSum +=nums[i]
    }

    return -1
}

console.log(pivot([1,7,3,6,5,6]))