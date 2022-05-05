//repeat 

const str1 = "hi"

console.log(str1.repeat(3));
// hihihi
console.log(str1);
// 주의할 점은 원본 객체는 바뀌지 않는다는 점.

// 공식문서에서 새로운 ~를 반환한다 라는 문구에서는
// 원본이 변경되지 않는다는 의미로 가져가기!!


//indexOf

const str2 = '안녕하세요 김치찌개를 좋아하는 된장찌개입니다.';

console.log(str2.indexOf('김치찌개'));
// 6출력 안 녕 하 세 요 ★'김'★ 치찌개를 좋아하는 된장찌개입니다.
console.log(str2.indexOf('부대찌개'));
// - 출력  문자열에 포함이 안된다는 의미