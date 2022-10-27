// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2)
console.log(`string literals: 
'''''
1 + 2 = ${1+2}`)

// 2. Numeric operators
console.log( 2 ** 3)
console.log( 6 / 2)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
// 기호가 앞에 있으면 업데이트 한 다음 값을 넣음
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1
// 기호가 뒤에 있으면 값을 할당한 다음 업데이트
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)

// 4. Assingment operators
// 5. Comparison operators

// 6. Logical operators: || && !
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// !!!! 중요한점!!!! or 연산을 하다 "true"를 발견하면 멈춘다!
// simple한 애들을 가장 맨 앞으로 해야함. 함수는 맨 뒤에 두는게 좋음 
console.log(`or: ${value1 || value2 || check()}`)

// && (and), finds the first falsy value
// 3개 다 true여야지 true 출력 
// 맨 처음애가 false면 뒤에 작동안함. 
console.log(`and: ${value1 && value2 && check()}`)

// often used to compress long if-statement
// nulllableObject && nullableObject.something
// nullableObject가 null이 아닐때만 object의 something을 받아온다. 
// if (nullableObject != null){
//    nullableObject.something;
// }
function check(){
    for(let i=0;i<10;i++){
        // wastring time
        console.log('🔥')
    }
    return true;
}

// ! (not)

// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion / 타입무시
console.log(stringFive == numberFive)
console.log(stringFive != numberFive)

// === strict equality, no type conversion / 타입체크
// 코딩할 때 이거 쓰는게 더 좋음 
console.log(stringFive === numberFive)
console.log(stringFive !== numberFive )

// object equality by reference
// object는 메모리에 refernece가 올라감! 
// object는 변수의 값으로 비교하는 것이 아닌 reference 자체로 비교해야함. 
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log("1", ellie1 == ellie2) 
console.log(ellie1 === ellie2)
console.log(ellie1 === ellie3) 
console.log('======================')
// equality - puuzzler 
// o, '', null, undefined => false 로 간주
console.log(0 == false)
console.log(0 === false)
console.log('' == false)
console.log('' === false)
console.log(null == undefined)
console.log(null === undefined)

// 8. Conditional operators: if 
// if, else if, else
const name = 'df';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if(name === 'coder'){
    console.log('You are amazing coder');
} else { 
    console.log('unknown')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no')

// 10. Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    // 출력값이 같은 경우 묶어서 사용 가능
    // case 'Chrome':
    // case 'Firefox':
    //     console.log('love you!');
    //     break;
    default: 
        console.log('same all!');
        break;
}

// 11. Loops
// whie loop, while the condition is truthy,
// body code is executed
// while문의 조건이 false가 되면 멈춤
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// do안에 있는 블록을 먼저 실행한다. 
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for (i=3;i>0;i--){
    console.log(`for: ${i}`)
}

for(let i=3;i>0;i=i-2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`)
}

// nested loops
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log(`i: ${i}, j: ${j}`)
    }
}
// O(n2) -> 빅오의 n제곱으로 cpu에 좋지않음 / 되도록 피하는게 좋음

// break(루프를 스탑), continue(지금꺼만 뛰어넘고 다음스텝으로)
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for(let i=0;i<10;i++){
    if(i % 2 === 0) {
        console.log(`${i}`)
    } else {
        continue;
    }
}
// for(let i=0;i<10;i++){ 
//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(`q1, ${i}`)
// }
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i=0;i<10;i++){
    console.log(`${i}`)
    if(i === 8) break;
}
// for(let i=0;i<10;i++){
//     if( i >= 8) break;
//     console.log(`${i}`)
// }