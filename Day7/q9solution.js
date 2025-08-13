alert("Goto Console to find sum of even numbers");
let sum=0;
for(let i=2;i<=30;i++){
    if(i%2==0){
        sum+=i;
        console.log("Even Numbers "+i+" "+sum);
    }
    
}