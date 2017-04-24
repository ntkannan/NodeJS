var argv = require('yargs').argv;
var command = argv._[0];
 
console.log(argv);
 
if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined' && typeof argv.city !== 'undefined'
&& typeof argv.country !== 'undefined' && typeof argv.state !== 'undefined') {
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!' + argv.city + ' ' + argv.city +  argv.country + ' ' + argv.country +  argv.state + ' ' + argv.state  );  
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
    console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
    console.log('Hello world!');
}
