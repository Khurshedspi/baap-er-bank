// step-1: add event listener to the deposit button

document.getElementById('deposit-btn').addEventListener('click', function(){
//    step-2: get the deposit amout from the deposit input field 

// for input field use .value to the value inside the input field

const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString)


// step-3: get the current deposit total 
// for non-input(element other than input , textarea) use innerText to get the text

const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
depositTotalElement.innerText = newDepositAmount;
const previousDepositTotal = parseFloat(previousDepositTotalString);



// step-4: add numbers to set the total deposit  
const  currentDepositTotal  = previousDepositTotal + newDepositAmount;

// set the deposit total 

depositTotalElement.innerText = currentDepositTotal;



// step-5: get balance current total 

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const preveiousBalanceTotal = parseFloat (previousBalanceTotalString);
 

// step-6: calculate current total balance 
const currentBalanceTotal =preveiousBalanceTotal + newDepositAmount;

// set the balance total 

balanceTotalElement.innerText =currentBalanceTotal;


// step-7: clear the deposit field 
depositField.value = ' ';


})