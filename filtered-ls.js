'use strict';
var fs = require('fs');
var path = require('path');

var directoryname = process.argv[2];
var extension = process.argv[3];
var pattern = RegExp('\\.' + extension + '$');

file = fs.readdir(directoryname, function(err, data) {
 	if(err){
	console.log(err);
	}
   for (i = 0; i < data.length; i++) {
     if (pattern.test(data[i])) {
       console.log(data[i]);
    }
  }
});
