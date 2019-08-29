'usestrict';

let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?', 50000);
        } while(isNaN(money) || money === '' || money === null);
        
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 7,
    asking: function () { 
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
            sum = 0,
            ask,
            answer;
            appData.addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?', '');
            for (let i = 0; i < 2; i++) {
                if (i === 0) {
                    ask = prompt('Введите обязательную статью расходов', 'Квартплата');
                    appData.expenses[ask] = answer;
                }
                if (i === 1) {
                    ask = prompt('Введите обязательную статью расходов', 'Бензин');
                    appData.expenses[ask] = answer;
                }
                do {
                    answer = prompt('Во сколько это обойдется?', 2500); 
                } while(isNaN(answer) || answer === '' || answer === null);
                    
                appData.expensesMonth += +answer;
                    
            }
             
        return appData.expensesMonth;
    },
    budget: money,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,
    getAccumulatedMonth: function() {
        let accumulatedMonth = appData.budget - appData.expensesAmount;
        return accumulatedMonth;
    },
    getTargetMonth: function() {
        let result = Math.round(appData.mission / appData.getAccumulatedMonth());
            if (result > 0) {
                console.log('Цель будет достигнута');
            } else {
                console.log('Цель не будет достигнута');
            }
        
        return result;
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300 && appData.budgetDay < 800) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay >= 0 && appData.budgetDay <= 300) {
            return ('Низкий уровень дохода');   
        } else {
            return ('Что-то пошло не так');
        }
    }


    
};

console.log(appData.budget);
console.log(appData.expenses);      
console.log(appData.asking());

let budgetDay = appData.getAccumulatedMonth() / 30;

console.log(appData.getStatusIncome());

console.log(appData.getAccumulatedMonth());
console.log(appData.getTargetMonth());