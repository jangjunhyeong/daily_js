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