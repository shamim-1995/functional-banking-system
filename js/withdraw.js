/*
1.add event listener to the withdraw button.
2. Get withdraw amount from the withdraw input field.

2.5 Convert string withdraw amount to a number type.

3. clear the withdraw input field after getting the value.

4. Get the previous withdraw total.

5. Calculate new withdraw total and set the value to the withdraw total.

6. Get previous balance total.

7.Calculate the new balance and set it to the balance total element.
*/
// Step-1:
document.getElementById('btn withdraw').addEventListener('click', function () {
    // console.log('Withdraw button clicked');


    // Step-2:
    const withdrawField = document.getElementById('withdraw field');

    const newWithdrawAmountString = withdrawField.value;

    // console.log(newWithdrawAmountString);

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // console.log(newWithdrawAmount);

    // Step-3:

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number.');
        return;
    }

    // Step-4:

    const withdrawTotalElement = document.getElementById('withdraw total');

    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-5:

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = newWithdrawTotal;

    // If you have not enough money.
    // if (newWithdrawAmount > previousBalanceTotal) {
    //     alert('You have not enough money.');
    //     return;
    // }


    // Step-6:

    const balanceTotalElement = document.getElementById('balance total');

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // Step-7:

    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal;

});