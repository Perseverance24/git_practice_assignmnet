
// Problem 2: Print Prime Numbers from 1 to given limit
 let flag="True";
    for(let i=2;i<num;i++)
        if(num%i ===0){
            flag=false;
            break;
        }
        if(flag){
            console.log('Yes');
        }
        else{
            console.log('No');
        }
