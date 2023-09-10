//Function should take one parameter of type array and print string "all integers" if all the items in the array are of type int else print it is "not integer "
/*const arr=[1,2,3,"Avi"];
let b;
function onlNum(arr){
return arr.every((element) =>{
    return !isNaN(element);

    });
    
    
}
b=onlNum(arr);
if(b)
    console.log("all are Integers");
    else
    console.log("all are not integers");


// What is return value 2=='2' and 2==='2'
const Val=()=>{
    console.log(2=="2");
     console.log(2==="2");
     return;
};
Val();

//Print factorial of number using recursive functions

var factorial=(num)=> {
    if((num==0)||(num==1))
    return 1;

    for(n=num-1;n>=1;n--){
    num=num*n;
    }
    return num;
    //console.log(num);
};
// OR
console.log(factorial(4));

var factorial=(num)=>{
    if((num==0)||num==1)
    return 1;
    else{
        num=num*factorial(num-1);
        return num;
    }
};
console.log(factorial(6));


// Find max and min number in the array of numbers
const a=[43,25,18,10,33,89,98];
let max=0;
let min=a[0];
const maxArr=(a)=>{
    a.forEach((n)=>{
    if(max<n)
    {
        max=n;
    }
    //console.log(max);
    
     if(min>n)
    {
        min=n;
    }
       // console.log(min);
        //return min;
    })
    return min, max;
    
};
maxArr(a);
console.log(max);
console.log(min);*/


// filter
/*const arr=[3,2,8,7,5];
const output=arr.filter((x)=> x%2==0);
console.log(output);*/

// where it has a button and input field. Click on button.. console.log the text in input

const btn= document.getElementById("click");
btn.addEventListener("click", function(){
    console.log(document.getElementById("text").value);
});