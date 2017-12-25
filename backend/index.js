module.exports = require('../node_modules/twitter-node-client/lib/Twitter');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');
var cors = require('cors');

// use it before all route definitions

var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var config = {
    "consumerKey": "qbYZSHVmgwdmWCjp5UPM0GMUt",
    "consumerSecret": "XbKoGVhUMeVqLoZxREe4iHDccSX8R2yiOTYwKVy5cmW5ucGvp9",
    "accessToken": "2579886557-xMN8qm3gLxSk9ym9SepqfL3qzcdPbwX59bLoikM",
    "accessTokenSecret": "5y3bQycLe9lMpcEbJ21fKtmUUOkEX6hvDJbFXXnhwrCIC"
};

var twitter = new module.exports.Twitter(config);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/*
 * To connect to a front end app (i.e. AngularJS) store all your files you will *
 * statically store in declared below (i.e. ./public) *
*/

app.use(express.static('public'));

app.get('/twitter/search', function (req, res) {



    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
	var data = twitter.getSearch(query, function(error, response, body){
		res.status(404).send({
			"error" : "User Not Found"
		});
	}, function(data){
		res.send({
			result : data
		});
	});
});


var server = app.listen(3000, function () {});
