let arr = [];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function addArr (elem) {
    for (let i = 0; i < elem; i++) {
        let rand = randomInteger(1, 1000);
        console.log(rand);
        arr[i] = rand;
    }
    return arr;
}

console.log(addArr(7));

function searchElem() {
    return arr.forEach(em => {
        if (String(em).search(/(2|4)/) === 0) 
        console.log('Нашел вот эти числа:' + em);
    });
}

console.log(searchElem());

function isPrime(n) {
    for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
    return n > 1;
}
  
const res = [...Array(100)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n');

console.log(res);
