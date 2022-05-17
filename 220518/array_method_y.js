const a = ['apple','air','ad','avoid','bee','bird','banana'];

// 어제 했던 첫글자 추출해서 모아줘!

// 기본형 테스트
// console.log('apple'.startsWith('a'));
// true

// for(let i=0; i<a.length; i++){
// 	if(a[i].startsWith('b')){
// 		console.log(a[i]);
// 	}
// }
// bee bird banana
let count = 0;
for(let i=0; i<a.length; i++){
	if(a[i].startsWith('a')){
		console.log(a[i])
		count++
	}
}
console.log(count);
// apple air ad avoid
// count 값은 4