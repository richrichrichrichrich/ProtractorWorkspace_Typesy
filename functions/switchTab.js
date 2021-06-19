'use strict' 

// var node_modules_path = "../../node_modules/protractor/node_modules/"; // TODO: get this from app.settings in future
// const mysql = require(node_modules_path + 'mysql'); //possibly put this into app.settings and default from jenkins


// function OpenTab(callback) { 
//     callback = callback || function(){}  //required to define a default value of empty function to callback

//     return new Promise(function(resolve,reject){ // required to wrap a promise around the work of the function
//         // do stuff
//         var mainvar = '';

//         browser.driver.executeScript(function() {
//             (function(a){
//             document.body.appendChild(a);
//             a.setAttribute('href', 'http://');
//             // a.setAttribute('href', location.href);
//             a.setAttribute('target','_blank')
//             a.dispatchEvent((function(e){
//               e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
//               return e;
//             }(document.createEvent('MouseEvents'))))}(document.createElement('a')));
//           });


//         resolve(mainvar)           // required to reject and resolve with some value
//         return callback(null, mainvar) //return a value in callback, and then function. no error, so null in return value.
            
//     });
// }
// module.exports = OpenTab // design is one file per method/module

function SwitchTab(tabnum, callback) { 
    console.log('tabnum 1: ' + tabnum)
    callback = callback || function(){}  //required to define a default value of empty function to callback

    return new Promise(function(resolve,reject){ // required to wrap a promise around the work of the function
        // do stuff
        var title = '';

        browser.getAllWindowHandles().then(function(allGUID){

            //tabnum = Number(tabnum)
            console.log('tabnum 2 : ' + tabnum);

            var counter = 0;
            // iterate the values in the set
            for(let guid of allGUID){
                console.log('guid: ' + guid)
               
                counter++

                console.log('counter: ' + counter)
                
                if(counter==tabnum){
                    console.log('counter: ' + counter + ' is equal to tabnum: ' + tabnum)
                    browser.switchTo().window(guid);
                    // break the loop
                    break;
                }
                    
                
            }

            resolve(title)           // required to reject and resolve with some value
            return callback(null, title) //return a value in callback, and then function. no error, so null in return value.
        


        })


            
    });
}
module.exports = SwitchTab // design is one file per method/module

