// 1~10 까지 로그 찍기 

let a = 0;
console.log(a);

let timer = setInterval(function(){
	a++;
	console.log(a);

	if(a>=10){
	clearInterval(timer);}
},64)

//syntax에서 틀리면 답이 없다.
//syntax는 깜지를 써서라도 외우자

let b =10;
console.log(b);

let timer2 = setInterval(function(){
	
	b--;
	console.log(`b의 값은 "${b}" 이다.`);

	if(b===0){
		clearInterval(timer2);
	}

})