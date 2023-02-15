let height =[0,1,0,2,1,0,1,3,2,1,2,1]     // output 6

trap(height)

function trap(height) {
    
    let sum=0
    let n =height.length
    
    for(let i=1;i<n-1;i++){
    
        let leftMax=height[i]
        for(let j=0;j<i;j++){
            leftMax = Math.max(leftMax,height[j])
        }
    
        let rightMax=height[i]
    
        for(let r=i+1;r<n;r++){
            rightMax=Math.max(rightMax,height[r])
        }
    
        sum = sum +(Math.min(leftMax,rightMax)) -height[i]
    }
    
    return sum
    
    };