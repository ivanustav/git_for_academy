let money = 32000,
    income = 'Фриланс',
    addExpenses = 'Бензин, еда, спорт',
    deposit = true,
    mission = 1000000000,
    period = 7,
budgetDay = money / 30;


//  2. Используя методы и свойства:

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log(`"Период ${period} месяцев" и "Цель заработать ${mission} рублей"`);

console.log(addExpenses.toLowerCase().split(', '));

console.log(budgetDay);
console.log(money % 30);