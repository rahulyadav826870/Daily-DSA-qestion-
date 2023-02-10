let s= "{()[]{}}"

function isValid(s) {
    
    let  stack = [];
   
      for(let i = 0; i < s.length; i ++){
          if( s[i] === "(" ){
  stack.push( ")" );
          } else if( s[i] === "[" ){
  stack.push( "]" );
          }else if( s[i] === "{" ){
              stack.push( "}" );
          }else if( s.length === 0 || stack[stack.length - 1] !== s[i] ){
              return false;
          } else {
          stack.pop();
          }
      }
       if(stack.length === 0){
        return true
      };
  };

  console.log(isValid(s))