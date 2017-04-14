var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1', {});

exports.good = function (req, res)
{
    client.get("feature1", function(err, value) {
        console.log('feature1' + value);
        if(value == "true") {
            res.status(200).send('This is a new feature and works well.');
        } else {
            // 404 status - resource not found because flag is turned off
            res.status(404).send();
        }
    });


};


exports.bad = function (req, res)
{
    client.get("feature2", function(err, value) {
        console.log('feature2' + value);
        if(value == "true") {
            res.status(500).send('This is a new feature and is broken!');
        } else {
            res.status(404).send();
        }
    });


};
