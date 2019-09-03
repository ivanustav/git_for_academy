'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
advertising = document.querySelector('.adv');


document.body.style.backgroundImage = 'url(/lesson07/task1/image/adv.jpg)';
books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[3], book[2]);
books[0].insertBefore(book[5], book[2]);

advertising.remove('adv');


let target = document.querySelectorAll('a');
target.textContent('Книга 3. this и Прототипы Объектов');






