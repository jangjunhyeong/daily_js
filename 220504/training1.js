// 동등연산자 (==) , 일치연산자 (===) 비교

console.log(1=='1');
// true 비교하려는 연산자끼리 타입이 다르면 타입을 일치시킨 후 비교

console.log(1==='1');
// 타입을 변경하지 않고 비교


// 함수 표현식 써보기
let add = function(x,y){
return x + y;
};
// add라는 함수를 참조하는 변수는 x+y를 더한 값을 뱉어낸다.
// add는 함수 이름이 아니다. 함수가 할당된 함수 변수이다.

let plus = add;

console.log(add(3,4)); // 7 출력
console.log(add(5,5)); // 10 출력