const express = require('express'),
      router = express.Router(), 
	  controller = require('./controller/controller');
	  
module.exports = router;	  
	  
router.get('/:city/today', controller.wtoday);

router.get('/', controller.wweekly);