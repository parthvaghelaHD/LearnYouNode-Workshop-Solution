'use strict'

var fs = require('fs');

var a = process.argv[2];

let b = fs.readFile(a, function(err, data) {
	console.log(data.toString().split('\n').length - 1);

});

