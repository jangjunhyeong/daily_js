//12. concat()
//  배열과 배열/ 값 매개변수를 이어붙인 새로운 배열을 반환합니다.
// concatenate 같다.
// 인수 : 다

const g = ["귤","오렌지","천혜향"];
const p = ["백포도","청포도"];

// console.log(g.concat.p); 안됨
// array.concat(arrayvalue1);

console.log(g.concat(p)); 
// 됨

//13. every()
// 배열의 모든 요소가 주어진 판별 함수를 만족할 경우 true
// 보니까..if 랑 관련이 있는듯
// 인수 : 다
const num = ['1','5','10','16'];
const numValue = (currentValue) => currentValue <40;
console.log(num.every(numValue));
// ture 뱉어내긴하는데 currentValue...도 알아둬야할듯

//14. filter()
// 지정한 필터 함수의 반환 결과가 true인 요소만 모아서 새로운 배열 반환
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// 인수 : 다
const number = ['1','5','10','15','20'];
const result =number.filter(word => word >6);
console.log(result);
// 10,15,20 반환

// 15.  findIndex()
// 주어진 판별함수를 만족하는 첫 번째 요소의 인덱스를 반환.
// 만족하는 요소가 없으면 -1을 반환
// 어디에 있는지 세준다.
// 인수 : 다
const array1 = ['5','10','15','20'];
const numValue2 = (Element) => Element >13;
console.log(array1.findIndex(numValue2));
// 2반환 (3번째니까)

// 16. includes()
// 배열이 주어진 값을 포함하는지 판별해 true 또는 false를 반환
// 인수 : 다

const array3 = [1,3];
console.log(array3.includes(4));
// false
console.log(array3.includes(3));
// true

//17. join()
// 배열의 모든 요소를 문자열로 합침
const fireworks =['f','i','r','e','w','o','r','k','s'];
console.log(fireworks.join());
// f,i,r,e...
console.log(fireworks.join(''));
// fireworks
console.log(fireworks.join('-'));
// f-i-r-e-...
