var fs = require('fs');

//fileread sync
/*
console.log('First');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
	
console.log(result);
console.log('Third');
*/
console.log('First');
fs.readFile('syntax/sample.txt', 'utf-8',function(err,result){
	console.log(result);
});
console.log('Third');