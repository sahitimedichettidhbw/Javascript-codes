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
