

let monthCredit = 60;

let sumCredit = 59999999900;

let persentCreditRate = 25;

let K = ((1 + (persentCreditRate/1200))**monthCredit); //Введено для упрощения читаемости формулы рассчета monthPayment

let monthPayment = Math.round((sumCredit * ((persentCreditRate/1200) * K / (K - 1)))*100)/100;

let totalOverpay = 0;

console.log('Сумма кредита:  ' + sumCredit + '  Ежемесячный платеж:  ' + monthPayment);

    for(i = 1; i <= monthCredit; i++){

        if(i < monthCredit){
        
        let monthPercentPayment = Math.round((sumCredit * (persentCreditRate/1200)*100))/100;

        totalOverpay += monthPercentPayment;

        let monthBodyPayment = Math.round((monthPayment - monthPercentPayment)*100)/100;

        sumCredit = Math.round((sumCredit - monthBodyPayment)*100)/100;

        console.log(i + '  Погашение тела кредита:  ' + monthBodyPayment + '  Погашение процентов по кредиту:  ' + monthPercentPayment + '  В сумме: ' + monthPayment);
        console.log('Тело кредита к началу следующего месяца:  ' + sumCredit);
        
        }else{

        let monthPercentPayment = Math.round((sumCredit * (persentCreditRate/1200)*100))/100;

        totalOverpay += monthPercentPayment;

        let monthBodyPayment = Math.round((monthPayment - monthPercentPayment)*100)/100;

        sumCredit = Math.round((sumCredit - monthBodyPayment)*100)/100;

        monthBodyPayment = Math.round((sumCredit + monthBodyPayment)*100)/100;

        let lastMonthPayment = Math.round((monthBodyPayment + monthPercentPayment)*100)/100;

        sumCredit = 0;

        console.log(i + '  Погашение тела кредита:  ' + monthBodyPayment + '  Погашение процентов по кредиту:  ' + monthPercentPayment + '  В сумме:  ' + lastMonthPayment);
        console.log('Тело кредита к началу следующего месяца:  ' + sumCredit);

        }

    }

console.log('Переплата по кредиту составит: ' + Math.round(totalOverpay*100)/100 + '  грн.');