var assert = require("chai").assert;
var request = require('request');
var applicationStorage = process.require("core/applicationStorage.js");

describe("routes",function() {
    var protocol = "http";
    if (applicationStorage.config.server.https)
        protocol = "https";
    var baseUrl = protocol+'://localhost:'+applicationStorage.config.server.port;

    /*it("Should listen on /api/v1/characters", function (done) {
        request.get({url:baseUrl+"/api/v1/characters", rejectUnauthorized: false}, function (err, res){
            assert.isNull(err);
            assert.equal(res.statusCode,200);
            done();
        });
    });*/

    //TODO Test for get one character ...
});