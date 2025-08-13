let n=parseInt(prompt("Enter how many odd numbers to sum:"));
let sum=0;
for(let i=1;i<=n;i++){
    sum+=(2*i-1);
}
console.log("Sum of first "+n+" odd numbers is " +sum);