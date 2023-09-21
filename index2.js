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
/*
const btn= document.getElementById("click");
btn.addEventListener("click", function(){
    console.log(document.getElementById("text").value);
    //Palin();
});
const apiUrl = 'https://services.odata.org/northwind/northwind.svc/Employees?$format=json';
const dataList = document.getElementById('data-list');


// Make a GET request to the API
fetch(apiUrl)
  .then((response) => {
    // Check if the response status code is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data from the API
    console.log(data);
    dataList.innerHTML = '';

    // Create list items and append them to the unordered list
    data.value.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.FirstName; // Replace 'name' with the actual property name you want to display
      dataList.appendChild(listItem);
    });

  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });*/
/*function Palin(){
    var str= document.getElementById("text").value;
    var len= str.length;
    for(n=0;n<Math.floor(len/2);n++){
        if(str[n]!==str[len-n-1]){
        count=false;
        } 
        else{
            count=true;
        }
    
    }
    if(count)
    console.log("It is a Palindrome");
    else{
        console.log("It is not");
    }
     
}*/



    

/*const arr=[2,2,6,7];
const output=arr.filter((x)=> x==2);
console.log(output);

const output1= arr.find((x)=>  x==2
);
console.log(output1);*/



//Write a function that takes a string as input and returns the reverse of that string.
/*let b=" ";
function rev(x){
    //x="sahiti";
    //var a= x.split("");
    //console.log(a);
    let b=[];
    const len= x.length;
    for(n=0;n<len;n++){
        b[n]=x[len-n-1];
        //console.log(b[n]);
    }
    console.log("The reverse of " +x+ ":", b.join(""));

}
rev("sahiti");
// 2 way of reverse

function reverseString(x){
    return x.split("").reverse().join("");
}
console.log(reverseString("appu"));

// Reverse of each character in a sentence

const str="I need to crack this interview";
const reversedSent= reverseSenten(str);

console.log(reversedSent);

function reverseSenten(str){
    a=str.split("").reverse().join("");
    let b=a.split(" ").reverse();
    return a;

}*/


//Fibonacci series
/*
function fibonacci(){
    let a=0;
    let b=1;
    console.log(a);
    console.log(b);
    for(n=1;n<=10;n++){
        temp=a+b;
        a=b;
        b=temp;
        console.log(b);
    }
}
fibonacci();*/

// Missing number
/*
let arr=[1,2,3,4,5,6,7,8];
let missArra=[];
let minNum= Math.min(...arr);
let maxNum= Math.max(...arr);
function missingNumber(arr){

for(i=minNum;i<maxNum;i++)
{
    if(arr.indexOf(i)<0){
        missArra.push(i);

    }
}
    
console.log("The missing array " +missArra);
}


missingNumber(arr);*/
// Remove duplicates fro the array.

let arr=[2,5,12,8,8,5,1];
let newArr=[];
function removeDuplicates(arr){
    //let a= arr.length;
    const rmvDup= arr.forEach((item)=>{
        if(!newArr.includes(item))
        newArr.push(item);
    });
    console.log("New array using forEach", newArr);
    let removDupli= arr.reduce(function(item, curr){
        if(!item.includes(curr))
            item.push(curr);
        return item;
    }, []);
    //return removDupli;
         console.log("New Array is", removDupli);
}
removeDuplicates(arr);


