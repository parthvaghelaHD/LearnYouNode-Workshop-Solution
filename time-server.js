const net = require('net')  

function time(n){
	return n < 10 ? '0' + n : n ;

}

const server = net.createServer(function (socket) {
	var d = new Date();
	var s = d.getFullYear() + "-"
		+ time(d.getMonth() + 1) + "-"
		+ time(d.getDate())+ " "
		+ time(d.getHours()) + ":"
		+ time(d.getMinutes()) + "\n";


        socket.end(s);

});
     server.listen(process.argv[2]);


