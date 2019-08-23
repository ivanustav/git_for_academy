//  Усложненное задание

let num = 266219;

num = String(num).split('');
console.log(num);

let result = num.reduce((a, b) => a * b);
console.log(result);

result **= 3;
console.log(result);

let resultTwo = String(result).slice(0, 2);
console.log(resultTwo);









