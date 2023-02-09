
let nums=[3,2,4]
let target=6

// approach 
//first we subtract and the compare to after o index like 1 to ... and if we find then return and if not find and right count is equal to nums.length then we increse the left count and right count is left +1 

function TwoSum(nums, target) {
    let leftPointer = 0;
    let rightPointer = 1;
    let numNeeded = 0;
    while (rightPointer != nums.length){
        numNeeded = target - nums[leftPointer];
        if (nums[rightPointer] === numNeeded){
            return [leftPointer, rightPointer];
        }
        rightPointer++;
        if ( rightPointer == nums.length){
            leftPointer++;
            rightPointer = leftPointer + 1;
        }
    }
};

console.log(TwoSum(nums,target))