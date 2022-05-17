const p1 = ["수","금","지","화"];
const p2 = ["목","토","천","해"];
const p3 = p1.concat(p2);
console.log(p3);

const p = [1,2,3,4,5];
const numValue = (currentValue) => currentValue <10;
console.log(p.every(numValue));


const val = [1,5,7];
const result = val.filter(number=>number>4);
console.log(result);
// 5,7

const val2 = [2,4,5,9,11];
const result2 = val2.findIndex(number=>number>5);
console.log(result2);
// 3 

const w = ["맑음","흐림","비","눈"];
console.log(w.includes("우박"));
console.log(w.includes("흐"));
console.log(w.includes("흐림"));

//false

const f = ['f','i','r','e','w','o','r','k','s'];
console.log(f.join());
console.log(f.join(''));
console.log(f.join('-'));
/*
f,i,r,e,w,o,r,k,s
fireworks
f-i-r-e-w-o-r-k-s
*/

const val3= [1,2,5];
console.log(val3.map(x=>x+2));
// [3, 4, 7];

const val4 = [5,8,1,10,6,3,2];
const val5 = ['a','d','c','e','z','i','u'];
console.log(val4.sort());
console.log(val5.sort());

// [1, 10, 2, 3, 5,  6, 8]
// ['a', 'c', 'd','e', 'i', 'u','z']

const val6 = [1,10,20,50,4,2];
const vlaue = Element=>Element<0
console.log(val6.some(vlaue));
// false

const s = [1,'2','3a',4,'5',"hello"];
console.log(s.toString());