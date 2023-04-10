
// Greedy approach

let arr=[1,2,4,3,4,5]      // output should   2
let [jumpRequired,currenJumpEnd,maxReach]=[0,0,0]
// console.log(jumpEnd)

for(let i=0;i<arr.length-1;i++){
    maxReach=Math.max(maxReach,arr[i]+i)
    if(i===currenJumpEnd){
        jumpRequired++
 currenJumpEnd=maxReach
    }
}
console.log(jumpRequired)
// Time Complexity: O(n) 
// Space Complexity: O(1)