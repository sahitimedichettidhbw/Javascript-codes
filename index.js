/*function palindr(){
    x="APPU CB CB sdcf";
var count=false;
 var str= x.split(" ");
 console.log(str);   
var len= str.length;
console.log(len);


for(n=0;n<len;n++){
    if(str[n]==str[len-n-1])
       {
       count=true;
    }
}
if(count)
    console. log("It is a palindrome");
    else
    console.log("It is not");
}

palindr();
*/

/*function alpha(x){

    //x="SAHITI";
    var len= x.length;
    var counter=0;
    for(n=0;n<len;n++){
        for(m=0;m<len;m++){
           if (x[n]===x[m]){
                //console.log("the" +x[n],":" +x[n+1]);
                //count++;
                 counter++;
            }
        }
    
        
         console.log("The number of times " +x[n], "occurs:", +counter);
         counter=0;
}
    //console.log(x[0]);
}
alpha("APPU");*/

/*function rev(){
    let a =[1,2,3,4,5];
    let b=[];
    var len= a.length;
    console.log(len);
    for(let n=0; n<len;n++){
        b[n]=a[len-n-1];
        console.log("Original array: "+a[n]);
        console.log("Reverse of an array: " +b[n]);
    }
}
rev();*/

/*function sum(){
    let a=[1,5,6,7,10,"Akshay"];
    let b=[];
    var sum=0;
    let len= a.length;
    for(n=0;n<a.length;n++){
        if(Number.isInteger(a[n])){
            //console.log("integer");
            b[n]=a[n];
            sum=sum+b[n];

        }
        else
        console.log(a[n], "is not an integer");
    }
    console.log("The sum of integers is " +sum);
}
sum();*/

 /*function capt(x){
    //x="hello";
    var len= x.length;
    let b= "";
    for(n=0;n<len;n++){
        if(n%2==0){
            b+=x[n].toUpperCase();
            //console.log("the converted string", +b);
        } else {
        b+=x[n].toLowerCase();
        }
    
         
    }
   // console.log("the converted string", +b[n]);
    return b;
    //console.log("the converted string", +b);
 }
//console.log("the converted string", +b);
 console.log(capt("hello"));
 console.log(capt("HELLO"));
 console.log(capt("arnav"));
 console.log(capt("krishna"));*/

// Function should take one parameter and print in console what is type of the parameter
 /*let type = (x)=>{
    console.log(typeof(x));
};
type(2);
type("Sahu");
type(false);*/

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
    console.log("all are not integers");*/


// What is return value 2=='2' and 2==='2'
/*const Val=()=>{
    console.log(2=="2");
     console.log(2==="2");
     return;
};
Val();*/


//Print factorial of number using recursive functions

    var factorial=(num)=> {
        if((num==0)||(num==1))
        return 1;

        for(n=1;n<=num;n++){
        num=num*n;
        }
        console.log(num);
    };

console.log(factorial(4));

    
    



