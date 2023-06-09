var isSubsequence = function(s, t) {
    let i = 0; 
let j = 0; 

while (j < t.length) {
    if (t.charAt(j) == s.charAt(i)) {
        i++;
    }
    j++;
}

return i == s.length;
};

console.log(isSubsequence("axc","ahbgdc"))