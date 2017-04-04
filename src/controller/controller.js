var http = require('http'),
	request = require('request');

module.exports = {
	wtoday : wtoday,
	wweekly : wweekly
}

function retWeather(){
	return new Promise(function(resolve, reject){
		var apikey = process.env.apikey;
        var options = {
          url: "https://api.darksky.net/forecast/"+ apikey + "/-33.8688,151.2093",
          json: true,
        };        
        
        request(options, function getWeather(err, response, body){
          if (!err && response.statusCode == 200) {
            resolve(body);
          }    
        });
        
    });
}

function wtoday(req, res){
	if(req.query.format !== 'undefined' &&  req.query.format === "json"){
		retWeather().then(function(result){
			res.json(result);
		});
	}
	else{
		var str = "<html><head> <title>Sydney Weather </title> </head><body> <h1> Its a nice sunny day! </h1> </body> <!html>";
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(str);
	}
}


function wweekly(req, res){
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(req.query.location + " " + req.query.day);
}