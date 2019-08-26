'usestrict';

// 1. пункт

let lang = 'ru';
let daysWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let daysWeekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru') {
    alert(daysWeekRu);
} else {
    alert(daysWeekEn);
}

// через switch-case
switch (lang) {
    case 'ru':
        alert(daysWeekRu);
        break;

    default:
        alert(daysWeekEn);
        break;
}

// через многомерный массив без ифов и switch

let arrWeekLang = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

(lang === 'ru') ? alert(arrWeekLang[0]) : alert(arrWeekLang[1]);

//  2. пункт

let namePerson = 'Артём';

(namePerson === 'Артём') ? console.log('Директор') : 
(namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');
