// 18. map()
// 배열의 모든 요소 각각에 대하여 주어진 콜백함수를 호출하고,
// 그 반환 값을 모은 새로운 배열을 반환합니다.
const array1 = [6,7,8];
const map1 = array1.map(x => x+9);
console.log(map1);
// 값이 나오고, 문자열로 하면 뒤에 붙겠네.
//인수 : 다

//19. reduce() ★ 이해가 잘 안되서 질문해야함
// 주어진 콜백함수를 가산기와 요소 각각에 대해(왼쪽에서 오른쪽으로)
// 호출하여 하나의 값으로 줄인 결과를 반환합니다.

// 배열의 각 요소에 대해 주어진 리듀서 함수를 실행, 하나의 결과값 반환

const array2 = [1,2,3];
const initialValue = 0;
const sumWithInitial = array2.reduce((previousValue,currentValue)=>previousValue+currentValue,
initialValue);
console.log(sumWithInitial);
//  6
// 어려웠음..매개변수가

// 20. some() 
// 배열의 어떤 요소가 주어진 판별 함수를 만족할 경우 true를 반환
// 아, 일정 조건에 만족하는게 하나라도 있으면 true
const a = [1,2,3,4];
const even  =(Element)=> Element>3;
console.log(a.some(even));

//21.  sort()
// 배열의 요소를 정렬하고 그 배열을 반환합니다.
const sortValue = [1,7,5,3];
sortValue.sort();
console.log(sortValue);
// 1,3,5,7 반환

//22. toString()
// 배열과 그 요소를 나타내는 문자열을 반환합니다. Object.prototype.toString() 메서드를 재정의
// 지정된 배열 및 그 요소를 나타내는 문자열을 반환

const array5 = [1,2,'a','2a'];
console.log(array5.toString());
// 1,2,a,2a
// 숫자까지 문자열로 바꿔주네
console.log(array5);
// 원본은 안바뀌는듯

//23. values() ★
// 배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.
const array7 = ['a','b','c','d'];
const ab =array7.values();
console.log(array7)

for (const value of ab) {
	console.log(value);
}
// ...? 무슨 말인지..
