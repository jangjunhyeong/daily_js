const fruits = ["사과","딸기","수박","레몬"];
fruits.forEach(element => {console.log(element)});

fruits.push("포도");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("오렌지","복숭아");
console.log(fruits);


console.log(fruits.indexOf("오렌지"));

console.log(fruits);


fruits.splice(1,2,"자두");
console.log(fruits);

fruits.slice(2)
console.log(fruits.slice(2));

console.log(Array.from('apple'));
console.log(Array.from('123'));

const a = [1,2,3,4,5];
const b = null;
console.log(Array.isArray(a));
console.log(Array.isArray(b));

const snack = ["사탕","초콜렛","과자","마쉬멜로우"]
console.log(snack.at(2));

const p1 = ["수","금","지","화"];
const p2 = ["목","토","천","해"];
const p3 = p1.concat(p2);