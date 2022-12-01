function getdepositeInput() {
    const depositeInput = document.getElementById('Deposit-amount')
    const despositeAmountText = depositeInput.value
    const despositeAmount = parseFloat(despositeAmountText)
    //clear input field
    depositeInput.value = ''

    return despositeAmount;

}



document.getElementById('diposit-button').addEventListener('click', function () {
    /*const depositeInput = document.getElementById('Deposit-amount')
    const despositeAmountText = depositeInput.value
    const despositeAmount = parseFloat(despositeAmountText)*/

    // get current diposite 
    const depostieTotal = document.getElementById('deposite-total')
    const depositeTotalText = depostieTotal.innerText
    const previousTotalAmount = parseFloat(depositeTotalText)
    depostieTotal.innerText = previousTotalAmount + despositeAmount
    console.log('depositeTotalText')


    //get balance total 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)

    balanceTotal.innerText = previousBalanceTotal + despositeAmount


})

//get withdraw total
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount')
    const withdrawAmountText = withdrawInput.value
    const withdrawAmount = parseFloat(withdrawAmountText)
    // update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText
    const withTotalAmount = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = withTotalAmount + withdrawAmount

    //clear withdraw input
    withdrawInput.value = ''

    //get balance total
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount

})