const isIsomorphic = function(s, t) {
    if(s.length !=t.length){
        return false
    }
let obj1={}
let obj2={}
    for(let i=0;i<s.length;i++){
         let char1=s[i]
         let char2=t[i]
         if(obj1[char1] !==obj2[char2]){
             return false
         }
         obj1[char1] =i+1
         obj2[char2] =i+1
    }
    return true
};


console.log(isIsomorphic("foo","bar"))
// Question link:- https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan&id=level-1