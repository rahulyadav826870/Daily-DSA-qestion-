function solve(N,arr){
    //write code here
   for(let i=0;i<N-1;i++){
    //   let min=i
       for(let j=i+1;j<N;j++){
           if(arr[i] >arr[j]){
               let temp=arr[i]
               arr[i]=arr[j]
               arr[j]=temp
           }
       }
   }
   
   console.log(arr.join(" "))
}


solve(5,[3,5,0,9,8])