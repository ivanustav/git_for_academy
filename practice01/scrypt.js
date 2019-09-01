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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 7,

    budget: money,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0, 



    asking: function () {
        let itemIncome,
            cashIncome;
            if (confirm('Есть ли у вас доп заработок?')) {
                
                do {
                    itemIncome =  prompt('Какой у вас есть доп зарабаток?', 'Таксую');
                } while(Number(itemIncome) || itemIncome === '' || itemIncome === null);
        
               
                do {
                    cashIncome = prompt('Сколько в месяц зарабатываете на этом?', '10000');
                } while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
                
                appData.income[itemIncome] = cashIncome;
            }
        
        

            let addExpenses;
            do {
                addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
            } while(Number(itemIncome) || itemIncome === '' || itemIncome === null);

            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?'); 

        let ask,
            answer;
        
        
		for (let i = 0; i < 2; i++) {

           
            do {
                ask = prompt('Введите обязательную статью расходов');
            } while(Number(ask) || ask === '' || ask === null);
            do {
                answer = prompt('Во сколько это обойдется?');
            }
            while (isNaN(answer) || answer === '' || answer === null);
            
			appData.expenses[ask] = +answer; 
        }
        
        
    },

// метод подсчёта расходов за месяц
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },

    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {

        let result = Math.round(appData.mission / appData.budgetMonth); //поправила тут
            if (result > 0) {
                return `Вы достигните цели через: ${result} месяцев.`;
            } else {
                return 'Цель не будет достигнута';
            }
    },

    getStatusIncome: function() {

        if (appData.budgetDay >= 800) {
            return 'Высокий уровень дохода';
        } else if (appData.budgetDay > 300 && appData.budgetDay < 800) {
            return 'Средний уровень дохода';
        } else if (appData.budgetDay >= 0 && appData.budgetDay <= 300) {
            return 'Низкий уровень дохода';   
        } else {
            return 'Что-то пошло не так';
            
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            } while(isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
            } while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
            
            
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }


};

function LetterCapitalize(arr) { 
    let str = arr.join(', ');
    return str.split(" ").map(item=>item.substring(0,1).toUpperCase()+item.substring(1)).join(", ");
  }

appData.asking(); 
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();


console.log('Расходы за месяц:' + appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log(LetterCapitalize(appData.addExpenses));



function overview() {
    console.log('Наша программа включает в себя:');
    for (let key in appData) {
        
        console.log('Ключ: ' + key + ' значение: ' + appData[key]);
    }
    
}
overview();

