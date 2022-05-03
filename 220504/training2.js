//5/3 수업 내용에서 if 문법을 3번써서 문서를 제어하는 법을 배웠다.
// if 문 공부 해보기

//내 점수가 71~80 점이면 C , 81~90점이면 B, 91점~100점 A
// 아예 이하는 '탈락입니다' 를 출력하는 조건 if문 써보기

const math = 85;
// 내 수학점수는 85점이다 이 정도로 지정해보기

if (math > 90){
	console.log('A');
} else if (math >80){
	console.log('B');
} else if (math>70){
	console.log('C');
} 

// 이도저도 다 아니다. else 그냥 마지막 지푸라기마저 잡지 못했다.
else [
	console.log('탈락입니다.')
]
// 출력값 B
