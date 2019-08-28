'usestrict';

let money,
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
    deposit = confirm('Есть ли у вас депозит в банке?', ''),
    mission = 1000000,
    period = 7;

let start = function() {
    do {
        money = prompt('Ваш месячный доход?', 50000);
    } while(isNaN(money) || money === '' || money === null);
    
};

start();

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1,
    expenses2;

function getExpensesMonth() {
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов', 'Квартплата');
        }
        if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов', 'Бензин');
        }
        
            sum += +prompt('Во сколько это обойдется?', 2500);   
        
              
    }
        
    return sum;
}
    
let expensesAmount = getExpensesMonth();
console.log(expensesAmount);

let budgetDay = getAccumulatedMonth(money, expensesAmount) / 30;

// Накопления за месяц
function getAccumulatedMonth(inc, consum) {
    let accumulatedMonth = inc - consum;
    return accumulatedMonth;
}

//  Достижение цели
let getTargetMonth = function() {
    let result = Math.round(mission / getAccumulatedMonth(money, expensesAmount));
    if (result > 0) {
        console.log('Цель будет достигнута');
    } else {
        console.log('Цель не будет достигнута');
    }
    
    return result;
};

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

console.log(getStatusIncome());

console.log(getAccumulatedMonth(money, expensesAmount));
console.log(getTargetMonth());