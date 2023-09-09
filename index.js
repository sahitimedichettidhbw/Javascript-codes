// APPU CB CB APPU check palindrome
function palindr(){
    x="APPU CB CB APPU";
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
    else 
    count=false;
}
if(count)
    console. log("It is a palindrome");
    else
    console.log("It is not");
}

palindr();

// SAHITI- print how many times each alphabet comes?

function alpha(x){

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
alpha("APPU");


// Array= 1,2,3,4,5 to 5,4,3,2,1.
function rev(){
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
rev();

// Check whether the numbers in array are integers or not. If so summ of those numbers.
function sum(){
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
sum();


// Make every even number placed alphabet caps
 function capt(x){
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
 console.log(capt("krishna"));

// Function should take one parameter and print in console what is type of the parameter
 let type = (x)=>{
    console.log(typeof(x));
};
type(2);
type("Sahu");
type(false);





    
    



