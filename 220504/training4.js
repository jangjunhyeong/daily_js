// 필요했던 부분인데,
// 어제 8번까지 조건식을 반복하고, 마치려고 했는데,
// 버튼을 누를 때마다 계~~~~속 반복을 해가지고
// if문으로 한 번 더 제어를 했었다.
// 해결해줄 명령어 발견

// break
// 결과값이 거짓이 될때 반복문을 빠져나오게 만드는 명령어

for (let i=0; i<10; i++){
	console.log(i);
}
// 출력값이 0~9 까지 다나옴

for (let i=0; i<10; i++){
	if( i===5){
		break;
	}
	console.log(i);
}
// 출력값이 0~4 까지 진행된다.

// 유용하게 작성할 수 있을듯!

// 느낀점은 그냥 i를 i<6 이렇게 하면 되는 거 아닌가 싶긴함