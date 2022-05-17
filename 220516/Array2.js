// 7. splice()
// 배열에서 요소를 추가하거나 삭제 
// 삭제 또는 교체하거나 새 요소를 추가
// array.spice(start,deleteCount,'items1','items2',...);
// 인수 : 전부 다
const coffee = ["아메","라떼","모카","더치","바닐라"];
console.log(coffee);
coffee.splice(1,1,"핫초코");
console.log(coffee);
// [아메, 핫초코, 모카, 더치, 바닐라];
coffee.splice(2,0,"고구마");
console.log(coffee);

//8.slice()
//배열의 일부를 추출한 새 배열을 반환합니다.
// arr.slice(begin,end);
// 인수 숫자
const flower = ["장미","해바라기","튤립","코스모스","데이지"];
console.log(flower.slice(2));
console.log(flower.slice(2,4));
console.log(flower.slice(-2));
console.log(flower.slice(2,-1));

//9. form()
// 유사 배열 또는 반복 가능한 객체로부터 새로운 Array 인스턴스 생성합니다.
console.log(Array.from('ganadara'));
// Array[g,a,n,a,d,a,r,a];

//10. isArray()
// 인수 : 다
// 매개변수가 배열이면 참을, 아니면 거짓을 반환
const hi = ["안녕","봉주르","니하오"];
console.log(Array.isArray(hi));
//ture

//11. at()
// 주어진 인덱스의 요소를 반환합니다. 음수값을 지정하면
//인덱스를 배열의 끝부터 셉니다.
// 인수 : 숫자
const num = ['1','2','3','4'];
let numValue= num.at(1);
console.log(numValue);
// 몇번째인지 세주네 값 : 2