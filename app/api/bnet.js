"use strict"


//Module dependencies
var request = require("request");

//Configuration
var env = process.env.NODE_ENV || 'dev';
var config = process.require('/app/config/config.'+env+'.json');

module.exports.getUserCharacters = function(region,accessToken,callback){
    request("https://"+region+".api.battle.net/wow/user/characters?access_token="+accessToken, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          callback(JSON.parse(body).characters);
        }
    })
}

module.exports.getCharacter = function(region,realm,name,callback){
    request("https://"+region+".api.battle.net/wow/character/"+realm+"/"+name+"?fields=guild%2Citem%2Cprogression&locale=en_GB&apikey="+config.oauth.bnet.client_id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(JSON.parse(body));
        }
    });

}