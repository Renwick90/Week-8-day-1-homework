var Bank = require('./bank/bank.js');
var BankView = require('./bank/bank_view.js');
var sampleAccounts = require('./sample.json');
var Account = require('./bank/account.js');

window.onload = function(){
 

  var bank = new Bank()

  bankView = new BankView(bank)
  bankView.initialise(sampleAccounts)

  // for(accountData of sampleAccounts){
  //   bank.addAccount(new Account(accountData));
  // }
  // var totalDisplay = document.getElementById('total');
  // totalDisplay.innerText = bank.totalCash();

  // var accountList = document.getElementById('accounts');

  // for( account of bank.accounts ){
  //   var accountListitem = document.createElement('li');
  //   accountListitem.innerText = account.owner + " : " + account.type + ": £" + account.amount.toFixed(2);
  //   accountList.appendChild(accountListitem);
  // }

   

   







}


