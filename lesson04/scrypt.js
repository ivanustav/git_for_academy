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

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expensesObl1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    expensesSum1 = +prompt('Во сколько это обойдется?', ''),
    expensesObl2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
expensesSum2 = +prompt('Во сколько это обойдется?', '');

let budgetMounth = money - expensesSum1 - expensesSum2;

let achievementGoal = mission / budgetMounth;

budgetDay = budgetMounth / 30;



let getStatusIncome = function() {
    if (budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay > 300 && budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay <= 300) {
        return ('Низкий уровень дохода');   
    } else {
        return ('Что-то пошло не так');
    }
};

alert(getStatusIncome());

// 1. пункт обязательного задания


// сумма расходов
function getExpensesMonth(expensesOne, expensesTwo) {
    return expensesOne + expensesTwo;
}
alert(getExpensesMonth(expensesSum1, expensesSum2));

// Накопления за месяц
function getAccumulatedMonth(inc, consum) {
    let accumulatedMonth = inc - consum;
    return accumulatedMonth;
}
alert(getAccumulatedMonth(money, getExpensesMonth(expensesSum1, expensesSum2)));

//  Достижение цели
let getTargetMonth = function() {
    return Math.round(mission / getAccumulatedMonth(money, getExpensesMonth(expensesSum1, expensesSum2)));
};
alert(getTargetMonth());


//  2 пункт обязательного задания

console.log(getAccumulatedMonth(money, getExpensesMonth(expensesSum1, expensesSum2)));
console.log(getTargetMonth());