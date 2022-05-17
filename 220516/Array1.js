// 1. forEach()
// 배열의 각각의 요소에 대해 함수를 호출
const fruits = ["사과","딸기","레몬"];
fruits.forEach(Element=>console.log(Element));
// 값 사과 딸기 레몬 (각각)
// 인수 없음

//2. push()
// 배열의  끝에 하나 이상의 요소를 추가하고, 배열의 변경된
// length를 반환
// 인수 :문자열, 숫자, 불리언, null, undefined, 함수, 배열 (모두)
const m = ["라면","짜장면","울면","냉면"];
m.push("비빔면");
console.log(m);
// ['라면','짜장면','울면','냉면','비빔면']

// 3. pop()
// 배열에서 마지막 요소를 뽑아내고, 그 요소를 반환합니다.
// 인수 : 없음
const color = ["빨","주","노","초"];
color.pop();
console.log(color);
// '초'가 빠지고 ['빨','주','노']

// 4.shift()
// 배열에서 첫 번째 요소를 삭제하고, 그 요소를 반환합니다.
// 인수 : 없음
const color2 = ["빨","주",'노'];
color2.shift();
console.log(color2);
//빨 빠지고 [주,노]

//5. unshift()
// 배열의 앞에 하나 이상의 요소를 추가하고, 배열의 변경된 length를 반환합니다.
// 인수 : 문자열,숫자,불리언,null,undefined,함수,배열
const book = ["시","소설","에세이","인문","사회"];
console.log(book.unshift("예술","과학"));
console.log(book);
// 앞쪽에 배치가 된다. 1개 이상의 element가 추가가 된다.

//6. indexOf()
// 배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환합니다.
// 없으면 -1을 반환합니다.
const bird = ["닭","비둘기","참새","오리","닭"];
console.log(bird.indexOf('닭'));
// 어?! 보니까 닭이 뒤에 있어도~ 제일 앞에 있는 인덱스 값을 
// 불러 오는 걸 확인 할 수 있었어~