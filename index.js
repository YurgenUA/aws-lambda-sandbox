var cheerio = require('cheerio');
var request = require('request');
var url = require('url');
var fs = require('fs');
var mustache = require('mustache');
var AWS = require('aws-sdk');
var moment = require('moment');
var exec = require('child-process-promise').exec;
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

exports.handler = function (event, context) {
    request(event.webpage, function (err, response, body) {
        if (err) console.log(err, err.stack); // an error occurred

var childArgs = [
  path.join(__dirname, 'phantomjs-script.js'),
  'some other argument (passed to phantomjs script)'
]
console.log ("combimed path - " + childArgs);

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
});

/*
        exec('echo hello; echo again hello')
            .then(function (result) {
                var stdout = result.stdout;
                var stderr = result.stderr;
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
                context.succeed("finishing lambda in .then....");
            })
            .fail(function (err) {
                console.error('ERROR: ', err);
                context.succeed("finishing lambda in .fail....");
            })
            .progress(function (childProcess) {
                console.log('childProcess.pid: ', childProcess.pid);
            });
*/
     
                
        console.log("jsPDF done!");
        });
     
};