
// Problem 2: Print Prime Numbers from 1 to given limit

let arr = [1,2,3,4,5,6,7,8,9];
let bag = "";

for(let i=1; i<arr.length; i++){

if(arr[i]%i==0){
  bag+=arr[i];
  
  }    
}
console.log(bag);
