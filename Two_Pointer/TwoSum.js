
let nums=[3,2,4]
let target=6

// approach 
//first we subtract and the compare to after o index like 1 to ... and if we find then return and if not find and right count is equal to nums.length then we increse the left count and right count is left +1 

function TwoSum(arr, target) {
 let i =0
 let j=arr.length
let sum=0
 while(i<j ){
    sum =arr[i]+arr[j]
    if(sum ==target){
        return [i,j]
    }else if(sum <target){
        i++
    }else{
        j--
    }
 }
};

console.log(TwoSum(nums,target))