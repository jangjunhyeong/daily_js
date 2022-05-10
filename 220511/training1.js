// 똑딱이 만들기

let a = "똑"
let b = "딱"
console.log(a);
console.log(b);


let isStatus = true
let value = 0;
const timer =setInterval(function(){
	if(isStatus === true){
		console.log(a);
		isStatus = false;
	} else{
		console.log(b);
		isStatus = true;
		value++;
		// console.log(`현재 똑딱이 횟수는 ${value} 회 입니다.`)
	}
	if(value>=10){
		clearInterval(timer);
		console.log(`현재 똑딱이 횟수가 ${value}회 이므로 종료합니다.`)
		// 계속 나오면 짜증나니까 clearInterval이 될 때 메시지가 뜨고 종료
	}


},100)