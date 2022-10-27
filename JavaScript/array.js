'use strict';

// 자료 구조 - 어떠한 형식으로 어떤 데이터 타입을 담는지에 따라 다양하게 활용 가능 
// object 서로 연관된 특징들을 묶어둠 -> 자료구조 
// 동일한 타입의 데이터만 담을 수 있으나! 
// JS에서는 dynamically typed language기 때문에 다양한 데이터 타입을 담을 수 있음 
// => 개발할 때 사용하는건 안좋음 

// index는 0부터 시작함. 
// 배열의 포인트: index!! 

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['🍎', '🍌'];
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
// 배열 마지막  (0부터 시작하기때문에 총길이의 -1 )
console.log(fruits[fruits.length - 1])

// 3. Looping over an array
// print all fruits
// a. for 
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
// b. for of
for(let fruit of fruits){
    console.log(fruit)
}
// c. forEach (callback함수를 바로 받아옴)
// anonymous function -> arrow function
fruits.forEach((fruit) =>  console.log(fruit))

// 4. Addition, delete, copy
// push add an item to the end 
fruits.push('🍒', '🍑')
console.log(fruits)

// pop remove an item from the end
fruits.pop()
fruits.pop()
console.log(fruits)

// unshift: add an item to the benigging 
// 앞에서부터 데이터를 넣음 
fruits.unshift('🍒', '🍑')
console.log(fruits)
// shift: remove an item from the beniggin
fruits.shift()
console.log(fruits)

// note!! shift, unshift are slower than pop, push
// why? pop, push는 기존 데이터를 움직이지않고 빠른 연산을 할 수 있다. 
// 앞에 데이터를 넣으려면 기존에 있던 데이터들을 움직여야하기때문이다. 

// splice: remove an item by index position
// 지정된 위치에 있는 것을 삭제하자! 
fruits.push('🍒', '🍑', '🍉')
console.log(fruits)
fruits.splice(1, 1)
console.log(fruits)
// idx=1부터 + 1개를 복숭아, 포도로 바꾸겠다. 
fruits.splice(1, 1, '🍑', '🍇')
console.log(fruits)

// combine two arrays 
const fruits2 = ['🍐', '🥥']
const newFruits = fruits.concat(fruits2)
console.log(newFruits)
console.clear()
// 5. Searching
// indexOf: find the index 
console.log(fruits.indexOf('🍒'))

// includes
// 배열에 배가 있는지 없는지 확인  -> true / false 
console.log(fruits.includes('🍐'))

// lastIndexOf
console.log(fruits)
fruits.push('🍎')
console.log(fruits.indexOf('🍑'))
console.log(fruits.lastIndexOf('🍑'))

// 배열이 선언된 곳으로가서 한번씩 읽어보기! 
// 예제 사용해보기! 
