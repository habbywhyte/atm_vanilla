// your code goes here!
var checkingDepositButton = document.querySelector("#checkingDepositButton")
var checkingWithdrawalButton = document.querySelector("#checkingWithdrawalButton")
var savingsDepositButton = document.querySelector("#savingsDepositButton")
var savingsWithdrawalButton = document.querySelector("#savingsWithdrawalButton")
var checkingsBalance = 0
var savingsBalance = 0


var bothBalances = function () {
 checkingsBalance + savingsBalance
 return checkingsBalance + savingsBalance
};

var inputCheckings = function() {
 var amount = parseInt( document.querySelector('#checkingAmount').value );
 checkingBalanceDiv = document.querySelector('#checkingBalanceDiv');
 document.querySelector('#checkingAmount').value = '';

 checkingsBalance = amount + checkingsBalance
 checkingBalanceDiv.innerHTML = "$" + checkingsBalance

};

var outputCheckings = function() {
 var amount = parseInt( document.querySelector('#checkingAmount').value );
 checkingBalanceDiv = document.querySelector('#checkingBalanceDiv');
 document.querySelector('#checkingAmount').value = '';
 var remainder = checkingsBalance - amount

 if (remainder >= 0) {
   checkingsBalance = checkingsBalance - amount
   checkingBalanceDiv.innerHTML = "$" + checkingsBalance
 }
 else {
   if (bothBalances() - amount >= 0) {

     savingsBalance = savingsBalance + remainder
     checkingsBalance = 0
     checkingBalanceDiv.innerHTML = "$" + checkingsBalance
     savingsBalanceDiv.innerHTML = "$" + savingsBalance
   }
   else {
     checkingBalanceDiv.innerHTML = "$" + checkingsBalance
   }
 }

var inputSavings = function() {
 amount = parseInt( document.querySelector('#savingsAmount').value );
 checkingBalanceDiv = document.querySelector('#savingsBalanceDiv');
 document.querySelector('#savingsAmount').value = '';

 savingsBalance = amount + savingsBalance
 savingsBalanceDiv.innerHTML = "$" + savingsBalance
};

var outputSavings = function() {
 amount = parseInt( document.querySelector('#savingsAmount').value );
 checkingBalanceDiv = document.querySelector('#savingsBalanceDiv');
 document.querySelector('#savingsAmount').value = '';


 if (savingsBalance - amount < 0) {
   savingsBalanceDiv.innerHTML = "$" + savingsBalance
 }
 else if (checkingsBalance > 0) {
   savingsBalance = savingsBalance - amount
   savingsBalanceDiv.innerHTML = "$" + savingsBalance
 }

 };


checkingDepositButton.addEventListener( "click", inputCheckings );
checkingWithdrawalButton.addEventListener("click", outputCheckings );
savingsDepositButton.addEventListener("click", inputSavings );
savingsWithdrawalButton.addEventListener("click", outputSavings );
