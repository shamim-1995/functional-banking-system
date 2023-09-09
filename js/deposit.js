/*
1.add event listener to the deposit button.
2. Get deposit amount from the deposit input field.

2.5 Convert string deposit amount to a number type.

3. clear the deposit input field after getting the value.

4. Get the previous deposit total.

5. Calculate new deposit total and set the value to the deposit total.

6. Get current balance total.

7.Calculate the new balance and set it to the balance total element.
*/ 
    // Step-1:
document.getElementById('btn deposit').addEventListener('click', function(){
    // console.log('Deposit button clicked');


    // Step-2:
    const depositField = document.getElementById('deposit field');

    const newDepositAmountString = depositField.value;

    // console.log(newDepositAmountString);

    const newDepositAmount = parseFloat(newDepositAmountString);

    // console.log(newDepositAmount);

    // Step-3:

    depositField.value = '';

    // Step-4:

     const depositTotalElement = document.getElementById('deposit total');

     const previousDepositTotalString = depositTotalElement.innerText;

     const previousDepositTotal = parseFloat(previousDepositTotalString);

     // Step-5:

     const newDepositTotal = previousDepositTotal + newDepositAmount;

     depositTotalElement.innerText = newDepositTotal;


     // Step-6:

     const balanceTotalElement = document.getElementById('balance total');

     const previousBalanceTotalString = balanceTotalElement.innerText;

     const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

     // Step-7:

     const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;

     balanceTotalElement.innerText = newBalanceTotal;

});