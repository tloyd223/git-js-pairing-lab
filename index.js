//Code your solutions in this file
function fiveToHundred(){
    console.log("** Question 1 **")
    for (let i =5; i <=100;i++){
        console.log(i)
    }
}
fiveToHundred()

// 2
function multiplesOfThree(){
    console.log("** Question 2 **")
    for(let i=1; i<= 100; i++){
        if(i%3 === 0){
            console.log(i);
        }
    }
}
multiplesOfThree();

function multipleOfThreeOrFive(){
    console.log("Question 3")
    for(let i =1; i <100;i++){
        if (i%3 ===0 || i%5 ===0){
            console.log(i);
        }
    }
}
multipleOfThreeOrFive();

// #4
function untilNum(num){
    console.log("** question 4 **")
    for(let i=1; i<= num; i++){
        console.log(i);
    }
}
untilNum(10);

// #5
function multiply(num1,num2){
    console.log("Question 5")
    return num1*num2
}
console.log(multiply(7,5))

// #6
function add(num1, num2){
    console.log("** question 6 **")
    if(num1 === num2){
        return (num1+num2)*3;
    }
    else 
        return num1+num2;
}
console.log(add(5,5));
//7
function isNegative(num){
    console.log("question 7")
    if(num>=0){
        return false
    }
    else
    return true
}
console.log(isNegative(-31));

// #8

function triangleArea (height, base){
    console.log("** question 8 **")
    return (1/2)*base*height;
}
console.log(triangleArea(6,8));

//9
function betweenTwentyAndFourty(num){
   console.log("Question 9")
    if(num>20 && num<100){
        return true
    }else 
    return false
}
console.log(betweenTwentyAndFourty(21))

// #10
function largest(num1, num2, num3){
    console.log("** Question 10 **")
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if (num2> num1 && num1 > num3){
        return num2;
    }
    else 
        return num3;
}
console.log(largest(41,108,86));

// #11
console.log("** question 11 **")
function printTime(){
    let currentTime = new Date();
    let time = "Current Time: "+ (currentTime.getHours()-4 ) +":"+ currentTime.getMinutes()+":"+currentTime.getSeconds();
    return time;
}
console.log(printTime());

//#12
console.log('** Question 12 **');
function isLeapYear(year){
    if((year%4 === 0 && year%100 != 0) || (year%400 === 0)){
        return true
    }
    else 
        return false;
}
console.log(isLeapYear(2000));
 // #13
 console.log('** Question 13 **');
 function getExtention(str){
     let index = 0;
     let extArr = [];
     for(let i=0; i<str.length; i++){
         if(str[i] === '.'){
            index = i;
         }
     }
     for(let i=index; i<str.length; i++){
         extArr.push(str[i]);
     }
     return extArr.join("");
 }
 console.log(getExtention('hello.txt'));



