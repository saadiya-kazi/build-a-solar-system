var router = require('express').Router();

router.get('/', function(req, res) {
	res.send('Challenges Index Page');
});

router.get('/challenges', function(req, res) {
	res.send('Challenges List Page');
});

module.exports = router;
