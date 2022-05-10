let a = 5;
let b = 4;
let c = 5;

function valueTest() {
	if (typeof a === "number"){
		console.log("a야 너는 숫자열이구나?")
	} else{
		console.log("a야 너는 숫자열이 아니구나?")
	}
}
valueTest();
// 호출해주지 않으면 로그에 뜨지 않는다.
// a야 너는 숫자열이구나? 를 뱉는다.


function valueTestTwo(){
	if (a===c){
		console.log("a와 c는 같아요")
	}
	else{
		console.log("a와 c는 달라도 너무달라")
	}
	if (a===b===c){
		console.log("a와 b와 c는 같아요")
	}else{
		console.log("a와 b와 C는 다르지만 이제 같게 만들어줄겁니다.")
		let a = 1;
		let b = 1;
		let c = 1;
		console.log(a,b,c);
	}
	if (a==b==c){
		console.log("a와 b와 c는 이제 모두 같습니다.")
	}else {
		console.log("a와 b와 c는 여전히 다릅니다.")
	}
	// 아 이 if는 새로운 if니까 여기 안에서만 놀고,
	// global 값을 가져오게 되는구나.
 // 줄바꿈을 한다면 1=1=1=a=b=c가 된다!
 // let a,b,c=1은 local 변수임을 할 수 있다.
}
valueTestTwo();

// 질문과 답변
// a==b==c 방식으로 함수를 꾸렸는데..
// -> 제어가 힘들 수 있고 꼬일 수 있기때문에 한번에 좌항 우항 방식으로 두가지끼리만 비교하는 방식이 좋음
// 삼항연산자 방식이 있는데 (a===b)? true:false
// if (a===b){//true}else{}


// and 방식으로 처리는 방식 (a===b)&&(b===c) 비교하는 방법 (결국에는 a===c 결과도출)

//Q2 let a,b,c를 새로 1로 만들어줘서 값을 1로 동일하게 해주었는데 console창에서 a와 b와 c는 여전히 다릅니다. 라는 결과값 도출되었는데... if 함수 내 local인가요?
//A2 재할당 시킬꺼면 let 아니라 그냥 a=1; b=1; c=1; 방식으로 재할당시켜주면 된다.

// 재할당을 시켜줬더니 a와 b와 c는 이제 모두 값습니다. 를 뱉어냄 -> 해결