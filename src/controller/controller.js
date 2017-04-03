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
}


function wweekly(req, res){
	res.send(req.query.location + " " + req.query.day);
}