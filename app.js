const express = require('express'),
	  app = express(),
	  port = process.env.PORT || 3000,
	  routes = require('./src/routes');
	  
app.use('/weather', routes);  


	  
app.listen(port, function(){
	console.log("App listening to port " + port + "!");
});