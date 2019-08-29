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

    //это тоже должно быть именно здесь!)
    //в свойствах объекта не допускай беспорядка, пожалуйста
    budget: money,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0, 

    //пошли методы объекта:

    asking: function () {

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
            //вопросы перенеси повыше, чтоб путаницы не было

        let ask,
            answer;
        
		for (let i = 0; i < 2; i++) {

            ask = prompt('Введите обязательную статью расходов');

            do {
                answer = prompt('Во сколько это обойдется?');
            }
            while (isNaN(answer) || answer === '' || answer === null);
            
			appData.expenses[ask] = +answer; //записываем в объект expenses, да, и всё-таки можно не дублировать эту строку, так как названия переменных одинаковые, а кол-во итераций регулируется циклом
        } /*чтобы проверить записались ли в объект наши данные, когда программа отработает, прямо в консоли напиши:
        
        appData.expenses 
        
        и сможешь увидеть статьи расходов и цены :) */
    },

// метод подсчёта расходов за месяц
getExpensesMonth: function() {
    for (let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key];
    }
},

//новый метод вместо getAccumulatedMonth, тебе необходимо было обратиться к свойствам и..: 
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
//не заморачивайся с return, это больше не имеет смысла. Производим элементарные арифметические действия, а результат записывается в объект :) 

    getTargetMonth: function() {

        let result = Math.round(appData.mission / appData.budgetMonth); //поправила тут
            if (result > 0) {
                console.log(`Вы достигните цели через: ${result} месяцев.`);
            } else {
                console.log('Цель не будет достигнута');
            }
    },

    getStatusIncome: function() {

        if (appData.budgetDay >= 800) {
            console.log('Высокий уровень дохода');
        } else if (appData.budgetDay > 300 && appData.budgetDay < 800) {
            console.log('Средний уровень дохода');
        } else if (appData.budgetDay >= 0 && appData.budgetDay <= 300) {
            console.log('Низкий уровень дохода');   
        } else {
            console.log('Что-то пошло не так');
            
        }
    }

};

//!!методы вызывай без вывода в консоль :) Ты теперь обращаешься к объекту
appData.asking(); 
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome()
appData.getExpensesMonth();
/*вызови, когда оно будет готово*/


//А вот то, что необходимо вывести именно в консоль:

console.log('Расходы за месяц:' + appData.expensesMonth);


/*будет отображать данные, когда посчитаешь расходы в методе. пока тут 0*/

//ещё надо достижение цели
//и уровень дохода