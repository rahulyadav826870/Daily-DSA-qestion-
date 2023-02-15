
let arr=[9,9,-5,9,5]
let n=5
let k=3

function minimumSum(n,k,arr){
    // console.log(n,k,arr)
    
    let i=0;
    let j=0
    let sum=0
    let min=Infinity
    while(j<n){
        sum+=arr[j]
        
        if(j-i+1===k){
            
            if(sum< min){
                min=sum
            }
            sum-=arr[i]
            i++
        }
        
        j++
    }
    
    console.log(min)
}

minimumSum(n,k,arr)
