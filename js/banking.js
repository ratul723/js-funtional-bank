function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountText = inputField.value
    const amountValue = parseFloat(inputAmountText)
    //clear input field
    inputField.value = ''

    return amountValue;

}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText
    const previousAmount = parseFloat(totalText)
    totalElement.innerText = previousAmount + amount
}

function updateBalance(balanceAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + balanceAmount
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - balanceAmount
    }
}


document.getElementById('diposit-button').addEventListener('click', function () {
    /*const depositeInput = document.getElementById('Deposit-amount')
    const despositeAmountText = depositeInput.value
    const despositeAmount = parseFloat(despositeAmountText)*/

    // get current diposite --
    /*const depostieTotal = document.getElementById('deposite-total')
    const depositeTotalText = depostieTotal.innerText
    const previousTotalAmount = parseFloat(depositeTotalText)
    depostieTotal.innerText = previousTotalAmount + despositeAmount*/

    //get balance total --
    /*const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)

    balanceTotal.innerText = previousBalanceTotal + despositeAmount*/


    const despositeAmount = getInputValue('Deposit-amount')
    updateTotalField('deposite-total', despositeAmount)
    updateBalance(despositeAmount, true)






})

//get withdraw total
document.getElementById('Withdraw-button').addEventListener('click', function () {
    /*const withdrawInput = document.getElementById('withdraw-amount')
    const withdrawAmountText = withdrawInput.value
    const withdrawAmount = parseFloat(withdrawAmountText)*/

    // update withdraw total--
    /*const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText
    const withTotalAmount = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = withTotalAmount + withdrawAmount*/

    //get balance total--
    /*const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount*/
    const withdrawAmount = getInputValue('withdraw-amount')
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false)

})