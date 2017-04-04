const express = require('express'),
	  app = express(),
	  port = process.env.PORT || 3000,
	  routes = require('./src/routes');
	  
app.get('/', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Welcome to Sydney Weather Check portal");
});
	  
app.use('/weather', routes);  


	  
app.listen(port, function(){
	console.log("App listening to port " + port + "!");
});