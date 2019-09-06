'use strict';

let body = document.querySelector('body'),
    books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    advertising = document.querySelector('.adv'),
    target = document.querySelectorAll('a'),

    ul = document.querySelectorAll('ul'), //список книг
    li = document.querySelectorAll('li'), //его элементы

    chapter8 = document.createElement('li'); //добавление элемента для главы 8


body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)'); // задаем новый фон

books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[3], book[2]);
books[0].insertBefore(book[5], book[2]); 

advertising.remove('adv');



target[4].textContent ='"Книга 3. this и Прототипы Объектов"';



ul[2].appendChild(chapter8);  
chapter8.textContent = 'Глава 8: За пределами ES6'; 
 

console.log(ul[0]);
console.log(li);
ul[5].insertBefore(li[55], li[48]);
ul[5].insertBefore(li[48], li[52]);
ul[0].insertBefore(li[6], li[4]);
ul[0].insertBefore(li[8], li[4]);





