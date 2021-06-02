

let monthCredit = 60;

let sumCredit = 6650000;

let persentCreditRate = 25;

let K = ((1 + (persentCreditRate/1200))**monthCredit); //Введено для упрощения читаемости формулы рассчета monthPayment

let monthPayment = Math.round((sumCredit * ((persentCreditRate/1200) * K / (K - 1)))*100)/100;

console.log('Сумма кредита:  ' + sumCredit + '  Ежемесячный платеж:  ' + monthPayment);

    for(i = 1; i <= monthCredit; i++){

        let monthPercentPayment = Math.round((sumCredit * (persentCreditRate/1200)*100))/100;

        let monthBodyPayment = Math.round((monthPayment - monthPercentPayment)*100)/100;

        sumCredit = Math.round((sumCredit - monthBodyPayment)*100)/100;

        console.log(i + '  Погашение тела кредита:  ' + monthBodyPayment + '  Погашение процентов по кредиту:  ' + monthPercentPayment);
        console.log('Тело кредита к началу следующего месяца:  ' + sumCredit);
    }

