const fs = require('fs');

const fileName = 'data.txt';

//Sync

const data = fs.readFileSync(fileName);

console.log(data.toString());

//Async

fs.readFile(fileName, (err, data) => {
	if(err) {
		console.log(err);
	}
	console.log(data.toString());
});

console.log('Hey Indiaaa!!');