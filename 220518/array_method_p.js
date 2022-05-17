// 자주쓰는 array method
// forEach()
// filter()
// map()
// reduce()
// join()

//1. forEach()
// 배열의 각각의 요소를 뽑아내는 함수를 호출
const color = ["red","orange","yellow","green"]
color.forEach(element => {console.log(element)});
// 각각의 요소가 나온다.
// 줄여보는 연습
color.forEach(element=>console.log(element));
// 중괄호 생략가능

//2. filter()
// 필터함수에서 반환결과가 true인 요소만 모아서 새로운 배열을 만들어줘!

const food = ["라면","라볶이","족발","라조기"];
const result = food.filter(
	word=> word.startsWith('라')
);
console.log(result);
// [라면,라볶이,라조기]

const map1 = food.map(x=> x+' 맛있겠다');
console.log(map1);
// 라면 맛있겠다,  라볶이 맛있겠다...//
 
//4. join
// 배열요소를 하나로 합쳐줘
console.log(food.join());
console.log(food.join(''));
console.log(food.join('-'));
// 라면,라볶이,족발,라조기
// 라면라볶이족발라조기
// 라면-라볶이-족발-라조기