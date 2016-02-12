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
var binPath = '/var/task/node_modules/phantomjs/bin/phantomjs';//phantomjs.path;
var phantom = require('phantom');

exports.handler = function (event, context) {
    request(event.webpage, function (err, response, body) {
        if (err) console.log(err, err.stack); // an error occurred

process.env['PATH'] = process.env['PATH'] + ':' + '/var/task/node_modules/phantomjs/bin/phantomjs';
phantom.create(function(ph){
  ph.createPage(function(page) {
    page.open("http://www.google.com", function(status) {
      page.render('/tmp/google.pdf', function(){

        console.log('Page Rendered');
         context.succeed("finishing lambda in .ph....");        
        ph.exit();

      });
    });
  });
});

var childArgs = [
  path.join(__dirname, 'phantomjs-script.js')
]
console.log ("combimed path - " + childArgs);
console.log ("phantom bin path - " + binPath);
/*
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  if (err)
    console.log ("error in child process - " + err);
  
});
*/

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