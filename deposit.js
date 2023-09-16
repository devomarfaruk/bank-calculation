document.getElementById("deposit-submit").addEventListener('click', function () {


    const deposit = valueFromInput('deposit-amount');

    const previousDeposit = getTextFromId('previous-deposit')

    const currentDeposit = deposit + previousDeposit;
    document.getElementById('previous-deposit').innerText = currentDeposit;

    const previousTotal = getTextFromId('total-money');


    const currentTotal = deposit + previousTotal;
    document.getElementById("total-money").innerText = currentTotal;

})