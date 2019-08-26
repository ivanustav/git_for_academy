'usestrict';

let money = 32000,
    income = 'Фриланс',
    addExpenses = 'Бензин, еда, спорт',
    deposit = true,
    mission = 1000000,
    period = 7,
budgetDay = money / 30;

money = +prompt('Ваш месячный доход?', '');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
deposit = confirm('Есть ли у вас депозит в банке?', '');

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

let expensesObl1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
let expensesSum1 = +prompt('Во сколько это обойдется?', '');
let expensesObl2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
let expensesSum2 = +prompt('Во сколько это обойдется?', '');

let budgetMounth = money - expensesSum1 - expensesSum2;
console.log(budgetMounth);

let achievementGoal = mission / budgetMounth;
console.log(Math.ceil(achievementGoal));

budgetDay = budgetMounth / 30;
console.log(budgetDay);

if (budgetDay >= 800) {
    alert('Высокий уровень дохода');
} else if (budgetDay > 300 && budgetDay < 800) {
    alert('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay <= 300) {
    alert('Низкий уровень дохода');   
} else {
    alert('Что-то пошло не так');
}



