let s ="(()())(()()())()"

longest(s)
function longest(s) {
    let stack=[]    /// store character
    let index=[]
    index.push(-1)

    let max=0

    for(let i=0;i<s.length;i++){
 
        if(s[i]==='('){
            stack.push(s[i])
            index.push(i)
        }else{
            if(stack.length !=0 && stack[stack.length -1]==='('){
                stack.pop()
                index.pop()
                max = Math.max(max,i-index[index.length-1])

            }else{
                index.push(i)
            }
        }
    }
    return max
};