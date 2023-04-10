function UniqueGift(str){
    
    // console.log(str)
    let obj={}
  for(let i=0;i<str.length;i++){
      if(obj[str[i]]===undefined){
          obj[str[i]]=0
      }
  }
// console.log(obj)
let queue=[]
let ans=[]

for(let i=0;i<str.length;i++){
    // console.log(obj[str[i]])
    obj[str[i]]++;
    // console.log(obj)
    queue.push(str[i])
    // console.log(queue)
    while(queue.length !==0){
        // console.log(obj[queue[0]])
        if(obj[queue[0]]==1){   // a 1
            break;
        }
        // console.log(queue)
        queue.shift()  // shift timeComplexity O(1)
    }
    // console.log(queue)
    if(queue.length ===0){
        ans +="#"
    }else{
        ans+=queue[0]
    }
}

console.log(ans)
    
}

UniqueGift("abadbc")
// UniqueGift("abcabc")