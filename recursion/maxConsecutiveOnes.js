function maxConsecutiveOnes(x)
{
     
    // Initialize result
    let count = 0;
 
    // Count the number of iterations to
    // reach x = 0.
    while (x != 0)
    {
         
        // This operation reduces length
        // of every sequence of 1s by one.
        x = (x & (x << 1));
 
        count++;
    }
    return count;
}
 
console.log(maxConsecutiveOnes(4294967295))