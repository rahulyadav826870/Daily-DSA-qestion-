function happyNumber(n){
    // console.log(n)
let obj={}
while(n !=1){
    n=sum(n)
    if(obj[n] !=undefined){
        console.log("No")
        return 
    }
obj[n]=1
if(n===1){
    console.log("Yes")
    return 
}
}

function sum (n){
    let sum=0
    while(n>0){
        let s=n%10
        sum +=s*s
        n =Math.floor(n/10)
    }
    return sum
}
}

happyNumber(2)