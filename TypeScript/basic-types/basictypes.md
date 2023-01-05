## boolean

**typescript 파일 시작하기**

```
    npm init -y
    npm i typescript -D
    npx tsc --init        // tsconfig.json 파일 생성
```

**tsconfig.json 파일**

-   default 값 중 strict가 true로 설정되어있는지 확인

```
var isDone: boolean = false;  
isDone = true;  
console.log(typeof isDone) // 'boolean'

// 타입스크립트의 primitive type은 소문자를 사용해야한다! 

var isOk: Boolean = true;
var isNotOk: boolean = new Boolean(true);
// 오류 : 'Boolean' 형식은 'boolean' 형식에 할당할 수 없습니다.
// boolean'은(는) 기본 개체이지만 'Boolean'은(는) 래퍼 개체입니다.
// 가능한 경우 'boolean'을(를) 사용하세요.
```

boolean.ts 파일 생성 -> compile `npx tsc` -> 실행 `node boolean.js`

---

## number

-   Javascript와 같이, TypeScript의 모든 숫자는 부동 소수점 값 입니다.
-   TypeScript는 16진수, 10진수, 2진수, 8진수를 지원한다.
-   NaN
-   1\_000\_000과 같은 표기 가능

```
var decimal: number = 21; // 10진수

var hex: number = 0xf00d;   //16진수

var binary: number = 0b1010;    //2진수

var octal: number = 0o744;      // 8진수 

var notANumber: number = NaN;

// NaN : 숫자의 한 형태 

var underscoreNum: number = 1_000_000;
```

---

## string

**Template String**

-   행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
-   backtick (=backquote) 기호에 둘러쌓여 있다.

```
    var fullName: string = 'Mark Lee';
    var age: number = 32;

    var sentence: string = `Hello, My name is ${fullName}!

    My age is ${age}.`
    console.log(sentence)
```

---

## symbol

-   new Symbol로 사용 할 수 없음
-   Symbol 을 함수로 사용해서 symbol 타입을 만들어낼 수 있음.
-   프리미티브 타입의 값을 담아서 사용
-   고유하고 수정불가능한 값으로 만들어줌
-   주로 접근을 제어하는 데 쓰는 경우가 많음

```
    console.log(Symbol('foo') === Symbol('foo'));
    // false 

    // 고유한 형태의 값 sym
    var sym = Symbol();

    const obj = {
        [sym]: "value",
    };

    //obj["sym"] // 문자열로 접근할 때 접근 불가능
    obj[sym]
```

\-> 함수로 사용할 때는 대문자 Symbol  
\-> 타입으로 사용할 때는 소문자 symbol

---

## null & undefined

-   In TypeScript, both undefined and null actually have their types named undefined and null respectively.  
    TypeScript에서, undefined와 null 은 실제로 각각 undefined 및 null 이라는 타입을 가집니다.
-   Much like void, they're not extremely useful on their own:  
    void와 마찬가지로, 그 자체로는 그다지 유용하지 않음
-   둘 다 소문자만 존재

```
    var MyName: string = null;
    let age: number = undefined; 

    // strincNullChecks => true
       var name: string = null;    (x)

    // var u: undefined = null; (x)
    var v: void = undefined;    (o)

    // string 타입과 null의 합집합 
    let union: string | null = null;
    union = 'AMI';
```

**strictNullchecks 설정 확인하기**

\-> strict: true로 설정되면 그 아래 주석처리 된 것들을 사용한다는 뜻이다!

**undefined & null are subtypes of all other types**

-   ts를 설정하지 않으면 undefined와 null은 다른 타입의 서브 타입으로 존재한다.
-   strictNullChecks 사용하면 null과 undefined는 void나 자기 자신들에게만 할당할 수 있습니다.
    -   이 경우, null과 undefined 를 할당할 수 있게 하려면, union type을 이용해야 한다.

**null in JavaScript**

-   null이라는 값으로 할당된 것을 null이라고 한다.
-   런타임에서 typeof 연산자를 이용하면 undefined 이다.

```
    var u: undefined = undefined;

    console.log(u)            // undefined 
    console.log(typeof u);    // undefined 
```

---

패스트 캠퍼스 한 번에 끝내는 프론트엔드 개발 초격차 패키지 강의를 보고 정리한 내용입니다.