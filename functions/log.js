'use strict' 
var dateFormat = require('dateformat');

function Log(logMessage) { 

    var now = new Date();
    var datestring = dateFormat(now, "yyyy-mm-dd HH:MM:ss.l");
    console.log("[" + datestring + ']  ' + logMessage)
}
module.exports = Log // design is one file per method/module


