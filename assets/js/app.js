

function creditCalc() {

let monthCredit = +duration.value;

let sumCredit = +creditSum.value;

let persentCreditRate = +percent.value;

let K = ((1 + (persentCreditRate/1200))**monthCredit); //Введено для упрощения читаемости формулы рассчета monthPayment

let monthPayment = Math.round((sumCredit * ((persentCreditRate/1200) * K / (K - 1)))*100)/100;

let totalOverpay = 0;

let arrToHtml = [];

//console.log('Сумма кредита:  ' + sumCredit + '  Ежемесячный платеж:  ' + monthPayment);

    for(i = 1; i <= monthCredit; i++){

        let monthPercentPayment = Math.round((sumCredit * (persentCreditRate/1200)*100))/100;
        let monthBodyPayment = Math.round((monthPayment - monthPercentPayment)*100)/100;
        totalOverpay += monthPercentPayment;
        
        if(i < monthCredit){
        
        sumCredit = Math.round((sumCredit - monthBodyPayment)*100)/100;

        arrToHtml.push(`<tr><th>${i}</th> <th>${monthBodyPayment}</th> <th>${monthPercentPayment}</th> <th>${monthPayment}</th> <th>${sumCredit}</th></tr>`);
        //console.log('Тело кредита к началу следующего месяца:  ' + sumCredit);
        
        }else{

        sumCredit = Math.round((sumCredit - monthBodyPayment)*100)/100;

        monthBodyPayment = Math.round((sumCredit + monthBodyPayment)*100)/100;

        let lastMonthPayment = Math.round((monthBodyPayment + monthPercentPayment)*100)/100;

        sumCredit = 0;
        
        arrToHtml.push(`<tr><th>${i}</th> <th>${monthBodyPayment}</th> <th>${monthPercentPayment}</th> <th>${lastMonthPayment}</th> <th>${sumCredit}</th></tr>`);
        //arrToHtml.push(i + '  Погашение тела кредита:  ' + monthBodyPayment + '  Погашение процентов по кредиту:  ' + monthPercentPayment + '  В сумме:  ' + lastMonthPayment);
        //console.log('Тело кредита к началу следующего месяца:  ' + sumCredit);

        }

    }

    overpay.value = totalOverpay.toFixed(2) + '   ГРН.'
    schedulePayments.innerHTML = arrToHtml.join('');
    //document.write('Переплата по кредиту составит: ' + Math.round(totalOverpay*100)/100 + '  грн.');
}