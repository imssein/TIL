// Function 
// - 기본적인 빌딩 블록 fundamental building block in the program
// - 서브 프로그램 / 재사용 가능 subprogram can be used multiple times
// - 한가지의 작업니다 계산하기 위해 사용 / performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return;}
// 하나의 함수는 한가지의 일만 하도록 만들어야함. 
// 변수이름 - 명사 (age, name)
// 함수 - 무엇인가를 동작하는 것이기때문에 (동사)
// doSomething, command, verb
// createCardAndPoint -> createCard, createPoint
// function is object in JS 

function printHello() {
    console.log("hello")
}
printHello();

function log(message){
    console.log(message)
}
log('hi')
log(1234)

// TypeScript - 파라미터, 리턴 타입 명시가 필요함.
// function log(message: string): number{
//     console.log(message)
//     return 0;
// }

// 2. Parameters 
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
changeName(ellie)
console.log(ellie)

//3. Default parameters  (added in ES6)
function showMessage(message, from = 'unknown'){
    // ES6전에는 이렇게 정의해야했으나, ES6 이후에는 위처럼
    // if(from === undefined){
    //     from = 'unknown'
    // }
    console.log(`${message} by ${from}`);
} 
showMessage('HI!')
// 파라미터 값이 전달이 안될 경우 undefined라고 뜸

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i])
    }
    // arg에 있는 값 하나하나씩 차례대로 출력한다. 
    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg))
}
printAll('dream', 'coding', 'ellie')
// ...은 배열 형태로 전달됨. 

// 5. local scope
let globalMessage = 'global';       // 전역변수 
function printMessage() {
    let message = 'hello';          // 지역변수 
    console.log(message);
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage = 'hello'
    }
}
printMessage();
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 

// 6. Return a value 
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`)

// 7. Early return, earyly exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
       return;
    }
    // 조건이 맞을 때만 필요한 연산을 함. 
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declartion can be called earilier than it is defined (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {     // anonymous function 
    console.log('print')
} 
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3))

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!')
}
// named function
// 디버깅 할 때 디버깅의 stack traces를 할때 좋음
// recursions 
// 함수 자체에서 자신 스스로를 부르는 것
const printNo = function print(){
    console.log('no!')
    //print();            // recursions: 함수 자체에서 자신 스스로를 부르는 것
}

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// Arrow function -> 간결하게 쓸 수 있음 
// alwyas anonymous
const simplePrint = function() {
    console.log('simplePrint')
}

const simplePrint2 = () => console.log('simplePrint');
const add = (a,b) => a + b;

// const add = function (a,b) {
//     return a+b;

// }

// IIFE : Immeditely Invoked Function Expression
(function Helllo(){
    console.log('IIFE')
})();
// 바로 호출 가능! - 요즘 잘 사용하지않음

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a,b){
    switch(command) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '/':
            return a/b;
        case '*':
            return a*b;
        case '%':
            return a%b;
        default:
            return "calculate";
    }

    
}
console.log(calculate('+', 1,2))
console.log(calculate('-', 3,2))
console.log(calculate('/', 6,2))
console.log(calculate('*', 2,3))
console.log(calculate('%', 5,2))
