let arr1=[1,5,7,9]
let arr2=[2,4,6,8]

// output   // 1 2 4 5 6 7 8 9

let arr3=[...arr1,...arr2]  
// console.log(...arr3.sort((a,b)=> a-b))


let arr4=arr3.join(" ")
// console.log("arr4: ", arr4);

// function swap(arr,i,j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }

// for(let i=0;i<arr4.length-1;i++){
//     let min=i
//     for(let j=i+1;j<arr4.length;j++){
//         if(arr4[min]> arr4[j]){
//             min=j
//         }
//     }
//     swap(arr4,min,i)
// }

// console.log(arr4)
