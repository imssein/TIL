'use strict';

// objects 
// one of the JavaScripts's data types.
// a colletion of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object는 key와 value의 집합체이다 .
// object = { key: value}
// 우리가 접근할 수 있는 변수 key
// key가 갖고있는 값 value 

// 1. Literals and properties
const obj1 = {};        // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person){
    console.log(person.name)
    console.log(person.age)
}
const sein = {name: 'sein', age: 4}
print(sein)

// 객체에 추가가능! 그러나 유지보수하기 어렵기때문에 피하는게 좋음
sein.hasJob = true;
console.log(sein.hasJob)

// 삭제도 가능! 
delete sein.hasJob;
console.log(sein.hasJob)

// 2. Computed properties (계산된 프로퍼티)
// key should be always string (key는 꼭 '' 필요!! )
console.log(sein.name)      // 코딩하는 그 순가 key에 해당하는 값을 받아올 때 사용 
console.log(sein['name'])   // 우리가 정확하게 어떤 키를 사용해야할지 모를 때 runtime에서 결정될 때 
// 추가 가능 
sein['hasJob'] = true
console.log(sein.hasJob)

function printValue(obj, key) {
    // 어떤 키를 사용해야할지 모를 때 
    console.log(obj.key) // 이렇게 사용할 경우 undefined가뜸
    // 나중에 동적으로 key의 value를 받아올 때 유용하게 쓸 수 있음
    console.log(obj[key]); 
}
printValue(sein, 'name')

// 3. Property value shorthand 
const person1 = {name: 'bob', age:2 }

// 순수하게 object를 생성하는 함수명은 verb로 하지않고 대문자로 함 makePerson -> Person
// return을 사용하지않고

// 4. Constructor FUnction
function Person(name, age){
   
        this.name = name;
        this.age = age;

        // 기본 함수 생성 방법
     //return {
        //name,  // name: name,
        //age,   // age: age,
    //}
}
const person2 = new Person('sein', 12)
console.log(person2)

// 5. in operator: property existence check (key in obj)
// javascript에서 object안에 특정 key가 존재하는지 확인하는 방법 
console.log('name' in sein)     // true
console.log('hi' in sein)       // false 

// 6. for..in vs for..of
// for (key in obj)
// 모든 key를 출력
for(let key in sein){
    console.log(key)
}
// for(value of iterable)
// 배열, 리스트, 순차적으로 literable한 아이들을 씀 
const array = [1,2,4,5];
// for(let i=0;i<array.length;i++){
//     console.log(array[i])
// }
for(let value of array){
    console.log(value)
}

// 7. Fun cloning 
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'sein', age: 20}
const user2 = user;
console.log(user2)
user2.name = 'coder';
console.log(user)
// user2가 가리키고 있는 ref의 name을 'coder'로 변경하자! 
// user.name변경되었음.


// old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.log(user3)

// new way 
const user4 = {} 
Object.assign(user4, user)
// const user4 = Object.assign(user4, user)
console.log(user4)


// another example 
const fruit1 = { color: 'red' };
const fruit2 = {color: 'blue', size: 'big'}
const mixed = Object.assign({}, fruit1, fruit2)     // 값을 계속 덮어씌운다. 
console.log(mixed.color)
console.log(mixed.size)
