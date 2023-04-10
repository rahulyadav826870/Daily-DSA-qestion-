function isSumOdd(n, arr, l, r, k){
    // console.log(n, arr, l, r, k)
    
    let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i >= l - 1 && i <= r - 1) {
      sum += k;
    } else {
      sum += arr[i];
    }
  }
//   console.log(sum)
  if(sum % 2 === 1){
      console.log("YES")
  }else{
      console.log("NO")
  } ;
}

let n=5 
let arr=[2,2,1,3,2]
let [l,r,k]=[2, 3, 3]
let [l1,r1,k1]=[2, 3, 4]
let [l2,r2,k2]=[1, 5, 5]
let [l3,r3,k3]=[1 ,4, 9]
let [l4,r4,k4]=[2, 4, 3]

isSumOdd(n,arr,l,r,k)
isSumOdd(n,arr,l1,r1,k1)
isSumOdd(n,arr,l2,r2,k2)
isSumOdd(n,arr,l3,r3,k3)
isSumOdd(n,arr,l4,r4,k4)
