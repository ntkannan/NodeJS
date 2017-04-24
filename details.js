 var storage = require('node-persist');
 storage.initSync();

// Creating a new storeage file
 storage.setItemSync('accounts',[{
    username:'Kannan 1 ',
    balance:100.64503

}]);


var accounts = storage.getItemSync('accounts');

//push on a new accounts
accounts.push({
    username:'Thamarai 1 ',
    balance:1003098
});

//save using setItemSync
storage.setItemSync('accounts', accounts);

console.log(accounts);
