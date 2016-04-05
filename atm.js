// your code goes here!
$("document").ready(function(){
  console.log("working");

var checkingBalance = 0;
var checkingInput = $("#checkingAmount");
var checkingDepositButton = $("#checkingDepositButton");
var checkingWithdrawButton = $("#checkingWithdrawalButton");
var checkingBalanceDiv = $("#checkingBalanceDiv")

var savingsBalance = 0;
var savingsInput = $("#savingsAmount");
var savingsDepositButton = $("#savingsDepositButton");
var savingsWithdrawButton = $("#savingsWithdrawalButton");
var savingsBalanceDiv = $("#savingsBalanceDiv");



//add an event listener to the deposit button for a click
//when it gets clicked console.log ("I was clicked")
//get value within textbox and console.log

function depositChecking(){
  console.log("I was clicked");
  var checkingAmount = parseInt(checkingInput.val());
  console.log(checkingAmount);
  //update total amount in checking based on checkingAmount
  //console.log updated total

  checkingBalance = checkingBalance + checkingAmount;
  console.log(checkingBalance)
  checkingBalanceDiv.html("$" + checkingBalance);
}

function withdrawChecking(){
  var checkingAmount = parseInt(checkingInput.val());
  checkingBalance = checkingBalance - checkingAmount;
  checkingBalanceDiv.html("$" + checkingBalance);

  //checkingbalance cannot go to zero
  //when zero, withdraw from savings
  //amount greater < or > than balance
  //if/else condition
  // if (checkingBalance <= 0){
  //   var checkingAmount = parseInt(checkingInput.val());
  //
  //   function overdraftProtection(){
  //     var savingsAmount = parseInt(savingsInput.val());
  //     savingsBalance = savingsBalance + savingsAmount;
  //     var overdraftAmount = savingsBalance - checkingAmount;
  //   }
  //
  // }
}
function depositSavings(){
var savingsAmount = parseInt(savingsInput.val());
savingsBalance = savingsBalance + savingsAmount;
savingsBalanceDiv.html("$" + savingsBalance);
}

function withdrawSavings(){
  var savingsAmount = parseInt(savingsInput.val());
  savingsBalance = savingsBalance - savingsAmount;
  savingsBalanceDiv.html("$" + savingsBalance);
}

checkingDepositButton.on("click", depositChecking);
checkingWithdrawButton.on("click", withdrawChecking);
savingsDepositButton.on("click", depositSavings);
savingsWithdrawButton.on("click", withdrawSavings);

})
