Palindrome:

 let ans="";
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
        }
        if(ans==str){
      console.log('Yes');
        }else{
       console.log('No');
        }