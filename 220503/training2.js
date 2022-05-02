let jam = {

	name :'jam',
	age : 30,
	hobby :'reading books'
};

// for in 문을 이용한 객체 프로퍼티 출력
let prop;
for (prop in jam){
	console.log(prop, jam[prop]);
}

// 배열 출력해보기
let colorArr = ['red','orange','yellow','green','blue']
console.log(colorArr[3]);
// Arr의 4번째 → green 출력

// 배열의 legnth 프로퍼티 변경
let arr = [];
console.log(arr.length);
// 0 출력
arr [100]= 100;
console.log(arr.length);
// 아~ arr의 값을 1~100까지 다 지정하지 않아도 맨 마지막 arr의 값만
// 지정해주면 그 arr값으로 length가 지정되는구나~ 알수 있다.
// 마음대로 해당 배열 순서에 값을 지정해줘도 삳관이 없겠네

let arr2 = [0,1,2];
console.log(arr2.length);
// 출력값 3 나온다. 당연하지!

arr2.length =5;
// 네? 아니잖아요! → 일단 go
console.log(arr2);
// 출력값 [0,1,2, <2 emtpy items]
arr2.length =2;
// 어? 아니잖아요! → 일단 go
console.log(arr2);
// 이러면 2번째까지만 출력되는구나 어디서부터? 앞에서부터
console.log(arr[2]);
// → undefined 가 출력
// 왜? arr2.length가 3은 맞긴한데, 이후에 2로 지정을 해줬으니까
// 앞에 선언한 내용 및 알고있던 사실은 모두 없어지는 거.
