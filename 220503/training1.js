let num = 5/2;
// // num 이라는 변수를 하나 선언
console.log(num);
// //2.5 출력
console.log(Math.floor(num));
// // 2출력

// str 문자열 생성
let str = "test";
console.log(str[0], str[1], str[2], str[3]);
// t e s t 출력
// 문자열의 첫글자를 대문자로 바꾸기?
str[0] = 'T';
console.log(str);
// 생성된 문자열은 읽기는 가능 O / 수정은 불가능하다.
// 5/2 했던 '텀'블러 → '겜' 블러로 바꾸는 게 불가능했던것처럼.

let nullValue = null;
console.log(typeof nullValue === null);
// false // null은 object이다.
console.log(nullValue===null);
// true
