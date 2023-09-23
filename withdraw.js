document.getElementById("withdraw-submit").addEventListener('click', function () {

    const previousWithdrawMoney = valueFromInput('withdraw-amount');

    const withdrawAccount = getTextFromId('previous-withdraw');

    document.getElementById("previous-withdraw").innerText = previousWithdrawMoney + withdrawAccount;

    // for test purpose

    const previousTotal = getTextFromId('total-money');

    document.getElementById("total-money").innerText = previousTotal - previousWithdrawMoney;

})