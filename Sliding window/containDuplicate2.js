
let nums=[1,2,3,1,2,3], k = 2

function containDuplicate2(nums, k) {
    let i = 0;
    let j = 0;
    let set = new Set();
  
    while (j < nums.length) {
        let present=set.has(nums[j])
      if (present){
        return true;
      }else{
        set.add(nums[j]);
        if (j - i + 1 > k){
            set.delete(nums[i++]);
        }
      }
     
      j++;
    }
    
    return false;
      
  }

  //which approach is used for above function

  console.log(containDuplicate2(nums,k))