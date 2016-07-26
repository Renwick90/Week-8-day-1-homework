var Account = require('./account.js');

var BankView =function(bank){
  this.bank = bank
}

BankView.prototype = {

  initialise: function(sampleAccounts){

    for(accountData of sampleAccounts){
      this.bank.addAccount(new Account(accountData));
    }
    this.updateDisplay()
    this.setListeners()
  },

  updateDisplay: function(){


    var totalDisplay = document.getElementById('total');
    totalDisplay.innerText = this.bank.totalCash();

    var accountList = document.getElementById('accounts');

    for( account of this.bank.accounts ){
      var accountListitem = document.createElement('li');
      accountListitem.innerText = account.owner + " : " + account.type + ": £" + account.amount.toFixed(2);
      accountList.appendChild(accountListitem);
    }
  },

  setListeners: function(){
    var payInterest = document.getElementById("interest")
    var totalDisplay = document.getElementById('total');
    totalDisplay.innerText = this.bank.totalCash();
    payInterest.onclick = function(){
      this.bank.payInterest();
      totalDisplay.innerText = this.bank.totalCash().toFixed(2);
    }.bind(this);
  }

 
}

module.exports = BankView