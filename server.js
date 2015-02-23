var express = require('express');
var rp = require('request-promise');

var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/search/map/:maxlat/:maxlng/:minlat/:minlng', function (req, res) {
    console.log('https://api.laterooms.com/search/map/max/' + req.params.maxlat + ',' + req.params.maxlng + '/min/' + req.params.minlat + ',' + req.params.minlng + '/')
    rp.get({
        url: 'https://api.laterooms.com/search/map/max/' + req.params.maxlat + ',' + req.params.maxlng + '/min/' + req.params.minlat + ',' + req.params.minlng + '/',
        headers: {
            'TLRG-AppId': 'NOPE'
        },
        json: true
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (e) {
            res.send('badness happened', e);
        });
});

var server = app.listen(3004);
