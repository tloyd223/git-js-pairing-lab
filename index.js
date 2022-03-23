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