// 배열 단위의 자동 슬라이더
const arr =["사과","딸기","수박","포도","자몽"]
// console.log(arr);

let indexValue = 0;
let count = 0;

let timer = setInterval(function(){
	if( indexValue<arr.length) {
		console.log(arr[indexValue]);
		indexValue++;
	} else{
		indexValue =0;
	}
},1000);

/*  마지막 arr 순서인 자몽이 끝나면 2초 후에 사과로 다시 돌아간다.
자몽 - 자몽+1 (= 배열에 없는 값) - 0 초기화와 동시에 사과가 출력
그래서 2초가 걸린다.

이거 1초로 다시 못하나? */