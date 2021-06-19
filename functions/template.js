'use strict' 

// var node_modules_path = "../../node_modules/protractor/node_modules/"; // TODO: get this from app.settings in future
// const mysql = require(node_modules_path + 'mysql'); //possibly put this into app.settings and default from jenkins


function functionName(anypassedvars, callback) { 
    callback = callback || function(){}  //required to define a default value of empty function to callback

    return new Promise(function(resolve,reject){ // required to wrap a promise around the work of the function
        // do stuff

        resolve(mainvar)           // required to reject and resolve with some value
        return callback(null, mainvar) //return a value in callback, and then function. no error, so null in return value.
            
    });
}

module.exports = functionName // design is one file per method/module