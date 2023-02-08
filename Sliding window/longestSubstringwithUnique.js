
function longestSubstringWithUnique(s){
 
let obj={}
for(let i=0;i<s.length;i++){
    if(obj[s[i]]===undefined){
        obj[s[i]]=1
    }else{
        obj[s[i]]++
    }
}

let arr=Object.keys(obj).length

return arr
}
let s = "pwwkew"
console.log(longestSubstringWithUnique(s))