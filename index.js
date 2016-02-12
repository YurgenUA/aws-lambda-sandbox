var cheerio = require('cheerio');
var request = require('request');
var url = require('url');
var fs = require('fs');
var mustache = require('mustache');
var AWS = require('aws-sdk');
var moment = require('moment');
var exec = require('child-process-promise').exec;

exports.handler = function (event, context) {
    request(event.webpage, function (err, response, body) {
        if (err) console.log(err, err.stack); // an error occurred

        exec('echo hello; echo again hello')
            .then(function (result) {
                var stdout = result.stdout;
                var stderr = result.stderr;
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
            })
            .fail(function (err) {
                console.error('ERROR: ', err);
            })
            .progress(function (childProcess) {
                console.log('childProcess.pid: ', childProcess.pid);
            });

     
                
        console.log("jsPDF done!");
        });
     
};