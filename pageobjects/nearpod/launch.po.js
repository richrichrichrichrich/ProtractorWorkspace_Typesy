var applicationPO = function(){

    this.Login = async function(username, password) {

        
        await browser.get("https://app.sharesies.nz/login");

        //await browser.wait(protractor.ExpectedConditions.elementToBeClickable(elemToClick), 50000);
        var elemToCheck = $('input[name="email"]')
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(elemToCheck), 10000)
        await elemToCheck.sendKeys(username)

        elemToCheck = $('input[name="password"]')
        await browser.wait(protractor.ExpectedConditions.presenceOf(elemToCheck), 30000)
        await elemToCheck.sendKeys(password)

        var elemToClick = $('button[data-testid="login"]')
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(elemToClick), 30000)
        await elemToClick.click()

        elemToCheck = element(by.cssContainingText('div[data-testid="title"]','Portfolio'))
        await browser.wait(protractor.ExpectedConditions.presenceOf(elemToCheck), 30000)
        
    }

    
    

}
module.exports = applicationPO


    // const downloadsFolder = require('downloads-folder');

    // const fse = require('fs-extra');

    // const pdfreader = require('pdfreader');

    // const promisify = require('util').promisify;

    // const readdirP = promisify(fse.readdir);

    // const statP = promisify(fse.stat);

    // const path = require('path');

    // const Excel = require('exceljs'); // interaction with excel template for input/output test data // dont seem to use yet

    // const ncp = require('copy-paste');

    //const sleep = require('await-sleep'); // used for pausing in troubleshooting // dont seem to use yet

    // var filePathRoot = process.cwd().slice(0, (process.cwd().indexOf('protractor')) + 10);

    // var appnID = 'SFQPO:';

//     // console.log(appnID + 'filePathRoot: top: ' + filePathRoot);

//     // above will go and grab latest and install, which will fail. you can do this manually using

//     // npm install --save downloads-folder

//     // npm install --save fs-extra

//     // this will get latest versions, update existing etc. add to maintenance plan

//     // note: constants, above, are required for function verifyFileInDownloadsFolder to work

//     // but install step is still valid to prevent the missing module error message

//     var filePath;

//     //var filePath2;

//     //var appianDataObject;

//     //var genericFunctions;

//     //TODO: Good candidate for a generic function

//     // get application name

//     var testPathArray;

//     try{

//         testPathArray= browser.params.test.split('/');

//     }catch(e){

//         testPathArray = ['sfQuote','default','default.js'];

//    }

    // get meta.mode test file extension to check later to assign value to this.do.meta.mode

    //var metaModeArray = browser.params.test.split('.');

    //var metaMode = metaModeArray[metaModeArray.length-1];

    // get page object file for this application

    // if(metaModeArray[0].toUpperCase() =='APPIANOPL'){

    //console.log("APO:init: running stand alone appian OPL scenario");

    // filePath = path.join(filePathRoot, '/tests/dataObjs/', testPathArray[0] + '_DO.js');

    // console.log(appnID + 'filePathRoot: inTry: ' + filePathRoot);

    // console.log('SPO: dataObjs filePath is ' + filePath);

    // try {

    //     var applicationDataObject = require(filePath);

    // } catch (e) {

    //     console.log('ERROR: FAILED TO LOAD DATA OBJECT');

    // }

   // }else{

    //            filePath = filePathRoot + '/tests/dataObjs/appianopl_DO.js';

    //            console.log('appianopl_DO: dataObjs filePath is ' + filePath);

    //            var appianDataObject = require(filePath);

    //            console.log("APO:init: running appian checker as part of another application's test eg. Origin afterAll sequence - checking appian for applications");

    // }

    // get generic functions

    // try {

    //     filePath = filePathRoot + '/tests/genericFunctions/genericFunctions.js';

    //     //console.log('genericFunctions filePath is ' + filePath);

    //     genericFunctions = require(filePath);

    // } catch (e) {

    //     console.log('ERROR: FAILED TO LOAD GENERIC FUNCTIONS');

    // }

    // manage FNs

    // this.fn = new genericFunctions();

    // // manage DO

    // var tempDO = new applicationDataObject();

    // //console.log('tempoDO is ' + JSON.stringify(tempDO));

    // this.do = tempDO.do; // lose the .DO to shorten from ariDO.DO.etc to ariDo.etc

    // //logout('appian_PO: this.do: ' + JSON.stringify(this.do));

    // // maintain/;update DO here and in spec. Its the same data object.

    // // set filePathRoot

    // this.do.meta.filePathRoot = filePathRoot;

    //console.log('AOPO:filePathRoot: ' + filePathRoot);

    // give access to broswer params in the spec

    // this.browserParams = browser.params;

    // //console.log('browserParams are ' + JSON.stringify(this.browserParams));

    // // in response to UWME performance issues with throttling and queueing of ajax calls, we slow it downy

    // var setSleep = 100; // sleep amount to slow down UWME

    // var sleepOn = true; // turn UWME sleeps on/off with true/false boolean

    // // when these variables get sizable, put in separate file called setup/prep

    // // handling browser handles so focus can return from iframe, needed as global

    // var cignaDashboardHandle = '';

    // var pdfContent = '';

//     // ############################

//     // start of regular functions

//     // ############################

//     this.getApplication = async function () { // now must take this value either from originDO, or as stand alone

//         await logout('SFQPO: getApplication()...')

//         var launchEnvironment = this.do.environment[this.do.logon.applicationName];

//         await logout('SFQPO: getApplication(): launchEnvironment: ' + JSON.stringify(launchEnvironment));

//         var launchTarget = this.do.logon.target + 'Url';

//         await logout('SFQPO: getApplication(): launchTarget: ' + JSON.stringify(launchTarget));

//        var launchURL = launchEnvironment[launchTarget];

//         await logout('SFQPO: getApplication(): launchURL: ' + JSON.stringify(launchURL));

//         await logout('SFQPO: getApplication(): application: ' + this.do.logon.applicationName + ':  environment: ' + this.do.logon.target + ':  URL: ' + launchURL);

//        //await logout('Environment is ' + envName + ': ' + launchURL);

//         var appnID = 'SFQPO';

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'getApplication()';

//         var testName = 'Launch Url';

//         // var testValue = launchURL + '\nHandle: ' + currentPage;

//         var testValue = launchURL + '\nHandle: ';

//         var postCheckElem = element(by.cssContainingText('label','Username'));

//         var postCheckType = 'present'; //visible, clickable

//         try {

//             // no preChecks needed, start of test, dummy precheck

//             // await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             this.do = await this.fn.timerStart(testName, this.do);

//             await logout('SFQPO: getApplication(): ..... about to get launchURL');

//             await this.nfrStart('nfr1');

 //             await browser.get(launchURL);

//             await logout('SFQPO: getApplication(): ..... done get launchURL');

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             await this.nfrStop('nfr1');

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//         // Set browser handle for returning focus later

//         // var currentPage = browser.driver.getWindowHandle();

//         // await logout('current handle: ' + await currentPage);

//         // await logout('current url   : ' + await browser.getCurrentUrl());

//         // this.do.meta.windowHandles.sfQuote.mainPage = await currentPage;

//         try {

//             await this.fn.screenCapture('LAUNCH', this.do);

//         } catch (e) {

//             await logout('SFQPO:getApplication(): ERROR: doing screenCapture... ' + e);

//         }

//         return true;

//     }

//     this.logInApplication = async function () {

//         // get service account, or put this in a file someplace

//         // var username = this.do.environment.sf.username;

//         // var password = this.do.environment.sf.password;

//         // var applicationName = this.do.logon.applicationName;

//         //var environmentGroup = this.do.environment[applicationName];

//         // var environmentTarget = this.do.logon.target;

//         var credentialsObject = await this.fn.getCredentials(this.do.logon);

//         // await logout('SFPO:logInApplication(): credentialsString: ' + await credentialsString);

//         await logout('SFQPO:logInApplication(): credentialsObject.application: ' + credentialsObject.application);

//         //var credentialsArray = await credentialsString.split(',');

//         var username = credentialsObject.username;

//         var password = credentialsObject.password;

//         // un/pw authentication

//         var userField = $('#username');

//         var passField = $('#password');

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = 'SFQPO:logInApplication()';

//         var testName = 'Log In';

//         var testValue = 'User ' + username;

//         var preCheckElem = userField;

//         var preCheckType = 'present'

//         if (this.do.logon.target.indexOf('CommPortal') != -1) {

//             var postCheckElem = $('community_navigation-global-navigation-list');

//         } else { // omniscript designer check

//             var postCheckElem = element(by.cssContainingText('span', 'App Launcher')).element(by.xpath('../..')).$('div');

//         }

//         var postCheckType = 'present'; //visible, clickable–—–

//         await logout('SFQPO:logInApplication(): ..... entering username/pass');

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await userField.sendKeys(username);

//             await passField.sendKeys(password);

//             //screenshot pre log on

//             await $('#Login[type="submit"]').click();

//             await this.nfrStart('nfr2');

//             // Set browser handle for returning focus later

//             // var currentPage = browser.driver.getWindowHandle();

//             // await logout('current handle: ' + await currentPage);

//             // await logout('current url   : ' + await browser.getCurrentUrl());

//             // this.do.meta.windowHandles.sf.mainPage = await currentPage;

//             // await browser.driver.switchTo().frame('fContent');

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.nfrStop('nfr2');

//             // await logout('Switched to frame fContent');

//             // screenshot post log in

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.sf_selectBannerOptionCommunityPortal = async function (bannerLabel) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'sf_selectBannerOptionCommunityPortal()';

//         var testName = 'Click on top banner navigation label';

//         var testValue = bannerLabel;

//         var preCheckElem = $('community_navigation-global-navigation-list').element(by.cssContainingText('span', testValue)).element(by.xpath('..'));

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         // postCheckElem requires iframe switch within this function

//         var postCheckElem = $('#PolicyHolder').element(by.cssContainingText('h1', 'Capture Client Details'));

//         var postCheckType = 'present'; //visible, clickable, present

//         try {

//             // no preChecks needed, start of test

//             //await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await logout('doing switch to default content');

//             // try switching to main frame first

//             // await browser.driver.switchTo().defaultContent();

//             await logout('clicking Create Quote');

//             // should be able to click the label now

//             //await actElem.click();

//             //switch to client details iframe

//             var iframeClientDetails = $('iframe[title="Vlocity Layout"]');

//             // await logout('... waiting for iframe to be present');

//             try {

//                 // await browser.sleep(1000);

//                 await browser.wait(protractor.ExpectedConditions.presenceOf(iframeClientDetails), 30000);

//                 await logout('... found frame OK');

//                 await browser.sleep(1000);

//             } catch (e) {

//                 await logout('... iframe location failed... ' + e);

//             }

//             // iframe switch

//             try {

//                 await logout('... switching to iframe');

//                 await browser.driver.switchTo().frame(0);

//                 await logout('... switched ');

//                 // await browser.sleep(500);

//             } catch (e) {

//                 await logout('... failed to switch to iframe');

//             }

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.sf_navigateToQuote = async function () {

//         //try{

//         await logout('SFQPO:sf_nagivateToQuote(): this.do.meta.navigation.omniscriptPreview: ' + this.do.meta.navigation.omniscriptPreview);

//         if (this.do.meta.navigation.omniscriptPreview == false) {

//             await logout('SFQPO:sf_navigateToQuote(): using community portal ...');

//             await this.sf_selectBannerOptionCommunityPortal('Create Quote');

//         } else { // do the omniscript designer method

//             //Click App Launcher

//             await logout('SFQPO:sf_navigateToQuote(): using omniscript designer ...');

//             var appLauncher = element(by.cssContainingText('span', 'App Launcher')).element(by.xpath('../..')).$('div');

//             await this.postCheck(appLauncher, 'clickable', 'sf_navigateToQuote', 'Open App Launch to Search')

//             //            await browser.wait(protractor.ExpectedConditions.visibilityOf(appLauncher, 30000));

//             await appLauncher.click();

//             //Enter Vlocity Omniscript Designer in Search items

//             await this.enterInputFieldTextByPlaceholder('Search apps or items...', 'Vlocity Omniscript Designer');

//             //Click Vlocity OmniScript Designer in the Results

//             //            await browser.sleep('1000');

//             var elemToClick = element(by.cssContainingText('mark', 'Vlocity OmniScript Designer'));

//             await browser.wait(protractor.ExpectedConditions.elementToBeClickable(elemToClick), 50000);

//             await elemToClick.click();

//             //On Vlocity OmniScript Designer Page Click Version

//             //await browser.sleep('20000');

//            // get iframe

//             // await logout('... getting iframe');

//             // var iframeOmniScript = $('iframe[force-alohapage_alohapage]'); // frame for omniscript designer

//             var iframeOmniScript = $('iframe[title="accessibility title"]');

//             // await logout('... waiting for iframe to be present');

//             try {

//                 // await browser.sleep(1000);

//                 await browser.wait(protractor.ExpectedConditions.presenceOf(iframeOmniScript), 30000);

//                await logout('... found frame OK');

//                 await browser.sleep(1000);

//             } catch (e) {

//                 await logout('... iframe location failed... ' + e);

//             }

//             // iframe switch

//             try {

//                 await logout('... switching to iframe');

//                 await browser.driver.switchTo().frame(0);

//                 await logout('... switched ');

//                 // await browser.sleep(500);

//             } catch (e) {

//                 await logout('... failed to switch to iframe');

//             }

//             try {

//                 await logout('... waiting for parent omniscript link to be clickable')

//                 var omniScriptElem = element(by.cssContainingText('span', this.do.meta.navigation.parentProjectName));

//                 await browser.wait(protractor.ExpectedConditions.presenceOf(omniScriptElem), 30000);

//             } catch (e) {

//                 await logout('... failed to locate parent link in iframe');

//             }

//             await omniScriptElem.element(by.xpath('../..')).$('button').click();

//             await browser.sleep(500);

//             // now all versions of our parent project (eg. MultiInsuredLifeQuote) are showing. lets check we dont have any new versions released, or the description has changed, or the last modified date has changed

//             await logout('**************************************************************************************************************');

//             await logout('*************************** CHECKING OMNISCRIPT RELEASE VERSIONS AND UPDATES *********************************');

//             await logout('**************************************************************************************************************');

//             //get text of first version under parent project

//             var firstProject = await omniScriptElem.element(by.xpath('../../../..')).$$('tr').get(1).$('th span a');

//             var firstProjectText = await firstProject.getText();

//             //var projectVersion = await element(by.cssContainingText('a', this.do.meta.navigation.projectName));

//             var functionName = 'SFQPO:sf_navigateToQuote()';

//             var elemCheckType = 'present';

//             var testName = 'Omniscript Version Check';

//             var testValue = this.do.meta.navigation.projectName;

//             await this.preCheck(firstProject, elemCheckType, functionName, testName);

//             if (await firstProjectText != this.do.meta.navigation.projectName) {

//                 // ALERT

//                //for(var x=0;x<10;x++){

//                 await logout('');

//                 await logout('**************************************************************************************************************');

//                 await logout('******************************** VLOCITY OMNISCRIPT "NEW MAJOR VERSION RELEASE" DETECTED *********************');

//                 await logout('******************************** CURRENT VERSION NAME: ' + this.do.meta.navigation.projectName);

//                 await logout('******************************** NEW     VERSION NAME: ' + await firstProjectText);

//                 await logout('**************************************************************************************************************');

//                 await logout('**************************************************************************************************************');

//                 await logout('');

//                 await this.failResult(functionName, testName, testValue, 'Last Version:' + this.do.meta.navigation.projectName + '. Current Version:' + firstProjectText);

//                 //}

//             } else {

//                 await logout('SFQPO:sf_navigateToQuote(): Version OK');

//                 await logout('**************************************************************************************************************');

//                 await logout('**************************************************************************************************************');

//                 await this.passResult(functionName, testName, testValue);

//             }

//             //await logout('SFQPO:sf_navigateToQuote(): this.do.meta.navigation.projectName: ' + this.do.meta.navigation.projectName);

//             await browser.sleep(1000);

//             var projectVersion = await element(by.cssContainingText('a', this.do.meta.navigation.projectName));

//             var elemCheckType = 'present';

//             var testName = 'Omniscript Modified Check';

//             var testValue = this.do.meta.navigation.projectLastModified;

//             await this.preCheck(projectVersion, elemCheckType, functionName, testName);

//             //var projectDescription = await projectVersion.element(by.xpath('../..')).$$('td').get(1).getText();

//             var projectLastModified = await projectVersion.element(by.xpath('../../..')).$$('td').get(2).getText();

//             if (await projectLastModified != this.do.meta.navigation.projectLastModified) {

//                 // ALERT

//                 //for(var x=0;x<10;x++){

//                 await logout('');

//                 await logout('**************************************************************************************************************');

//                 await logout('******************************** VLOCITY OMNISCRIPT "LAST MODIFIED" UPDATE DETECTED **************************');

//                 await logout('******************************** SCRIPT NAME       : ' + this.do.meta.navigation.projectName);

//                 await logout('******************************** WAS LAST MODIFIED : ' + this.do.meta.navigation.projectLastModified);

//                 await logout('******************************** NOW LAST MODIFIED : ' + await projectLastModified);

//                 await logout('**************************************************************************************************************');

//                 await logout('**************************************************************************************************************');

//                 await logout('');

//                 // await logout('******************************** NOW LAST MODIFIED : ' +  await projectLastModified);

//                 // await logout('******************************** NOW LAST MODIFIED : ' +  await projectLastModified);

//                 await this.failResult(functionName, testName, this.do.meta.navigation.projectName, 'Last Mod:' + this.do.meta.navigation.projectLastModified + '. Current Mod:' + projectLastModified);

//                 throw 'ERROR: MAJOR VERSION OR MODIFY DETECTED. Old version: ' + this.do.meta.navigation.projectName + ': ' + this.do.meta.navigation.projectLastModified + '. New version: ' + await firstProjectText + ': ' + await projectLastModified;

//                 //throw 'ERROR: SAME VERSION MODIFICATION DETECTED. Old modified: '+ this.do.meta.navigation.projectLastModified + '. New modified: ' + await projectLastModified;

//                 //}

//             } else {

//                 await logout('SFQPO:sf_navigateToQuote(): Last Modified OK');

//                 await logout('**************************************************************************************************************');

//                 await logout('**************************************************************************************************************');

//                 await this.passResult('SFQPO:sf_navigateToQuote()', 'Omniscript Modified Check', this.do.meta.navigation.projectLastModified);

//             }

//             // and if all is okay, then go ahead and open current version and proceed with testing

//             await projectVersion.click();

//             await browser.sleep(1000);

//             // swtich back to default content

//             // then switch back to main window

//             await logout('');

//             await logout('switching to default content... ');

//             await browser.driver.switchTo().defaultContent();

//             // await logout('1 title: ' + await $('title'));

//             await browser.sleep(1000);

//             var previewLink = element(by.cssContainingText('a', 'Preview'));

//             await browser.driver.switchTo().frame(0);

//             // await logout('2 title: ' + await $('title'));

//             await browser.sleep(2000);

//             try {

//                 await browser.wait(protractor.ExpectedConditions.elementToBeClickable(previewLink), 30000);

//                 await logout('... 1 previewLink clckable OK');

//                // await previewLink.click();

//                 await browser.sleep(1000);

//                 await browser.sleep(3000);

//             } catch (e) {

//                 await logout('... 1 previewLink was not found... trying again...');

//                 await logout(e);

//                 await logout('switching to default content... ');

//                 await browser.driver.switchTo().defaultContent();

//                 await browser.sleep(1000);

//                 await browser.driver.switchTo().frame(0);

//                 await browser.wait(protractor.ExpectedConditions.elementToBeClickable(previewLink), 10000);

//                 // await previewLink.click();

//             }

//             await previewLink.click();

//             await browser.sleep(1000);

//             var firstName = $('#FirstName');

//             await browser.driver.switchTo().frame(0); // this is the next frame within the frame...

//             await browser.sleep(2000);

//             try {

//                 await browser.wait(protractor.ExpectedConditions.elementToBeClickable(firstName), 5000);

//                 await logout('... 2 firstName clckable OK');

//                 //await firstName.click();

//                 //await browser.sleep(2000);

//             } catch (e) {

//                 await logout('... 2 firstName was not found... trying again');

//                 await logout(e);

//                 await browser.driver.switchTo().frame(0);

//                 await browser.wait(protractor.ExpectedConditions.elementToBeClickable(firstName), 10000);

//                 await logout('... 2 firstName clckable OK');

//             }

//             try {

//                 var elemToWait = element(by.cssContainingText('h1', 'Capture Client Details'));

//                 await browser.wait(protractor.ExpectedConditions.presenceOf(elemToWait, 10000));

//                 // await logout('Checkpoint2');

//                 await this.passResult('SFQPO:sf_navigateToQuote()', 'Omniscript Navigation', this.do.meta.navigation.projectName);

//             } catch (e) {

//                 await this.failResult('SFQPO:sf_navigateToQuote()', 'Omniscript Navigation', this.do.meta.navigation.projectName, e);

//             }

//         }

//         return true;

//     }

 

//     // dropDownListSelectFirst -this one looks like it should be deprecated as the enterOccupationById does everything, including selecting the item from the list

//     // this function dropDownListSelectFirst does not use the multi clients design

//     this.dropDownListSelectFirst = async function (fieldLabel) { // feildLabel is the original field clicked prior to showing drop down

//         //            var preCheckElem = $('app-sponsor-product-campaign-select').$('#submit');

//         //            var preCheckType = 'clickable';

//         var functionName = 'SFQPO:dropDownListSelectFirst()';

//         var testName = 'Select occupation from list showing';

//         var firstOption;

//         var firstOptionText = '';

//         var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//         await logout('Number clientNumber: ' + Number(this.do.clients.selectedClient.slice(6)));

//         await logout('String clientNumber: ' + this.do.clients.selectedClient.slice(6));

//         // set the prefix elem to locate correct label elems

//         if(clientNumber == 1){

//             //this is the primary client, and needs this prefix elem

//             prefixElem = await $$('child[aria-hidden="false"]').first();

//         }else{

//             try{

//                 prefixElem = await $$('div[id="Dependent"]').get((clientNumber-2)).element(by.xpath('..'));

//             }catch(e){

//                 prefixElem = await $('div[id="Dependent"]').element(by.xpath('..'));

//             }

   

//         }

//         var dropDownElem = prefixElem.$('#Occupation').element(by.xpath('..')).$$('li');

//         var dropDownCheck = 'clickable';

//         // Occupation list should be showing, very likely with just 1 value showing, so click it

//         //await browser.sleep(2000); // allow time for list to be showing, replace with preCheckElem, when put into own function

//         var postCheckElem = prefixElem.element(by.cssContainingText('label', fieldLabel)).element(by.xpath('..')).$('input[type="text"]');

//         var postCheckType = 'not null';

//         try {

//             firstOption = prefixElem.$('#Occupation').element(by.xpath('..')).$$('li').first();

//             await this.preCheck(firstOption, 'present', functionName, testName);

//             firstOptionText = await firstOption.getText();

//             await firstOption.click();

//             await logout('SFQPO:dropDownListSelectFirst(): Multiple occupations showing, so selected first one...');

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             // *** not null not handled yet TODO

//             // if(firstOptionText == await this.postCheck(postCheckElem, postCheckType, functionName, testName)){

//             //            await this.passResult(functionName, testName, '');

//             // }else{

//             //            await this.failResult(functionName, testName, '', e);

//             // }

//         } catch (e) {

//             try {

//                 // set the prefix elem to locate correct label elems

//                 if(clientNumber == 1){

//                     //this is the primary client, and needs this prefix elem

//                     prefixElem = await $$('child[aria-hidden="false"]').first();

//                 }else{

//                     try{

//                         prefixElem = await $$('div[id="Dependent"]').get((clientNumber-2)).element(by.xpath('..'));

//                     }catch(e){

//                         prefixElem = await $('div[id="Dependent"]').element(by.xpath('..'));

//                     }

           

//                 }

               

//                 await logout('SFQPO:dropDownListSelectFirst(): Only 1 Occupation is showing, so clicking it....')

//                 firstOption = prefixElem.$('#Occupation').element(by.xpath('..')).$('li');

//                 await this.preCheck(firstOption, 'present', functionName, testName);

//                 firstOptionText = await firstOption.getText();

//                 await firstOption.click();

//                 // if(firstOptionText == await this.postCheck(postCheckElem, postCheckType, functionName, testName)){

//                 //            await this.passResult(functionName, testName, '');

//                 // }else{

//                //            await this.failResult(functionName, testName, '', e);

//                 // }

//             } catch (e) {

//                 await logout('SFQPO:dropDownListSelectFirst(): no options showing in list... FAIL');

//                 firstOptionText = "ERROR NO DROPDOWN LIST VALUE";

//                 await this.failResult(functionName, testName, fieldLabel, firstOptionText + ': ' + e);

//             }

//         }

//         //await browser.sleep(500);

//         // currently only using for occupation. once we use another dropdown, then shift these 2 lines of code to where it matters. ie. where function is called from.

       

//         await logout(functionName + ': DO WE EVEN DO THIS? commented out following lines as they make no sense.');

 

//     process.exit();

//         // this.do.personalDetails.occupation = firstOptionText;

//         // this.do.personalDetails.class = await this.getOccupationClass(firstOptionText);

//         return firstOptionText;

//     }

//     // looks a bit deprecated to me

//     //This function can be used for positive scenarios

//     // this.captureUserDetails = async function (clientNumber, prefixElem) {

//     //     var functionName = 'SFQPO:captureUserDetails(): ';

//     //     var testName = 'Capture Client Details all fields';

//     //     var testValue = 'All valid';

//     //     //First Name and Surname

//     //     await logout('SFQPO:captureUserDetails(): ...');

//     //     await logout(functionName + 'Step label: ' + await this.whatIsMyStepLabel());

//     //     await logout(functionName + 'H1 heading: ' + await this.whatIsMyH1Heading());

//     //     // await browser.sleep(2000); // an intermittent delay on system side is preventing the first field being found

//     //     var preCheckElem = element(by.cssContainingText('h1', 'Capture Client Details'));

//     //     var preCheckType = 'present';

//     //     // var actElem = preCheckElem

//     //     //Post checking on label - for navigating to new pages or searches ******* modify this as per what is avaialble on next screen*******

//     //     //var postCheckElem = element.all(by.cssContainingText('span',linkName)).first()//.element(by.xpath('../..')).$('input[type="text"]');

//    //     //var postCheckElem = element(By.cssContainingText('h2','New Lead'))

//     //     //element(by.cssContainingText('label',labelName));

//     //     // var postCheckType = 'visible'; //visible, clickable

//     //     try {

//     //         // no preChecks needed, start of test

//     //         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//     //         await this.enterInputFieldTextByLabel('First Name', this.do.personalDetails.firstName);

//     //         await this.enterInputFieldTextByLabel('Last Name', this.do.personalDetails.surname);

//     //         //DOB

//     //         await this.enterInputFieldTextByLabel('Date of birth', this.do.personalDetails.dob);

//     //         //Verify Age is added as expected

//     //         //try{

//     //         var actualAge = await $('#Age').getAttribute('value');

//     //         //var  currAge ='39';

//     //         var expectedAge = await getAge(this.do.personalDetails.dob);

//     //         if (actualAge == expectedAge) {

//     //             await logout('SFQPO:sf_captureUserDetails(): Age is calculated as expected');

//     //         }

//     //         else {

//     //             await logout('SFQPO:sf_captureUserDetails(): Age is not calculated as expected');

//     //         }

//     //         //Occupation

//     //         await this.enterInputFieldTextByLabel('Occupation', this.do.personalDetails.occupation);

//     //         // Occupation list should be showing, very likely with just 1 value showing, so click it

//     //         await browser.sleep(1000); // allow time for list to be showing, replace with preCheckElem, when put into own function

//     //         var checkName = 'Is Occupation list showing';

//     //         occupationListElem = $('#Occupation').element(by.xpath('..')).$('li');

//     //         occupationListType = 'present';

//     //         try {

//     //             await this.postCheck(occupationListElem, occupationListType, functionName, checkName);

//     //             await $('#Occupation').element(by.xpath('..')).$$('li').first().click();

//     //             await logout('SFQPO:sf_captureUserDetails(): Multiple occupations showing, so selected first one...');

//    //         } catch (e) {

//     //             await logout('SFQPO:sf_captureUserDetails(): Only 1 Occupation is showing, so clicking it....')

//     //             await $('#Occupation').element(by.xpath('..')).$('li').click();

//     //         }

//     //         //await browser.sleep(2000);

//     //         //*********Verify Occupation Class is added as expected************************

//     //         // var actualOccupationClass = await $('#Class').getAttribute('value');

//     //         // //var actualOccupationClass = '1';

//     //         // var expectedOccupationClass  = await this.getOccupationClass(this.do.personalDetails.occupation);

//     //         // if (actualOccupationClass == expectedOccupationClass) {

//     //         //            await logout('SFQPO:sf_captureUserDetails(): Occupation Class generated as expected');

//     //         // }

//     //         // else {

//     //         //            await logout('SFQPO:sf_captureUserDetails(): Occupation Class is not generated as expected');

//     //         // }

//     //         //Gender

//     //         await this.selectValueByRadioButton('Gender', this.do.personalDetails.gender);

//     //         //Smoking Status

//     //         await this.selectValueByRadioButton('Smoking Status', this.do.personalDetails.smokerStatus);

//     //         await this.passResult(functionName, testName, testValue);

//     //     } catch (e) {

//     //         await this.failResult(functionName, testName, testValue, e);

//     //         return false;

//     //     }

//     //     // dont Click Next

//     //     //await this.buttonClick('Next', 'Select Product');

//     //     //await this.passResult('SFQPO:sf_captureUserDetails()', 'Enter User Details', 'UserValues Capture');

//     //     //}

//     //    //catch (e) {

//     //     //await this.failResult('SFQPO:sf_captureUserDetails()', 'Enter User Details', 'UserValues Capture', e);

//     //     //}

//     //     await logout('SFQPO:sf_captureUserDetails(): function completed... all fields entered, not submitted');

//     //     return true;

//     // }

 

//     this.verifyAge = async function(){

//         var functionName = 'SFQPO:verifyAge()';

//         var testName = 'Check age is calculated correctly from DOB on client details';

//         // set the shortcut var to the personal details for the client in the DO

//         var currentClient = this.do.clients[this.do.clients.selectedClient];

//         var clientDetails = currentClient.personalDetails;

//         var fieldIdAndCountArray = await this.getFieldIdAndCount('Age');

//         var fieldId = fieldIdAndCountArray[0];

//         var domCount = fieldIdAndCountArray[1];

//         await logout(functionName + 'Age id: ' + fieldId);

//         await logout(functionName + 'Age domCount: ' + domCount);

     

//         var elementCount = $$('#' + fieldId).count();

//         await logout(functionName + ': Elem Count(' + fieldId + '): ' + await elementCount);

//         var actualAge = await $$('#' + fieldId).get(domCount).getAttribute('value');

//         var expectedAge = await getAge(clientDetails.dob);

//         if (actualAge == expectedAge) {

//            await logout('SFQPO:captureClientDetails(): Age is calculated as expected');

//             await this.passResult(functionName, testName, 'UI Age(' + actualAge + ') vs DO Age(' + expectedAge + ')');

//         }

//         else {

//             await logout('SFQPO:captureClientDetails(): Age is not calculated as expected');

//             await this.failResult(functionName, testName, 'Checking Age calc correct', 'ERROR: UI Age(' + actualAge + ') NOT EQUAL to DO Age(' + expectedAge + ')');

//         }

//         return true;

//     }

//     this.enterOccupationById = async function (fieldLabel, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterOccupationById()';

//         var testName = 'Enter Occupation and select first from list';

//         var testValue = textValue;

//         // get id from label

//         var fieldIdAndCountArray = await this.getFieldIdAndCount(fieldLabel);

//         var fieldId = fieldIdAndCountArray[0];

//         var domCount = fieldIdAndCountArray[1];

//         await logout(functionName + 'id: ' + fieldId);

//         await logout(functionName + 'domCount: ' + domCount);

//         // var elementCount = $$('#' + fieldId).count();

//         // await logout(functionName + ': Elem Count(' + fieldId + '): ' + await elementCount);

//         var preCheckElem = $$('#' + fieldId).get(domCount).element(by.xpath('..')).$('input[type="text"]');

//         // var preCheckElem = element.all(by.cssContainingText('label', fieldLabel)).get(domCount).element(by.xpath('..')).$('input[type="text"]');

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem;

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.clear();

//             await actElem.sendKeys(testValue);

//             // await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             // await this.passResult(functionName, testName, testValue);

 

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//         // var occupationListElem;

//         // if(domCount==0){

//         //     occupationListElem = $('#' + fieldId).element(by.xpath('..')).$('li');

//         // }else{

//         //     occupationListElem = $$('#' + fieldId).get(domCount).element(by.xpath('..')).$('li');

//         // }

//         var occupationListType = 'present';

//         var occupationListElem = $$('#' + fieldId).get(domCount).element(by.xpath('..')).$$('li');

//         try {

//             await this.postCheck(occupationListElem, occupationListType, functionName, checkName);

//             await occupationListElem.first().click();

//             // await $$('#' + fieldId).get(domCount).element(by.xpath('..')).$$('li').first().click();

//             await logout('SFQPO:captureClientDetails(): Multiple occupations showing, so selected first one...');

//         } catch (e) {

//             await logout('SFQPO:captureClientDetails(): Only 1 Occupation is showing, so clicking it....')

//             await occupationListElem.click();

//             // await $$('#' + fieldId).get(domCount).element(by.xpath('..')).$('li').click();

//         }

//         return true;

//     }

//     this.selectCheckboxById = async function(fieldLabel, textValue){

//          // ### BOILERPLATE FUNCTION CODE ###

//          var functionName = appnID + 'selectCheckboxById()';

//          var testName = 'Select checkbox for ' + fieldLabel;

//          var testValue = textValue;

//          await logout(functionName + ': ... textValue: ' + textValue);

//          if(textValue == 'true'){

//             // get id from label

//             var fieldIdAndCountArray = await this.getFieldIdAndCount(fieldLabel);

//             var fieldId = fieldIdAndCountArray[0];

//             var domCount = fieldIdAndCountArray[1];

//             await logout(functionName + 'id: ' + fieldId);

//             await logout(functionName + 'domCount: ' + domCount);

           

//             //var preCheckElem = element.all(by.cssContainingText('label',fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

   

//             var preCheckElem = $$('#' + fieldId).get(domCount).element(by.xpath('..')).$('span');

//             // var preCheckElem = $$('#' + fieldId).get(domCount).element(by.xpath('..')).$('input[type="checkbox"]');

//             // var preCheckElem = element.all(by.cssContainingText('label', fieldLabel)).get(domCount).element(by.xpath('..')).$('input[type="text"]');

//             var preCheckType = 'clickable'

//             var actElem = preCheckElem;

//             var postCheckElem = preCheckElem

//             var postCheckType = 'visible'; //visible, clickable

//             try {

//                 // no preChecks needed, start of test

//                 await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//                 await actElem.click();

       

//                 await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//                 await this.passResult(functionName, testName, testValue);

//                 return true;

//             } catch (e) {

//                 await this.failResult(functionName, testName, testValue, e);

//                 return false;

//             }

//         }else{

//             await logout(functionName + ': value is false, so not selecting checkbox');

//             await this.passResult(functionName, testName, testValue);

//         }

//         return true;

//     }

//     // *** new function that only updates some of the client details fields.

//     // *** the updates come from the existing unit test data values applicable to personalDetails

//     this.captureClientDetails_updateUnitTestChangesOnly = async function () {

//         var functionName = 'SFQPO:captureClientDetails_updateUnitTestChangesOnly(): ';

//         var testName = 'Capture updates to Client Details';

//         var testValue = 'All valid';

//         await logout('SFQPO:captureClientDetails(): ...');

//         // set the shortcut var to the personal details for the client in the DO, make sure it exists, perhaps run function await po.updateMissingClientPersonalDetails(); prior to this function

//         var currentClient = this.do.clients[this.do.clients.selectedClient];

//         var clientDetails = currentClient.personalDetails;

//         // await logout(functionName + 'Step label: ' + await this.whatIsMyStepLabel());

//         // await logout(functionName + 'H1 heading: ' + await this.whatIsMyH1Heading());

//         var preCheckElem = element(by.cssContainingText('h1', 'Capture Client Details'));

//         var preCheckType = 'present';

//         // get unit test data

//         var unitTestData = this.do.excelData.unitTestData;

//         var unitTestRefs = this.do.excelData.objRef;

//         var fieldValueArray = [];

//         var keyValuePair = {};

//         await logout(functionName + ': unitTestData: ' + JSON.stringify(unitTestData));

//         await logout(functionName + ': unitTestRefs: ' + JSON.stringify(unitTestRefs));

//         try{

//             // cycle through refs for personaldetails fields, then check if a value exists in Data

//             for(var x=0;x<unitTestData.length;x++){

//                 var fieldRefArray = unitTestRefs[x].split('.');

//                 if(fieldRefArray[0] == 'personalDetails'){

//                     if(unitTestData[x] != 'null'){

//                         // got a field worth updating

//                         // store to array at this stage

//                         // keyValue first

//                         keyValuePair.key =  fieldRefArray[1];

//                         keyValuePair.value = unitTestData[x];

//                         // push to array as a pair, keep filling up

//                         fieldValueArray.push(keyValuePair);

//                     }

//                 }

//             }

//             await logout(functionName + ': fieldValueArray: ' + JSON.stringify(fieldValueArray));

//             // now process array

//             // here are generic entry fields, all others require special handling

//             var textFieldsArray = ['firstName','lastName'];

//             var radioFieldsArray = ['gender','smoker'];

//             if(fieldValueArray.length > 0){

//                 // iterate array, and make necessary updates in the UI

//                 for(var x=0; x<fieldValueArray.length;x++){

//                     await logout(functionName + ': fieldValueArray[x].key: ' + fieldValueArray[x].key);

//                     await logout(functionName + ': fieldValueArray[x].value: ' + fieldValueArray[x].value);

//                     // get label for field

//                     var fieldLabel = await this.sf_getVariableLabel(fieldValueArray[x].key, this.do.clients.definitions.personalDetails);

//                     await logout(functionName + ': fieldLabel: ' + fieldLabel);

//                     // handle text fields

//                     if(textFieldsArray.indexOf(fieldValueArray[x].key) != -1){

//                         await this.enterTextfieldById(fieldLabel, fieldValueArray[x].value);

//                     }

                  

//                     // handle radios

//                     if(radioFieldsArray.indexOf(fieldValueArray[x].key) != -1){

//                         await this.selectRadioById(fieldLabel, fieldValueArray[x].value);

//                     }

//                     // handle age, dob

//                     if(fieldValueArray[x].key == 'dob'){

//                         await this.enterTextfieldById(fieldLabel, fieldValueArray[x].value);

//                         await this.verifyAge(); // bug in web UI

//                     }

//                     if(fieldValueArray[x].key == 'age'){

//                         await logout(functionName + ': doing a unit test data update for age: ' + fieldValueArray[x].value)

//                         // get dob from age

//                         var dob = await this.fn.getDOBFromAge(fieldValueArray[x].value);

//                         clientDetails.dob = dob;

//                         await this.enterTextfieldById('Date of birth', dob);

//                         await this.verifyAge(); // bug in web UI

//                     }

//                     // handle occupation, class

//                     if(fieldValueArray[x].key == 'occupation'){

//                         await logout('occupation fieldLabel should be Occupation: ' + fieldLabel);

//                         await browser.sleep(5000);

//                         await this.enterOccupationById(fieldLabel, fieldValueArray[x].value);

//                     }

//                     if(fieldValueArray[x].key == 'class'){

//                         var occupation = await this.fn.getRandomOccupationFromClass(fieldValueArray[x].value, this.do);

//                         await this.enterOccupationById('Occupation', occupation);

//                     }

//                     // handle ANZ@Work

//                     if(fieldValueArray[x].key == 'ANZWork'){

//                         await this.selectCheckboxById(fieldLabel, fieldValueArray[x].value);

//                     }

//                 }

//             }

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//         await logout('SFQPO:sf_captureUserDetails(): function completed... fields updated (if any), not submitted');

//         return true;

 

//         // try {

//         //     // no preChecks needed, start of test

//         //     await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         //     await this.enterTextfieldById('First Name', clientDetails.firstName);

//         //     await this.enterTextfieldById('Last Name', clientDetails.lastName);

//         //     await this.selectRadioById('Gender', clientDetails.gender);

//         //     await this.enterTextfieldById('Date of birth', clientDetails.dob);

//         //     await this.verifyAge(); // bug in web UI

//         //     await this.selectRadioById('Smoker', clientDetails.smoker);

//         //     await this.enterOccupationById('Occupation', clientDetails.occupation);

//         //     await this.selectCheckboxById('ANZ@Work', clientDetails.ANZWork);

//         //     await browser.sleep(1000);

//         //     await this.passResult(functionName, testName, testValue);

      

//     }

 

//     // Refactored for multi client model eg. this.do.clients.client1.personalDetails.firstName

//     //This function can be used for positive scenarios

//     this.captureClientDetails = async function () {

//         // *** assumption: that all values intended to be put into form are available for entry by this function

//         // *** if you need to add missing details, then use a function such as setNewClientPersonalDetailsInDO(), updateMissingClientPersonalDetails()

//         var functionName = 'SFQPO:captureClientDetails(): ';

//         var testName = 'Capture initial Client Details all fields';

//         var testValue = 'All valid';

//         await logout('SFQPO:captureClientDetails(): ...');

//         // set the shortcut var to the personal details for the client in the DO, make sure it exists, perhaps run function await po.updateMissingClientPersonalDetails(); prior to this function

//         var currentClient = this.do.clients[this.do.clients.selectedClient];

//         var clientDetails = currentClient.personalDetails;

//         await logout(functionName + 'Step label: ' + await this.whatIsMyStepLabel());

//         await logout(functionName + 'H1 heading: ' + await this.whatIsMyH1Heading());

//         var preCheckElem = element(by.cssContainingText('h1', 'Capture Client Details'));

//         var preCheckType = 'present';

//         try {

//             // no preChecks needed, start of test

//            await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await this.enterTextfieldById('First Name', clientDetails.firstName);

//             await this.enterTextfieldById('Last Name', clientDetails.lastName);

//             await this.selectRadioById('Gender', clientDetails.gender);

//             await this.enterTextfieldById('Date of birth', clientDetails.dob);

//             await this.verifyAge(); // bug in web UI

//             await this.selectRadioById('Smoker', clientDetails.smoker);

//             await this.enterOccupationById('Occupation', clientDetails.occupation);

//             await this.selectCheckboxById('ANZ@Work', clientDetails.ANZWork);

//             await browser.sleep(1000);

//             await this.passResult(functionName, testName, testValue);

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//         await logout('SFQPO:sf_captureUserDetails(): function completed... all fields entered, not submitted');

//         return true;

//     }

//     async function getAge(birthday) { // birthday is a date

//         await logout('SFQPO:getAge(): check birthday in: ' + birthday);

//         var dobArray = birthday.split('/');

//         var dob = new Date(dobArray[1] + '/' + dobArray[0] + '/' + dobArray[2]);

//         //await logout('OPO:getAge(): post regex update: ' + birthday.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3") );

//         //var dob = new Date(birthday.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3") );

//         // var dob = new Date(birthday);

//       await logout('SFQPO:getAge(): check dob: ' + dob);

//         var ageDifMs = Date.now() - dob.getTime();

//        var ageDate = new Date(ageDifMs); // miliseconds from epoch

//         await logout('SFQPO:getAge(): check age value: ' + Math.abs(ageDate.getUTCFullYear() - 1970));

//         return Math.abs(ageDate.getUTCFullYear() - 1970);

//     }

//     this.getBoundaryOccupation = async function(getType, typeValue){

//         var functionName = 'SFQPO:getBoundaryOccupation()';

//         // gets an occupation label from classes 1-3, the ones that are seemingly always valid and not affected by rules

//         // first get all occupations into one array, otherwise we are assigning equal weight to the groups, where the size is different

//         var allOccupationsArray = [];

//         await logout(functionName + ': allOccupationsArray length is now: ' + allOccupationsArray.length);

//         // assumptions - uses class 1-3, unless otherwise stated

//         for(var x=1;x<4;x++){

 

//             var classDO = this.do.occupationClass['class' + x];

//             for(var y=1;y<classDO.length;y++){

//                 allOccupationsArray.push(classDO[y]);

//             }

//         }

//         switch(getType){

//             case 'longest':

//                 var longestName='';

//                 for(var x = 0; x<allOccupationsArray.length; x++){

//                     if(allOccupationsArray[x].length > longestName){

                

//                         longestName = allOccupationsArray[x];

//                         await logout(functionName + ': new longest name: ' + longestName);

//                     }

//                 }

//                 await logout(functionName + ': longest name: ' + longestName + '(' + longestName.length + ')');

//                 break;

//             default:

//                 // nothing

//         }

 

 

//         return true;

//     }

//     this.getRandomValidOccupation = async function(){

//         var functionName = 'SFQPO:getRandomOccupation()';

//         // gets an occupation label from classes 1-3, the ones that are seemingly always valid and not affected by rules

//         // first get all occupations into one array, otherwise we are assigning equal weight to the groups, where the size is different

//         var allOccupationsArray = [];

//         //await logout(functionName + ': allOccupationsArray length is now: ' + allOccupationsArray.length);

//         for(x=1;x<4;x++){

//             var classDO = this.do.occupationClass['class' + x];

//             for(y=0;y<classDO.length;y++){

//                 allOccupationsArray.push(classDO[y]);

//                 // allOccupationsArray.push('--' + x + '--' + classDO[y]);

//             }

//             //await logout(functionName + ': allOccupationsArray length is now: ' + allOccupationsArray.length);

//         }

//        // await logout(functionName + ': all occupations: ' + JSON.stringify(allOccupationsArray));

//         await logout(functionName + ': allOccupationsArray length is now: ' + allOccupationsArray.length);

//         var randomSelection = Math.floor(Math.random() * allOccupationsArray.length);

//         var randomOccupationLabel = allOccupationsArray[randomSelection];

//         await logout(functionName + ': randomOccupationLabel: ' + randomOccupationLabel);

//         return randomOccupationLabel;

//     }

//     this.getRandomOccupationFromClass = async function(classNumber){

//         var functionName = 'SFQPO:getRandomOccupationFromClass()';

//         // gets an occupation label from classes 1-3, the ones that are seemingly always valid and not affected by rules

//         // first get all occupations into one array, otherwise we are assigning equal weight to the groups, where the size is different

//         var allOccupationsArray = [];

//         //await logout(functionName + ': allOccupationsArray length is now: ' + allOccupationsArray.length);

//         //for(x=1;x<6;x++){

//         var classDO = this.do.occupationClass['class' + classNumber];

//         for(y=0;y<classDO.length;y++){

//             allOccupationsArray.push(classDO[y]);

//             // allOccupationsArray.push('--' + x + '--' + classDO[y]);

//         }

//             //await logout(functionName + ': allOccupationsArray length is now: ' + allOccupationsArray.length);

//         //}

//        // await logout(functionName + ': all occupations: ' + JSON.stringify(allOccupationsArray));

//         await logout(functionName + ': allOccupationsArray length is now: ' + allOccupationsArray.length);

//         var randomSelection = Math.floor(Math.random() * allOccupationsArray.length);

//         var randomOccupationLabel = allOccupationsArray[randomSelection];

//         await logout(functionName + ': randomOccupationLabel: ' + randomOccupationLabel);

//         return randomOccupationLabel;

//     }

//     this.getOccupationClass = async function (occupation) {

//         var functionName = 'SFQPO:getOccupationClass()';

//         var testName = 'Check class';

//         var testValue = occupation;

//         var expectedOccupationClass;

//         var preCheckElem = $('body');

//         var preCheckType = 'present';

//         await logout('SFQPO:getOccupationClass(): check occupation class for: ' + occupation);

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             //await logout('sfqPO:getOccupationClass(): this.do.occupationClass: ' + JSON.stringify(this.do.occupationClass));

//             // await logout('sfqPO:getOccupationClass(): this.do.occupationClass: ' + typeof this.do.occupationClass);

//             if (this.do.occupationClass.class1.indexOf(occupation) != -1) {

//                 await logout('SFQPO:getOccupationClass(): Occupation ' + occupation + ' is present in Class 1');

//                 var expectedOccupationClass = '1';

//                 await this.passResult(functionName, testName, expectedOccupationClass);

//                 return expectedOccupationClass;

//             }

//             if (this.do.occupationClass.class2.indexOf(occupation) != -1) {

//                 await logout('SFQPO:getOccupationClass(): Occupation ' + occupation + ' is present in Class 2');

//                 var expectedOccupationClass = '2';

//                 await this.passResult(functionName, testName, expectedOccupationClass);

//                 return expectedOccupationClass;

//             }

//             if (this.do.occupationClass.class3.indexOf(occupation) != -1) {

//                 await logout('SFQPO:getOccupationClass(): Occupation ' + occupation + ' is present in Class 3');

//                 var expectedOccupationClass = '3';

//                 await this.passResult(functionName, testName, expectedOccupationClass);

//                 return expectedOccupationClass;

//             }

//             if (this.do.occupationClass.class4.indexOf(occupation) != -1) {

//                 await logout('SFQPO:getOccupationClass(): Occupation ' + occupation + ' is present in Class 4');

//                 var expectedOccupationClass = '4';

//                 await this.passResult(functionName, testName, expectedOccupationClass);

//                 return expectedOccupationClass;

//             }

//             if (this.do.occupationClass.class5.indexOf(occupation) != -1) {

//                 await logout('SFQPO:getOccupationClass(): Occupation ' + occupation + ' is present in Class 5');

//                 var expectedOccupationClass = '5';

//                 await this.passResult(functionName, testName, expectedOccupationClass);

//                 return expectedOccupationClass;

//             }

//         } catch (e) {

//             await this.failResult(functionName, testName, expectedOccupationClass, 'ERROR: was expecting a class match 1-5 for ' + occupation + ': ' + e);

//             return 'ERROR: FAILED to get occupation class';

//         }

//     }

//     //To be used for negative scenarios for Capture User details Page

//     this.sf_checkForErrorAny = async function (labelName, errorCondition) {

//         try {

//             switch (errorCondition) {

//                 case 'numeric':

//                    var dataToEnter = Math.floor(Math.random() * 10);

//                     break;

//                 case 'specialcharacter':

//                     var chars = ['!', '@', '#', '$', '%', '^', '*'];

//                     var dataToEnter = Math.floor(Math.random() * chars.length);

//                     break;

//             }

//             if (this.do.validation.errorType == 'Submit') {

//                 //First Name,Surname,DateofBirth,Occupation

//                 await this.enterInputFieldTextByLabel(labelName, dataToEnter);

//                 //Click Next

//                 await element(by.cssContainingText('button', 'Next'));

//                 await logout('SFQPO:sf_checkForErrorAny(): checking for any warn or error messages');

//                 // Look for Error Message ******* Capture Error Message when UI is built to cover Negative Scenario********

//                 //  (Error Message Check Code will come in here);

//                 if (await $('#alert-container').isPresent()) {

//                     var errorText = $('#alert-container').$$('div').get(1).$('p').getText();

//                     await logout('Error message is ' + errorText);

//                     await this.passResult('SFQPO:sf_checkForErrorAny()', 'Check Error Message', errorText);

//                 }

//             }

//         }

//         catch (e) {

//             await this.failResult('SFQPO:sf_captureUserDetailsForError()', errorCondition, labelName, e);

//         }

//         if (this.do.validation.errorType == 'onTab') {

//         }

//     }

//     this.sf_checkRequiredWarning = async function (labelName) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'sf_checkRequiredWarning()';

//         var testName = 'Check for inline Required Text for ' + labelName;

//         var testValue = '';

//         //var preCheckElem = element(by.cssContainingText('button',buttonName));

//         var preCheckElem = element(by.cssContainingText('label', labelName)).element(by.xpath('../..')).element(by.cssContainingText('small[aria-hidden="false"]', 'required'));

//         var preCheckType = 'present';

//         // var actElem = preCheckElem

//         //Post checking on label - for navigating to new pages or searches ******* modify this as per what is avaialble on next screen*******

//         //var postCheckElem = element.all(by.cssContainingText('span',linkName)).first()//.element(by.xpath('../..')).$('input[type="text"]');

//         //var postCheckElem = element(By.cssContainingText('h2','New Lead'))

//         //element(by.cssContainingText('label',labelName));

//         // var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             // await actElem.click();

//             //await this.postCheck(postCheckElem, postCheckType, functionName, testName);                              

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//         // try {

//         //            await preCheckElem

//         // var warningText = await element(by.cssContainingText('label', labelName)).element(by.xpath('../..')).$$('div').get(5).$$('small').get(7).getText();

//         // if (warningText == 'required') {

//         //            await this.passResult('SFQPO:sf_checkRequiredWarning()', 'Check Required Warning', labelName);

//        // }

//         //            else{

//         //                            await logout('Required warning text is not present');

//         //                            await this.failResult('SFQPO:sf_checkRequiredWarning()','Check Required Warning', labelName, 'Warning text is shown as '+warningText);

//         //            }

//         // } catch (e){

//         //            await this.failResult('SFQPO:sf_checkRequiredWarning()','Check Required Warning', labelName, e);

//         // }

//     }

//     this.checkErrorTypeAndContent = async function (labelName) {

//         var functionName = 'SFQPO:checkErrorTypeAndContent()';

//         var testName = 'Check Error is present with correct content';

//         if (this.do.validation.errorType == 'onTab') {

//             try {

//                 //Tab to the next field

//                 await browser.actions().sendKeys(protractor.Key.TAB).perform();

//                 //await browser.sleep(500);

//                 //Check Required Warning

//                 await logout('SFQPO:checkErrorTypeAndContent(): checking for any warn or error messages');

//                 var warningText = await element(by.cssContainingText('label', labelName)).element(by.xpath('../..')).$$('div').get(5).$$('small').get(7).getText();

//                 await logout('SFQPO:checkErrorTypeAndContent(): this.do.validation.errorContent: ' + this.do.validation.errorContent);

//                await logout('SFQPO:checkErrorTypeAndContent(): this.do.validation.errorContent.indexOf(warningText): ' + this.do.validation.errorContent.indexOf(warningText));

//                 if (this.do.validation.errorContent.indexOf(warningText) > -1) {

//                     //Enter Valid Value -- currently in scope only for Labelname

//                     await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                     await this.passResult('SFQPO:checkErrorTypeAndContent()', 'Valid value entry', labelName);

//                } else {

//                     //Enter Valid Value -- currently in scope only for Labelname

//                     await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                     await logout('SFQPO:checkErrorTypeAndContent(): Required warning text is not present');

//                     await this.failResult('SFQPO:checkErrorTypeAndContent()', 'Check onTab Error', labelName, 'Warning text is shown as ' + warningText);

//                 }

//             } catch (e) {

//                 //Enter Valid Value -- currently in scope only for Labelname

//                 await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                 await this.failResult('SFQPO:checkErrorTypeAndContent()', 'Check onTab Error', labelName, e);

//             }

//         }

//         if (this.do.validation.errorType == 'onSubmit') {

//             await logout('SFQPO:checkErrorTypeAndContent(): onSubmit... ');

//             try {

//                 //Click Next

//                 await this.buttonClickError('Next', 'Error'); //h2 is Error

//                 await logout('SFQPO:checkErrorTypeAndContent(): checking for any warn or error messages');

//                 //Look for Error Message

//                 // await browser.wait(protractor.ExpectedConditions.visibilityOf($('#alert-container')), 10000);

//                 var actualErrorContent = await $('#alert-container').$('p').getText();

//                 // var actualErrorContent = await $('#alert-container').$$('div').get(1).$('p').getText();

//                 await logout('Error message is ' + await actualErrorContent);

//                 await logout('SFQPO:checkErrorTypeAndContent(): Error message index: ' + await actualErrorContent.indexOf(this.do.validation.errorContent));

//                 if (await actualErrorContent.indexOf(this.do.validation.errorContent) > -1) {

//                     await logout('SFQPO:checkErrorTypeAndContent(): Error Message is displayed as expected');

//                     //Click OK to come back to Capture Client Details

//                     await this.buttonClick('OK', 'Capture Client Details');

//                     // check alert gone

//                     var alertElem = $('div[role="alertdialog"]');

//                     var alertCheckType = 'stale';

//                     testName = 'Check error gone';

//                     await this.postCheck(alertElem, alertCheckType, functionName, testName);

//                     //TODO: put in spinner handler to check spinner gone away, stale

//                     // need to handle different types of fields for corrective data entry

//                     // tactical solution here. TODO. refactor to handle all field types. use with refac of DO client details to include field type

//                     //Enter Valid Value -- currently in scope only for Labelname

//                     // await logout('##########');

//                     // await logout('##########');

//                     // await logout('##########');

//                     // await logout('########## labelName: ' + labelName);

//                     // await logout('indexOf thing: ' + "Gender,Smoker Status".indexOf(labelName));

//                     if ("Gender,Smoking Status".indexOf(labelName) == -1) {

//                         await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                     } else {

//                         await this.selectValueByRadioButton(labelName, this.do.validation.validValue);

//                     }

//                     await this.passResult(functionName, testName, labelName);

//                 } else {

//                     //Enter Valid Value -- currently in scope only for Labelname

//                     //await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                     await logout('SFQPO:checkErrorTypeAndContent(): Error Message is not displayed as expected');

//                     await this.failResult(functionName, testName, labelName, 'Error Message is not displayed as expected');

//                }

//             } catch (e) {

//                 //Enter Valid Value -- currently in scope only for Labelname

//                 // await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                 await this.failResult(functionName, testName, labelName, e);

//             }

//         }

//         if (this.do.validation.errorType == 'onEntry') { // looking for big red cross with message. cross is a div.message and, span text

//             await logout('SFQPO:checkErrorTypeAndContent(): onEntry ... ');

//             //try{

//             //Tab to the next field

//             //await browser.actions().sendKeys(protractor.Key.TAB).perform();

//             await browser.sleep(500); // wait for javascript to execute...

//             //Check Required Warning

//             await logout('SFQPO:checkErrorTypeAndContent(): checking for any big red cross and error message');

//             var warningElem = $('div[msg="Requirement"]').element(by.cssContainingText('span', this.do.validation.errorContent));

//             // var warningText = await element(by.cssContainingText('span',this.do.validation.errorContent));

//             await browser.sleep(500);

//             await this.preCheck(warningElem, 'present', 'Checking for warning text', 'Big red error');

//             // var warningText = await element(by.cssContainingText('label', labelName)).element(by.xpath('../..')).$$('div').get(5).$$('small').get(7).getText();

//             var warningElemText = await warningElem.getText();

//             await logout('SFQPO:checkErrorTypeAndContent(): await warningElem.getText(): ' + await warningElemText);

//             // try{

//             //            await logout('SFQPO:checkErrorTypeAndContent(): this.do.validation.errorContent: ' + await this.do.validation.errorContent);

//             //            await logout('SFQPO:checkErrorTypeAndContent(): element.getText(): ' + await warningText.getText());

//             //            await logout('SFQPO:checkErrorTypeAndContent(): this.do.validation.errorContent.indexOf(warningText): ' + this.do.validation.errorContent.indexOf(await warningText.getText()));

//             // }catch(e){

//             //            await logout(e);

//             // }

//             try {

//                 // is there an error match? PASS

//                 if (await warningElemText.indexOf(this.do.validation.errorContent) > -1) {

//                     // if (this.do.validation.errorContent.indexOf(await warningText.getText())>-1) {

//                     //Enter Valid Value -- currently in scope only for Labelname

//                     await this.enterTextByLabelPreDropDown(labelName, this.do.validation.validValue);

//                     // if drop down list, then select first option

//                     // TODO: background: we got here because we are doing an inline field 'big red erorr' test that looks for specific error text from excel.

//                     // We entered an invalid value, then checked for error. Error was present, and now we are setting a valid value. We want to select the first option in drop down.

//                     // But not always, because we may have a field that does not behave this way. eg. dob. So now we are selecting for the targetgroup name.... hmmm.

//                     if (this.do.meta.targetGroup.name == 'occupation') { // not a great design, as we are linking excel strings to PO code. TODO: refactor, redesign

//                         await this.dropDownListSelectFirst();

//                     }

//                     await this.passResult('SFQPO:checkErrorTypeAndContent()', 'Check error displayed for ' + labelName, warningElemText);

//                 } else { // FAIL no error match

//                     //Enter Valid Value -- currently in scope only for Labelname

//                     await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                     await logout('SFQPO:checkErrorTypeAndContent(): Required warning text is not present');

//                     await this.failResult('SFQPO:checkErrorTypeAndContent()', 'Check onEntry Error', labelName, 'Warning text is shown as ' + await warningElemText);

//                 }

//             } catch (e) {

//                 //Enter Valid Value -- currently in scope only for Labelname

//                 //await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                 await this.failResult('SFQPO:checkErrorTypeAndContent()', 'CATCH: Check onEntry Error', labelName, e);

//             }

//         }

//         if (this.do.validation.errorType == 'redLine') {

//             //Tab to the next field

//             await browser.actions().sendKeys(protractor.Key.TAB).perform();

//             //await browser.sleep(500);

//             //Check Required Warning

//             await logout('SFQPO:checkErrorTypeAndContent(): checking for red line... ');

//             var testName = 'Checking for presence of Red Line error for ' + labelName;

//             var warningElem = await element(by.cssContainingText('label', labelName)).element(by.xpath('..')).$('input[aria-invalid="true"]');

//             var warningElemCheckType = 'present';

//             try {

//                 await this.preCheck(warningElem, warningElemCheckType, functionName, testName);

//                 //Enter Valid Value -- currently in scope only for Labelname

//                 await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                 await this.passResult('SFQPO:checkErrorTypeAndContent()', 'Check for red line error ', labelName);

//             } catch (e) {

//                 //Enter Valid Value -- currently in scope only for Labelname

//                 await this.enterInputFieldTextByLabel(labelName, this.do.validation.validValue);

//                 await logout('SFQPO:checkErrorTypeAndContent(): Red Line did not show... entering valid value and continue tests');

//                 await this.failResult('SFQPO:checkErrorTypeAndContent()', 'Check onTab Error', labelName, 'Warning text is shown as ' + warningText);

//             }

//         }

//         return true;

//     }

//     this.sf_selectProduct = async function () {

//         //Check No Products are selected

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = 'SFQPO:sf_selectProduct()';

//         var testName = 'Select Business Product';

//         var testValue = this.do.product.selectedProduct;

//         // var preCheckElem = element.all(by.cssContainingText('span',placeholderValue)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckElem = $('#configureProducts');

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem.element(by.cssContainingText('h2', this.do.product.selectedProduct));

//        var postCheckElem = $('#ConfigureCoveragesLife').element(by.cssContainingText('h1', 'Product Configuration'));

//         var postCheckType = 'visible'; //visible, clickable

//         await logout(functionName + 'Step label: ' + await this.whatIsMyStepLabel());

//         await logout(functionName + 'H1 heading: ' + await this.whatIsMyH1Heading());

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await logout('SFQPO:sf_selectProduct() : Checking all 4 Products are available...');

//             for (i = 0; i < this.do.product.productList.length; i++) {

//                 if (preCheckElem.element(by.cssContainingText('h2', this.do.product.productList[i])).isPresent()) {

//                     await logout('SFQPO:sf_selectProduct(): Product ' + this.do.product.productList[i] + ' is present');

//                 } else {

//                     await logout('SFQPO:sf_selectProduct(): Product ' + this.do.product.productList[i] + ' is not present');

//                 }

//             }

//             await logout('SFQPO:sf_selectProduct() : Selecting Product ' + this.do.product.selectedProduct);

//             await actElem.click();

//             //Click Next

//             //await preCheckElem.element(by.cssContainingText('button', 'Next')).click();

//             //await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

      

//    }

//     // Checks count of Benefits per product, Product name passed from XL

//     this.unitTest_benefitListChecker = async function (unitTestName) {

//         await logout('SFQPO: unitTest_benefitListChecker(): ... ');

//         // STARTING POINT: IS THE PRODUCT SELECTION PAGE

//         var functionName = appnID + 'unitTest_benefitListChecker()';

//         var testName = 'Check benefits are present, ordered correctly, not extras';

//         var productLabel;

//         var postCheckElem;

//         var postCheckType;

//         var productElem;

//         var productCheckType;

//         // ensure on correct page to start

//         var preCheckElem = $('section[id="configureProducts"]').element(by.cssContainingText('h1', 'Select Product'));

//         var preCheckType = 'clickable';

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         } catch (e) {

//             //

//             // failresult

//             await this.failResult(functionName, testName, testValue, e);

//             await this.navigateFromBenefitPageToProductSelection();

//             //return true; // should get to correct page to continue...

//         }

//         // iterate through product labels; get benefits, check benefits

//         do {

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

//                 // is my product availabe on the page to click

//                 productLabel = this.do.product.selectedProduct;

//                 testName = 'Is ' + productLabel + ' button available to click';

//                 // the product name to click in the big square box

//                 productElem = element(by.cssContainingText('h2', productLabel));

//                 productCheckType = 'clickable';

//                 // the big green tick showing product is selected

//                 var productSelectedElem = productElem.element(by.xpath('../..')).$('div[class="vloc-ins-selectable-item-selected ng-scope active"]');

//                 var productSelectedType = 'present';

//                 // the next page is loaded

//                 // benefitPageElem = element(by.cssContainingText('h2',productLabel));

//                 // benefitPageType = 'clickable'

           

 

//                 // UI

//                 // Client details UI container and benefit label array of elems

//                 // get clientDetails

//                 var client = this.do.clients[this.do.clients.selectedClient];

//                 var clientDetails = client.personalDetails;

//                 var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

//                 // var clientBenefitsArrayElems = clientContainerElem.all(by.cssContainingText('h3', benefitName));

//                 var benefitListUI = clientContainerElem.$$('h3');

//                 // plan showing list of benefits

//                 var customisePlanLink = clientContainerElem.element(by.cssContainingText('a', 'Customize Plan Details'));

//                 var customiseType = 'clickable';

//                 // main array of elems to get text from and compare is clientBenefitsArrayElems

//                 // var clientElem = '';

//                 // plan list container not hidden

//                 // var planListElem = clientElem.$('.border-style-bottom[aria-hidden="false"]');

//                 // var planListType = 'visible';

//                 // benefit labels h3's

            

//                 // lets do some stuff

//                 // is the product button showing?

//                 checkName = 'Check product button showing';

//                 await this.postCheck(productElem, productCheckType, functionName, checkName);

//                 // lets click it

//                 await productElem.click();

//                 // check the product is selected TODO: and no errors showing eg. big red cross

//                 checkName = 'Check product is selected';

//                 await this.postCheck(productSelectedElem, productSelectedType, functionName, checkName);

//                 // click next

//                await this.buttonClickById('configureProducts_nextBtn', 'Product Configuration');

           

//                 // check plan is showing with benefits, or click on Customize Plan Details

//                 checkName = 'Check plan is displaying benefits';

//                 try {

//                     // await this.postCheck(customisePlanLink, customiseType, functionName, testName);

//                     await customisePlanLink.click();

//                 } catch (e) {

//                     //if not showing, then assume it already showing

//                   await logout(functionName + ': Full plan is showing... continue...');

//                 }

//        // process.exit();

//                 // check plan is opened and showing list

//                 // testName = 'Check plan list is displayed after clicking link';

//                 // await this.postCheck(planListElem, planListType, functionName, testName);

//                 // get all Benefit Labels

//                 testName = 'Get all benefit labels';

           

//                 //var benefitLabelElems;

//                 var benefitLabelCountUI;

//                 var benefitLabelCountDO;

//                 var benefitLabelsDO;

//                 // benefitLabelElems = planListElem.$$('h3');

//                 // new way of doing this for multiple client

//                // benefitListUI = clientBenefitsArrayElems; // defined further up

//                 await logout(functionName + ': ' + testName + ': benefit label count: ' + await benefitListUI.count());

//                 benefitLabelCountUI = await benefitListUI.count();

//                 // await logout(functionName + ': ' + testName + ': benefit 0: ' + await benefitLabelElems.get(0).getText());

//                 // await logout(functionName + ': ' + testName + ': benefit 12: ' + await benefitLabelElems.get(12).getText());

           

              

//                 // get DO count of labels for this product

//                testValue = 'Gathering the benefit DO list';

//                 try {

//                     //get productName

//                     // proudct label is: productLabel

//                     // get productnamelabel from array, get index

//                     // replace the following two lines, with a dynamic lookup

//                     await logout('this.do.product.productList: ' + this.do.product.productList);

//                     var productList = this.do.product.productList;

//                     var productIndex = await productList.indexOf(productLabel);

//                     await logout('productIndex: ' + productIndex);

//                     var productNameLabelIndex = await this.do.product.productList.indexOf(productLabel);

//                     await logout('productNameLabelIndex: ' + productNameLabelIndex);

//                     var productNameDO = this.do.product.productListDO[productNameLabelIndex];

//                     await logout('productNameDO: ' + productNameDO);

//                     // get productnamedo uses function:

//                     var productDO = this.do.products.definitions[productNameDO];

//                    // var productDefinitions = productDO.definitions;

//                    // var selectedBenefit = productDO[this.do.product.selectedBenefit];

//                     // await logout('productDO: ' + await JSON.stringify(productDO.benefitList));

//                     //*await logout('doProduct: ' + await JSON.stringify(doProduct));

//                     // take benefitNames into an Array

//                     var benefitListArray = productDO.mappedBenefitList.map(function (item) {

//                         return item.label;

//                     });

//                     await logout('benefitListArray: ' + await JSON.stringify(benefitListArray));

//                     //              // get index of mappedBenefitList for label

//                     // var indexOfBenefit = benefitListArray.indexOf(benefitLabel);

//                     // // get doName for that benefit

//                     // var doBenefit = doProduct.mappedBenefitList[indexOfBenefit];

//                     benefitLabelCountDO = benefitListArray.length;

//                     await logout('benefitLabelCountDO: ' + benefitLabelCountDO);

//                     benefitLabelsDO = benefitListArray;

//                     await logout('benefitLabelsDO: ' + await JSON.stringify(benefitLabelsDO));

//                 } catch (e) {

//                     await this.failResult(functionName, testName, testValue, e);

//                     await logout('BenefitList construction: ' + e);

//                 }

//                 // finally a test! do the counts match?

//                 await logout(functionName + ': ' + testName + ': Benefit counts should match; DO(' + benefitLabelCountDO + ') vs UI(' + benefitLabelCountUI + ')');

//                 testName = 'Benefit list number on UI should match DO';

//                 testValue = 'DO(' + benefitLabelCountDO + ') vs UI(' + benefitLabelCountUI + ')';

//                 if (await benefitLabelCountDO == await benefitLabelCountUI) {

//                     await this.passResult(functionName, testName, testValue);

//                 } else {

//                     var e = 'ERROR: benefitLabelCount: DO(' + benefitLabelCountDO + ') != UI(' + benefitLabelCountUI + '). DO list: ' + JSON.stringify(benefitLabelsDO) + '. UI list: ' + JSON.stringify(await benefitListUI.getText())  ;

//                     await logout(functionName + ': ' + e);

//                     await logout(functionName + ': DO list: ' + JSON.stringify(benefitLabelsDO) );

//                     await logout(functionName + ': UI list: ' + JSON.stringify(await benefitListUI.getText()));

 

//                     // var e = 'ERROR: benefitLabelCount: DO(' + benefitLabelCountDO + ') != UI(' + benefitLabelCountUI + '). DO list: ' + JSON.stringify(benefitLabelsDO) + '. UI list: ' + JSON.stringify(benefitListUI.getText());

//                     await this.failResult(functionName, testName, testValue, e);

//                 }

//                 // And while here, do an order check

//                 //var benefitListUI = await benefitLabelElems; // got this defined up top

//                 var benefitListDO = benefitLabelsDO;

//                 var benefitLabelUI;

//                 for (var x = 0; x < benefitListDO.length; x++) {

               

//                     try{

//                         await logout('Checking if benefit List UI has a value: ' + await benefitListUI.get(x).getText());

//                         benefitLabelUI = await benefitListUI.get(x).getText();

//                     }catch(e){

//                         benefitLabelUI = 'No UI Label exists';

//                     }

//                     testName = 'Matching benefit '; // + benefitListDO[x];

//                     testValue = 'DO(' + benefitListDO[x] + ') == UI(' + benefitLabelUI + ')';

//                     await logout('Checking benefit DO(' + benefitListDO[x] + ') is the same as UI(' + benefitLabelUI + ')');

//                     if (await benefitListDO[x] == await benefitLabelUI) {

//                         await this.passResult(functionName, testName, testValue);

//                    } else {

//                         var e = 'ERROR: BenefitList Comparator: DO(' + benefitListDO[x] + ') != UI(' + benefitLabelUI + ')';

//                         await this.failResult(functionName, testName, testValue, e);

//                     }

//                 }

//                 await logout(functionName + ': Step label: ' + await this.whatIsMyStepLabel());

//                 await logout(functionName + ': H1 heading: ' + await this.whatIsMyH1Heading());

//                 // navigate to product page

//                 await this.navigateFromBenefitPageToProductSelection();

//             }

//             await logout('SFQPO: unitTest_benefitListChecker(): any more tests: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         return true;

//     }

//     // What is the navigation label showing for my current page. eg. Product Configuration

//     this.whatIsMyStepLabel = async function () {

//         // assumes the navigator is at the top of the page

//         //var functionName = appnID + 'whatIsMyStepLabel(): ';

//         //var testName = 'Check step label exists';

//         //var headerElem = $('.nds-page-header');

//         //var headerType = 'present';

//         //await this.postCheck(headerElem, headerType, functionName, testName);

//         var headingText = await $('.nds-progress__step-label').$('div').getText();

//         return await headingText;

//     }

//     // What is my h1 heading at top of page

//     this.whatIsMyH1Heading = async function () {

//         // assumes the navigator is at the top of the page

//         //var functionName = appnID + 'whatIsMyH1Heading(): ';

//         //var testName = 'Check header exists';

//         var headerElem = $('section[aria-hidden="false"]').$('h1[class="nds-step_label ng-binding"]');

//         //var headerType = 'present';

//         //await this.postCheck(headerElem, headerType, functionName, testName);

//         return await headerElem.getText();

//     }

//     // TODO

//      // What is my product name at top of page. assume on BO page

//      // USED for navigation purposes. ie. if mismatch between unit data selectedProduct and product label, then need to navigate to prod sel and choose correct one

//      this.whatIsMyProductName = async function () {

//         // assumes the navigator is at the top of the page

//         //var functionName = appnID + 'whatIsMyH1Heading(): ';

//         //var testName = 'Check header exists';

//         //var headerElem = $('section[aria-hidden="false"]').$('h1[class="nds-step_label ng-binding"]');

//         //var headerType = 'present';

//         //await this.postCheck(headerElem, headerType, functionName, testName);

//         return await headerElem.getText();

//     }

//     this.navigateFromBenefitPageToProductSelection = async function () {

//         var functionName = appnID + 'navigateFromBenefitPageToProductSelection(): ';

//         var testName = 'Navigate back to Product Selection page';

//         var testValue = '';

//         var preCheckElem = $('section[id="configureProducts"]').element(by.cssContainingText('h1', 'Select Product'));

//         var preCheckType = 'clickable';

//         try {

//             // head on back to the product selection page TODO: make this a generic function whereby you pass the value of hte page you wanna go to, and the BR nav bar is used

//             var navigationHeaderElem = $('ol[class="nds-progress__list"]');

//             await this.preCheck(navigationHeaderElem, 'present', functionName, testName);

//             var navigateToPage = navigationHeaderElem.$$('li').get(1);

//             // var navigateToPage = navigationHeaderElem.element(by.cssContainingText('div','Select Product')).element(by.xpath('../../..'));

//             await navigateToPage.click();

//             await this.postCheck(preCheckElem, preCheckType, functionName, testName); // same check as precheck, hence precheckelems

//             await this.passResult(functionName, testName, testValue);

//             await logout(functionName + 'Navigated to Product Page...');

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//         return true;

//     }

//     // used in V16 to get to starting point for optionChecker

//     this.navigateFromProductPageToBenefitList = async function (productLabel) {

//         var functionName = 'SFQPO:navigateFromProductPageToBenefitList(): ';

//         var testName = 'Is ' + productLabel + ' button available to click';

//         await logout(functionName + '...');

//         // is page loaded

//         var productPageLoaded = element(by.cssContainingText('h1', 'Select Product'));

//         var productPageType = 'present';

//         // is my product availabe on the page to click

//         productLabel = this.do.product.selectedProduct;

//         // the product name to click in the big square box

//         var productElem = element(by.cssContainingText('h2', productLabel));

//         var productCheckType = 'clickable';

//         // the big green tick showing product is selected

//         var productSelectedElem = productElem.element(by.xpath('../..')).$('div[class="vloc-ins-selectable-item-selected ng-scope active"]');

//         var productSelectedType = 'present';

//         // the next page is loaded

//         // benefitPageElem = element(by.cssContainingText('h2',productLabel));

//         // benefitPageType = 'clickable'

//         // plan showing list of benefits

//             // UI

//                 // Client details UI container and benefit label array of elems

//                 // get clientDetails

//                 var client = this.do.clients[this.do.clients.selectedClient];

//                 var clientDetails = client.personalDetails;

//                 var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

         

 

//        // needs a elem in front of it for client

//         var customisePlanLink = clientContainerElem.element(by.cssContainingText('a', 'Customize Plan Details'));

//         var customiseType = 'clickable';

//         var fullPlanLink = clientContainerElem.element(by.cssContainingText('a', 'Hide Plan Details'));

//         // plan list container not hidden

//         // var planListElem = $('.border-style-bottom[aria-hidden="false"]');

//         // var planListType = 'visible';

//         // benefit labels h3's

//         // var benefitLabelElems;

//         // var benefitLabelCountUI;

//         // var benefitLabelCountDO;

//         // lets do some stuff

//         // check on page ok

//         var checkName = 'Check on product page';

//         await this.postCheck(productPageLoaded, productPageType, functionName, checkName);

//         // is the product button showing?

//         checkName = 'Check product button showing';

//         await this.postCheck(productElem, productCheckType, functionName, checkName);

//         //await logout('await productSelectedElem.isPresent(): ' + await productSelectedElem.isPresent());

//         // if there is no tick, then click product

//         // check not already clicked

//         checkName = 'Check product already selected, or click';

//        //if(await productSelectedElem.isPresent() == false){

//         await productElem.click();

//         //}

//         checkName = 'Check product is selected';

//         try {

//             await this.postCheck(productSelectedElem, productSelectedType, functionName, checkName);

//         } catch (e) {

//             await productElem.click(); // just click again, if the tick is not showing

//         }

//         // click next

//         await this.buttonClickById('configureProducts_nextBtn', 'Product Configuration');

//         // check plan is showing with benefits, or click on Customize Plan Details

//         // look for the client details panel

//         checkName = 'Client Panel showing';

//         var clientName = clientDetails.firstName + ' ' + clientDetails.lastName;

//         await logout(functionName + ': client name: ' + clientName);

//         var clientPanelElem = element(by.cssContainingText('strong', clientName));

//         var clientPanelType = 'present';

//         await this.postCheck(clientPanelElem, clientPanelType, functionName, checkName);

//         await browser.sleep(500);

//         // open plan, or do nothing

//         checkName = 'Check plan is displaying benefits';

//         try {

//             await customisePlanLink.click();

//         } catch (e) {

//             await logout('do nothing, as full plan is already showing');

//             // await fullPlanLink.click();

//         }

//         await browser.sleep(500);

//         // turned off for speed

//         // check plan is opened and showing list

//         //checkName = 'Check plan list is displayed after clicking link';

//         //await this.postCheck(planListElem, planListType, functionName, checkName);    

 

//         // nothing to return, just a navigation sequence

//         return true;

//     }

 

//     this.navigateToPage = async function (stepLabel) {

//         var functionName = appnID + 'navigateToPage(): ';

//         var testName = 'Navigate to ' + stepLabel + ' page';

//         var testValue = stepLabel;

//         var preCheckElem = $('ol[class="nds-progress__list"]'); //navigationHeaderElem

//         var preCheckType = 'present';

//         var postCheckElem = preCheckElem.element(by.cssContainingText('div', stepLabel)).element(by.xpath('../../..')).$('button[aria-hidden="false"]');

//         var postCheckType = 'present';

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             //var navigateToPage = navigationHeaderElem.$$('li').get(1);

//             var navigateToPage = preCheckElem.element(by.cssContainingText('div', stepLabel)).element(by.xpath('../../..')).$('button');

//             await navigateToPage.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName); // same check as precheck, hence precheckelems

//             await this.passResult(functionName, testName, testValue);

//             await logout(functionName + 'Navigated to ' + stepLabel + ' Page...');

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//         return true;

//     }

 

//     // navigation function - regardless of where you are and want to go, you can do it

//     this.navigateTo = async function (stepLabel) {

//         // if there is not value to use, then dont do anything

//         if(stepLabel == 'null' || stepLabel == ''){

//             return false;

//         }

//         var functionName = appnID + 'navigateForwardsToPage(): ';

//         var currentPage = await this.whatIsMyStepLabel();

//         var testName = 'Navigate to ' + stepLabel + ' page from ' + currentPage;

//         var testValue = stepLabel;

//         var preCheckElem = $('ol[class="nds-progress__list"]'); //navigationHeaderElem

//         var preCheckType = 'present';

//         var postCheckElem = preCheckElem.element(by.cssContainingText('div', stepLabel)).element(by.xpath('../../..')).$('button[aria-hidden="false"]');

//         var postCheckType = 'present';

//         var pageOrderArray = ['Client Details','Select Product','Product Configuration'];

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             //var navigateToPage = navigationHeaderElem.$$('li').get(1);

//             // new order logic

//             if(pageOrderArray.indexOf(stepLabel) < pageOrderArray.indexOf(currentPage)){

//                 await this.navigateToPage(stepLabel);

//             }

//             if(pageOrderArray.indexOf(stepLabel) > pageOrderArray.indexOf(currentPage)){

//                 await this.navigateForwardsToPage(stepLabel);

//             }

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//         return true;

//     }

//     // new function

//     // navigate forward to a page

//     // currently supports client details to product and to BO, and product to BO. Just put in a value, and the selectedValues will help get you there eg. selectedProduct

//     this.navigateForwardsToPage = async function (stepLabel) {

//         var functionName = appnID + 'navigateForwardsToPage(): ';

//         var currentPage = await this.whatIsMyStepLabel();

//         var testName = 'Navigate to ' + stepLabel + ' page from ' + currentPage;

//         var testValue = stepLabel;

//         var preCheckElem = $('ol[class="nds-progress__list"]'); //navigationHeaderElem

//         var preCheckType = 'present';

//         var postCheckElem = preCheckElem.element(by.cssContainingText('div', stepLabel)).element(by.xpath('../../..')).$('button[aria-hidden="false"]');

//         var postCheckType = 'present';

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             //var navigateToPage = navigationHeaderElem.$$('li').get(1);

//             if(currentPage == 'Client Details'){

//                 if(stepLabel == 'Select Product'){

//                     // click next

//                     await this.buttonClick('Next', stepLabel);

                  

//                 }

//                 if(stepLabel == 'Product Configuration'){

//                     // click next

//                     await this.buttonClick('Next', 'Select Product');

//                     // do sf_selectProduct

//                     await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

//                     // await this.sf_selectProduct();

//                     // click next

//                     // await this.buttonClick('Next', stepLabel);

//                 }

//             }

//             if(currentPage == 'Select Product'){

//                 if(stepLabel == 'Product Configuration'){

//                     // do sf_selectProduct

//                     await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

//                 }

//             }

//             // var navigateToPage = preCheckElem.element(by.cssContainingText('div', stepLabel)).element(by.xpath('../../..')).$('button');

//             // await navigateToPage.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName); // same check as precheck, hence precheckelems

//             await this.passResult(functionName, testName, testValue);

//             await logout(functionName + 'Navigated forward to ' + stepLabel + ' Page...');

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//         return true;

//     }

//     // Checks count of Benefits per product, Product name passed from XL

//     // aka optionChecker =

//     this.unitTest_optionListChecker = async function (unitTestName) {

//         await logout('SFQPO: unitTest_optionListChecker(): ... ');

//         // STARTING POINT: IS THE PRODUCT SELECTION PAGE

//         var functionName = appnID + 'unitTest_optionListChecker()';

//         var testName = 'Check options are present, ordered correctly, not extras, values correct';

//         var productLabel;

//         // ensure on correct page to start

//         var preCheckElem = $('section[id="configureProducts"]').element(by.cssContainingText('h1', 'Select Product'));

//         var preCheckType = 'clickable';

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             await this.navigateFromBenefitPageToProductSelection();

//         }

//         do {

      

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

       

//             functionName = functionName + ': ' + this.do.product.selectedBenefit + ': ';

//             //await logout(functionName + ': &&&& product label: ' + this.do.product.selectedProduct);

//             //await logout(functionName + ': &&&& benefit label: ' + this.do.product.selectedBenefit);

//             // first thing to do is get the page you are on

//             var currentPage = await this.whatIsMyH1Heading();

//            // await logout(functionName + ': current page: ' + await currentPage);

//             // if you are already on prod config, then see if the next prod label is the same

//             if (await currentPage == 'Product Configuration') {

//                 // now check product name is the same as the one in the DO

//                 try {

//                     var currentProductLabel = await $('h2[class="nds-card__header-title"]').getText();

//                     await logout(functionName + ': current product label: ' + await currentProductLabel);

//                 } catch (e) {

//                     await logout('current page product label gettext error: ' + e);

//                 }

//                 if (currentProductLabel != this.do.product.selectedProduct) {

//                    // await logout(functionName + ': Product Label does not match new unit test label, so going back to select correct product');

//                     await this.navigateFromBenefitPageToProductSelection();

//                     await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

//                 }

//             }

//             // update currentPage

//             currentPage = await this.whatIsMyH1Heading();

//             if (currentPage == 'Select Product') {

//                 // click on correct product value

//                 await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

//             }

//             // go to benefit list page, and show full plan, ready for checkbox click

//             //await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct); // selected product has just been put into DO

//             if (this.do.meta.targetGroup.doTest == true) {

//                 // iterate through benefit labels; get benefits, check benefits

//                 // should now be on the benefit list page for client, for product given

//                 // selection benefit checkbox to display all options

//                 // get the benefit label from the DO, this has been gathered from the XL

           

//                 // UI

//                 // Client details UI container and benefit label array of elems

//                 // get clientDetails

//                 var client = this.do.clients[this.do.clients.selectedClient];

//                 var clientDetails = client.personalDetails;

//                 var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

           

//                 var benefitLabel = this.do.product.selectedBenefit;

//                 await logout(functionName + ': benefitLabel: ' + benefitLabel);

//                 // got the label, so now go and find it, and click on the checkbox to display the options, assume they are not showing

//                 // needs to be replaced with the unique benefit label elem

//                 // var benefitLabelElem = clientContainerElem.element(by.cssContainingText('h3', benefitLabel));

//                 var benefitLabelElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitLabel);

//                 await logout(functionName + ': benefitLabelElem text: ' + await benefitLabelElem.getText());

//                 // var benefitLabelElem = await $('.border-style-bottom[aria-hidden="false"]').element(by.cssContainingText('h3', benefitLabel));

//                 //var benefitCheckboxElem = benefitLabelElem.element(by.xpath('../../..')).$('label[role="button"]');

//                 // wait for SHOW to be clickable

//                 checkName = 'Wait for Benefit to be usable';

//                 var benefitUsableElem = benefitLabelElem.element(by.xpath('../..')).element(by.cssContainingText('span', 'Show'));

//                 var benefitUsableType = 'clickable';

//                 await this.preCheck(benefitUsableElem, benefitUsableType, functionName, checkName);

//                 // dont click checkbox, instead click on show

//                 // check show is available

//                 // await benefitLabelElem.element(by.xpath('../..')).element(by.cssContainingText('span', 'Show')).click();

//                 await benefitUsableElem.click();

//                 await browser.sleep(200);

//                 //var optionLabelElems = await benefitLabelElem.element(by.xpath('../../../../..')).$('.vloc-ins-coverages-coverage-row-attributes-outer-container').$$('label');

            

                

//                 // var optionLabelElemsCount = await optionLabelElems.count();

//                 // await logout(functionName + ': optionLabelElems.count(): ' + await optionLabelElems.count());

//                 // await logout(functionName + ': optionLabelElemsCount: ... ');

//                 // await logout(functionName + ': optionLabelElemsCount: ' + await optionLabelElemsCount);

//                 // update this to use the unique value for ble

//                 var longOptionList = benefitLabelElem.element(by.xpath('../../../../..')).$('.vloc-ins-coverages-coverage-row-attributes-outer-container').$$('label');

//                 // var longOptionList = clientContainerElem.element(by.cssContainingText('h3', benefitLabel)).element(by.xpath('../../../../..')).$('.vloc-ins-coverages-coverage-row-attributes-outer-container').$$('label');

//                 //await logout(functionName + ': longOptionList.count(): ' + await longOptionList.count());

//                 // await logout(functionName + ': optionLabelElems: ' + await JSON.stringify(optionLabelElems));

//                 var optionLabelElemsCount = await longOptionList.count();

//                 await logout(functionName + ': optionLabelElemsCount: ' + optionLabelElemsCount);

//                 // get benefit DO name

//                 await this.sf_getBenefitDOName(benefitLabel);

//                 var benefitDOName = this.do.product.selectedBenefitDOName;

//                 await logout(functionName + ': benefitDOName: ' + benefitDOName);

//                // await logout(functionName + ': this.do.product.selectedProductDOName: ' + this.do.product.selectedProductDOName);

//                 // get productDO name from product label

// // replace the following two lines, with a dynamic lookup

//                     // await logout('this.do.product.productList: ' + this.do.product.productList);

//                     var productList = this.do.product.productList;

//                     var productIndex = await productList.indexOf(this.do.product.selectedProduct);

//                     await logout('productIndex: ' + productIndex);

//                     // var productNameLabelIndex = await this.do.product.productList.indexOf(productLabel);

//                     // await logout('productNameLabelIndex: ' + productNameLabelIndex);

//                     var selectedProductDOName = this.do.product.productListDO[productIndex];

//                     await logout('selectedProductDOName: ' + selectedProductDOName);

//                     this.do.product.selectedProductDOName = selectedProductDOName;

   

//                 var productDO = this.do.products.definitions[this.do.product.selectedProductDOName];

//                 var benefitDO = productDO[benefitDOName];

//                 // get DO options list, so we can do a comparison with UI elems.getText()

//                 //var benefitDO = this.do[benefitDOName];

//                 await logout(functionName + ': benefitDO: ' + JSON.stringify(benefitDO));

//                 // get dynamic option list

//                 var optionsDOList = benefitDO.mappedOptionList.map(function (item) {

//                     return item.label;

//                 });

//                 //var optionsDOList = benefitDO.optionList;

//                 //await logout(functionName + ': optionsDOList: ' + JSON.stringify(optionsDOList));

//                 var optionsDOListCount = optionsDOList.length;

//                 // Made it to the actual test!!!!

//                 // Compare the numbers of options first

//                 // finally a test! do the counts match?

//                 await logout(functionName + ': ' + testName + ': Option counts should match; DO(' + optionsDOListCount + ') vs UI(' + optionLabelElemsCount + ')');

//                 testName = 'Option list number on UI should match DO';

//                 testValue = 'DO(' + optionsDOListCount + ') vs UI(' + await optionLabelElemsCount + ')';

//                 if ( optionsDOListCount == await optionLabelElemsCount) {

//                     await this.passResult(functionName, testName, testValue);

//                 } else {

//                     var e = 'ERROR: OptionLabelCount: DO(' + optionsDOListCount + ') != UI(' + optionLabelElemsCount + ')';

//                     await this.failResult(functionName, testName, testValue, e);

//                 }

//                 // And while here, do an order check

//                 var optionListUI = longOptionList;

//                 // var optionListUI = optionLabelElems;

//                 var optionListDO = optionsDOList;

//                 for (var x = 0; x < await optionListDO.length; x++) {

//                     //await logout(functionName + ': optionListDO: ' + await JSON.stringify(optionListDO));

//                     //await logout(functionName + ': optionLabelElems.length: ' + await optionLabelElems.length);

//                     //await logout(functionName + ': optionListUI[x]: ' + await JSON.stringify(optionListUI[x]));

//                     // await logout(functionName + ': optionLabelElems[x]: ' + await JSON.stringify(optionLabelElems[x]));

//                     await browser.sleep(200);

//                     //await logout(functionName + ': optionListUI[x].getText() ' + await optionListUI.get(x).getText());

               

//                     // sometimes, there are fewer labels than expected, so handle that.

//                     var optionLabelUI;

//                     try{

//                         optionLabelUI = await optionListUI.get(x).getText();

//                     }catch(e){

//                         optionLabelUI = 'ERROR-cannot locate label';

//                     }

                   

                    

 

//                     testName = optionListDO[x] + '-Matching option'; // + benefitListDO[x];

//                     testValue = 'DO(' + optionListDO[x] + ') == UI(' + await optionLabelUI + ')';

//                     await logout(functionName + ': Checking option DO(' + optionListDO[x] + ') is the same as UI(' + await optionLabelUI + ')');

//                     if ( optionListDO[x] == await optionLabelUI) {

//                         await this.passResult(functionName, testName, testValue);

//                     } else {

//                         await logout(functionName + ': Checking option DO(' + optionListDO[x] + ') is the same as UI(' + await optionLabelUI + ')');

//                         var e = 'ERROR: Option List Comparator: DO(' + optionListDO[x] + ') != UI(' + await optionLabelUI + ')';

//                         await this.failResult(functionName, testName, testValue, e);

//                     }

//                 }

//                 await benefitLabelElem.element(by.xpath('../..')).element(by.cssContainingText('span', 'Hide')).click();

//                 await browser.sleep(200);

//             }

//             await logout(functionName + ': any more tests: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         return true;

//     }

//    // todo:delete below function as it is replaced with sf_showHideBenefit

//     this.sf_clickShowHideButton = async function (uniqueBenefitElem) {

//         var actElem = uniqueBenefitElem.element(by.xpath('../../../../..')).$('div[role="button"]');

//         try {

//             var currentButtonState = await actElem.getText();

//             if (currentButtonState == 'Show') {

//                 await logout('SFQPO: sf_checkBenefitOptionValuesPresent() : Clicking Show button...');

//                await actElem.click();

//                 await logout('SFQPO:sf_checkBenefitOptionValuesPresent(): Showing all the Options');

//             } else {

//                 await logout('SFQPO: sf_checkBenefitOptionValuesPresent(): Benefit is already expanded');

//             }

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.navigateToOptionListFromProductPage = async function (productLabel, benefitLabel) {

//         await logout('SFQPO: navigateToOptionListFromProductPage(): ... ');

//         // STARTING POINT: IS THE PRODUCT SELECTION PAGE

//         var functionName = appnID + 'navigateToOptionListFromProductPage()';

//         var testName = 'Check benefits are present, ordered correctly, not extras';

//         var productLabel;

//         var postCheckElem;

//         var postCheckType;

//         var productElem;

//         var productCheckType;

//         var domClientNo = this.do.clientDetails.domClientNo;

//         var labelElem = element.all(by.cssContainingText('label', fieldLabel)).get(domClientNo);

//         var preCheckElem = labelElem.element(by.xpath('..')).$('input[type="text"]');

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem;

//         var postCheckType = 'visible'; //visible, clickable

//         // ensure on correct page to start

//         var preCheckElem = $('section[id="configureProducts"]').element(by.cssContainingText('h1', 'Select Product'));

//         var preCheckType = 'clickable';

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         } catch (e) {

//             //

//             // failresult

//             await this.failResult(functionName, testName, testValue, e);

//             await this.navigateFromBenefitPageToProductSelection();

//             //return true; // should get to correct page to continue...

//         }

//     }

//     //sf_checkAllBenefitsPresent now split as sf_checkAllBenefitsPresent and sf_checkAllOptionsPresent

//     // this.sf_checkAllBenefitsPresent = async function () {

//     //     // *** Assumption: this.do.product.selectedProduct and this.do.product.selectedProductDOName are present in the DO

//     //     var functionName = appnID + 'sf_checkAllBenefitsPresent()';

//     //     var testName = 'Check All Benefits are Present in the correct order';

//     //     var doProduct = this.do[this.do.product.selectedProductDOName];

//     //     var testValue = doProduct.benefitList;

//     //     var product = this.do.product.selectedProduct;

//     //     var preCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));

//     //     var preCheckType = 'visible';

//     //     //var actElem = element(by.cssContainingText('a', 'Customize Plan Details'));

//     //     var postCheckElem = element(by.cssContainingText('h3', 'Premium Cover'));

//     //     var postCheckType = 'present'; //visible, clickable

//     //     var desiredState = 'Not done';

 

//     //     try {

//     //         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//     //         // await browser.sleep('1000');

//     //         // await logout('SFQPO:sf_checkAllBenefitsPresent(): Clicking Customize Plan Details');

//     //         // await actElem.click();

//     //         await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//     //         await logout('SFQPO:sf_checkAllBenefitsPresent(): Checking all Default Benefits for ' + product + ' are available...');

//     //         var benefitList = await element(by.cssContainingText('h3', 'Premium Cover')).element(by.xpath('../../../../../../../..')).$$('h3');

//     //         var noOfBenefits = benefitList.length;

//     //         var actualBenefitList = [];

//     //         await logout('SFQPO:sf_checkAllBenefitsPresent(): Product: ' + product + ' Total Number of Benefits displayed is ' + noOfBenefits);

//     //         //Storing all Displayed Benefits in to an Array 'actualBenefitList'

//     //         for (var i = 0; i < noOfBenefits; i++) {

//     //            var benefitValue = await element(by.cssContainingText('h3', 'Premium Cover')).element(by.xpath('../../../../../../../..')).$$('h3').get(i).getText();

//     //             await logout('Benefit is ' + benefitValue);

//     //             await actualBenefitList.push(await benefitValue);

//     //         }

//     //         await logout('SFQPO:sf_checkAllBenefitsPresent(): Product: ' + product + ' Actual Benefit List :actualBenefitList ' + await JSON.stringify(actualBenefitList));

//     //         //Check the total number of benefits

//     //         if (testValue.length == noOfBenefits) {

//     //             await logout('SFQPO:sf_checkAllBenefitsPresent(): Product: ' + product + ' Displaying the expected total number of benefits');

//     //             await this.passResult(functionName, 'Check the total number of benefits', testValue);

//     //             desiredState = 'Benefit count is correct';

//     //         } else {

//     //             await logout('SFQPO:sf_checkAllBenefitsPresent(): Product: ' + product + ' Not displaying the expected total number of benefits');

//     //            await this.failResult(functionName, 'Check the total number of benefits', testValue, 'Product: ' + product + 'Not displaying correct total number of benefits');

//     //             desiredState = 'ERROR:Not all benefits are present. Counts are not the same';

//     //         }

//     //         // Loop to check order of Benefits

//     //         for (i = 0; i < testValue.length; i++) {

//     //             if (testValue[i] == actualBenefitList[i]) {

//     //                 //await browser.wait(protractor.ExpectedConditions.presenceOf(element(by.cssContainingText('h3', testValue[i]))), 2000);

//     //                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' is placed in the correct order');

//     //                 await this.passResult(functionName, testName, testValue[i]);

//     //                 desiredState = desiredState + ', and all benefits accounted for and present';

//     //             } else {

//     //                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + 'is not placed in the correct order');

//     //                 await this.failResult(functionName, testName, testValue[i], 'Benefit ' + testValue[i] + ' is not placed in the correct order');

//     //                 desiredState = desiredState + ', and ERROR: not all benefits are showing or correct';

//     //             }

//     //         }

 

//     //         //**Can be added as a seperate function to checkAllOrderPresent()//Adding the displayed optionList into an Array (per Benefit) and then compare it with the mappedOptionList from DO

//     //         for (i = 0; i < testValue.length; i++) {

//     //             if (testValue[i] == actualBenefitList[i]) {

//     //                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' Checking Display order for all Options...')

//     //                 //Getting the Expected mappedOptionList from DO

//     //                 await this.sf_getBenefitDOName(testValue[i]);

//     //                var doBenefit = doProduct[doProduct.selectedBenefitDOName];

//     //                 var expectedOptionList = doBenefit.mappedOptionList;

//     //                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Expected Option List is' + await JSON.stringify(expectedOptionList));

//     //                 //Getting the count of the displayed Options

//     //                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Getting the count of the displayed Options...');

//     //                 var benefitLevel = element(by.cssContainingText('h3', actualBenefitList[i])).element(by.xpath('../../../../..'));

//     //                 // var optionList = benefitLevel.element(by.cssContainingText('label', 'Loading')).element(by.xpath('../../../../../..')).$$('label');

//     //                 var optionList = benefitLevel.$$('div').get(8).$$('label');

//     //                 var noOfOptions = await optionList.count();

//     //                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' No of options displayed is ' + noOfOptions);

//     //                 //Getting Unique Label for Benefit

//     //                 var checkUniqueBenefitLabel = element.all(by.cssContainingText('h3', actualBenefitList[i]));

//     //                 var uniqueBenefitElem;

//     //                 try {

//     //                     await logout('checkUniqueBenefitLabel count: ' + await checkUniqueBenefitLabel.count());

//     //                     for (var x = 0; x < await checkUniqueBenefitLabel.count(); x++) {

//     //                         // get text

//     //                         var benefitText = await checkUniqueBenefitLabel.get(x).getText();

//     //                         // check equal to benefitName

//     //                         if (benefitText == actualBenefitList[i]) {

//     //                             uniqueBenefitElem = element.all(by.cssContainingText('h3', actualBenefitList[i])).get(x);

//     //                             break;

//     //                         }

//     //                     }

//     //                 } catch (e) {

//     //                     uniqueBenefitElem = element(by.cssContainingText('h3', actualBenefitList[i]));

//     //                 }

//     //     //             //Click Show Button

//     //     //             var showHideButton = uniqueBenefitElem.element(by.xpath('../../../../..')).$('div[role="button"]');

//     //     //             await showHideButton.click();

//     //     //             //Storing all displayed options per benefit into an Array 'actualOptionList'

//     //     //             var actualOptionList = [];

//     //     //             for (var x = 0; x < noOfOptions; x++) {

//     //     //                 var optionName = await uniqueBenefitElem.element(by.xpath('../../../../..')).$$('div').get(8).$$('label').get(x).getText();

//     //     //                //            await logout('$$$$$$$ Option name is optionName:' +optionName);

//     //     //                 await actualOptionList.push(await optionName);

//     //     //             }

//     //     //             await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' Displayed Option List is' + await JSON.stringify(actualOptionList));

//     //     //             //Check the total number of options

//     //     //             if (expectedOptionList.length == actualOptionList.length) {

//     //     //                 await logout('SFQPO:sf_checkAllBenefitsPresent() Benefit: ' + testValue[i] + ' Displaying the expected total number of options');

//     //     //                 await this.passResult(functionName, 'Check the total number of options', testValue[i]);

//     //     //             } else {

//     //     //                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' Not displaying the expected total number of options');

//     //     //                 await this.failResult(functionName, 'Check the total number of options', testValue[i], 'Benefit: ' + testValue[i] + ' Not displaying the expected total number of options');

//     //     //             }

//     //     //             //Check the order of the Options

//     //     //             for (var j = 0; j < expectedOptionList.length; j++) {

//     //     //                 if (expectedOptionList[j].label == actualOptionList[j]) {

//     //     //                     await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + actualBenefitList[i] + ' Option: ' + expectedOptionList[j].label + ' is placed in the correct order');

//     //     //                     await this.passResult(functionName, 'Check order of the options', expectedOptionList[j].label);

//     //     //                 } else {

//     //     //                     await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + actualBenefitList[i] + ' Option: ' + expectedOptionList[j].label + ' is not placed in the correct order');

//     //     //                     await this.failResult(functionName, 'Check order of the options', expectedOptionList[j].label, 'Benefit: ' + actualBenefitList[i] + ' Option: ' + expectedOptionList[j].label + ' is not placed in the correct order');

//     //     //                 }

//     //     //             }

//     //             }

//     //         }

//     //     //     //Old code can be deleted if above function is working

//     //     //     // for (i = 0; i < testValue.length; i++) {

//     //     //     //            try {

//     //     //     //                            await browser.wait(protractor.ExpectedConditions.presenceOf(element(by.cssContainingText('h3', testValue[i]))), 2000);

//     //     //     //                            await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' is present');

//     //     //     //            } catch (e) {

//     //     //     //                            await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' is not present');

//     //     //     //            }

//     //     //     // }

//     //     //     return true;

//     //     } catch (e) {

//     //         await this.failResult(functionName, testName, testValue, e);

//     //         return false;

//     //     }

//     // }

 

//     this.getMappedBenefitListDO = async function () {

//         var functionName = appnID + 'getMappedBenefitListDO()';

//         var productList = this.do.product.productList;

//         var productIndex = await productList.indexOf(this.do.product.selectedProduct);

//         await logout(functionName + ': productIndex: ' + productIndex);

 

//         var selectedProductDOName = this.do.product.productListDO[productIndex];

//         // await logout('SFQPO:getMappedBenefitList(): selectedProductDOName: ' + selectedProductDOName);

//         this.do.product.selectedProductDOName = selectedProductDOName;

 

//         //   await logout('SFQPO:getMappedBenefitList(): this.do.product.selectedProductDOName: ' + this.do.product.selectedProductDOName);

//         try {

//             var doProduct = this.do.products.definitions[this.do.product.selectedProductDOName];

//             //*await logout('doProduct: ' + await JSON.stringify(doProduct));

//             // take benefitNames into an Array

//             var benefitListArray = doProduct.mappedBenefitList.map(function (item) {

//                 return item.label;

//             });

//             return benefitListArray;

//         } catch (e) {

//             await logout('SFQPO:getMappedBenefitList(): ERROR: ' + e);

//         }

//         return true;

//     }

 

//     this.getBenefitListArray = async function () {

//         var clientNumber = await this.getClientNumber();

//         var client = this.do.clients[clientNumber];

//         var clientDetails = client.personalDetails;

//         try {

//             var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

 

//             var benefitList = clientContainerElem.$$('h3');

 

//             var noOfBenefits = await benefitList.count();

//             var actualBenefitList = [];

//             await logout('SFQPO:getBenefitListArray(): Product: ' + this.do.product.selectedProduct + ' Total Number of Benefits displayed is ' + noOfBenefits);

//             //Storing all Displayed Benefits in to an Array 'actualBenefitList'

//             for (var i = 0; i < noOfBenefits; i++) {

 

//                 var benefitValue = await benefitList.get(i).getText();

//                 await logout('SFQPO:getBenefitListArray(): Benefit is ' + benefitValue);

//                 await actualBenefitList.push(await benefitValue);

//             }

//             await logout('SFQPO:getBenefitListArray(): Product: ' + this.do.product.selectedProduct + ' Actual Benefit List :actualBenefitList ' + await JSON.stringify(actualBenefitList));

 

//             return actualBenefitList;

//         } catch (e) {

//             await logout('SFQPO:getBenefitListArray(): ERROR: ' + e);

//         }

//     }

 

//     this.sf_checkAllBenefitsPresent = async function () {

//         // *** Assumption: this.do.product.selectedProduct and this.do.product.selectedProductDOName are present in the DO

//         var functionName = 'SFQPO:sf_checkAllBenefitsPresent()';

//         var testName = 'Check All Benefits are Present in the correct order';

//         var testValue = await this.getMappedBenefitListDO();

       

//         var product = this.do.product.selectedProduct;

//         var preCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));

//         var preCheckType = 'visible';

 

//         // var postCheckElem = element(by.cssContainingText('h3', 'Premium Cover'));

//         // var postCheckType = 'present'; //visible, clickable

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//                                                 //await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await logout('SFQPO:sf_checkAllBenefitsPresent(): Checking all Default Benefits for ' + product + ' are available...');

                               

//                                                 var actualBenefitList = [];

//                                                 actualBenefitList = await this.getBenefitListArray();

                                               

//          //   await logout('SFQPO:sf_checkAllBenefitsPresent(): Product: ' + product + ' Actual Benefit List :actualBenefitList ' + await JSON.stringify(actualBenefitList));

//             //Check the total number of benefits

//             if (testValue.length == await actualBenefitList.length) {

//                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Product: ' + product + ' Displaying the expected total number of benefits');

//                 await this.passResult(functionName, 'Check the total number of benefits', testValue.length);

//             } else {

//                 await logout('SFQPO:sf_checkAllBenefitsPresent(): Product: ' + product + ' Not displaying the expected total number of benefits');

//                await this.failResult(functionName, 'Check the total number of benefits', testValue.length, 'Product: ' + product + 'Not displaying correct total number of benefits');

//             }

//             // Loop to check order of Benefits

//             for (i = 0; i < testValue.length; i++) {

//                 if (testValue[i] == actualBenefitList[i]) {

//                     //await browser.wait(protractor.ExpectedConditions.presenceOf(element(by.cssContainingText('h3', testValue[i]))), 2000);

//                     await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + ' is placed in the correct order');

//                     await this.passResult(functionName, testName, testValue[i]);

//                 } else {

//                     await logout('SFQPO:sf_checkAllBenefitsPresent(): Benefit: ' + testValue[i] + 'is not placed in the correct order');

//                     await this.failResult(functionName, testName, testValue[i], 'Benefit ' + testValue[i] + ' is not placed in the correct order');

//                 }

//             }

//                                                 } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

   

 

//     this.sf_checkAllOptionsPresent = async function () {

 

//         var functionName = appnID + 'sf_checkAllOptionsPresent()';

//         var testName = 'Check All Options are Present in the correct order';

//         var testValue = await this.getMappedBenefitListDO();

//         var actualBenefitList = await this.getBenefitListArray();

 

//         try {

 

//             //**Adding the displayed optionList into an Array (per Benefit) and then compare it with the mappedOptionList from DO

//             for (i = 0; i < testValue.length; i++) {

//                 if (testValue[i] == actualBenefitList[i]) {

//                     await logout('SFQPO:sf_checkAllOptionsPresent(): Benefit: ' + testValue[i] + ' Checking Display order for all Options...')

//                     //Getting the Expected mappedOptionList from DO

//                     await this.sf_getBenefitDOName(testValue[i]);

//                     var doProduct = this.do.products.definitions[this.do.product.selectedProductDOName]

//                     var doBenefit = doProduct[this.do.product.selectedBenefitDOName];

//                     var expectedOptionList = doBenefit.mappedOptionList;

 

//                     await logout('SFQPO:sf_checkAllOptionsPresent(): Expected Option List is' + await JSON.stringify(expectedOptionList));

 

//                     //Getting the count of the displayed Options

//                     await logout('SFQPO:sf_checkAllOptionsPresent(): Getting the count of the displayed Options...');

//                     //Getting the uniqueBenefitElem to be tested

//                     var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(actualBenefitList[i]);

//                     //Click Show Button

//                     await this.sf_showHideBenefit(actualBenefitList[i], 'Show');

//                     //Counting the number of options displayed

//                     var benefitLevel = uniqueBenefitElem.element(by.xpath('../../../../..'));

//                     var noOfOptions = await benefitLevel.$('.vloc-ins-coverages-coverage-row-attributes-outer-container').$$('label').count();

//                     await logout('SFQPO:sf_checkAllOptionsPresent(): Benefit: ' + testValue[i] + ' No of options displayed is ' + noOfOptions);

 

//                     //Storing all displayed options per benefit into an Array 'actualOptionList'

//                     var actualOptionList = [];

//                     for (var x = 0; x < noOfOptions; x++) {

//                         var optionName = await benefitLevel.$('.vloc-ins-coverages-coverage-row-attributes-outer-container').$$('label').get(x).getText();

//                         await actualOptionList.push(await optionName);

//                     }

//                     await logout('SFQPO:sf_checkAllOptionsPresent(): Benefit: ' + testValue[i] + ' Displayed Option List is' + await JSON.stringify(actualOptionList));

//                     //Check the total number of options

//                     if (expectedOptionList.length == actualOptionList.length) {

//                         await logout('SFQPO:sf_checkAllOptionsPresent() Benefit: ' + testValue[i] + ' Displaying the expected total number of options');

//                         await this.passResult(functionName, 'Check the total number of options', testValue[i]);

//                     } else {

//                         await logout('SFQPO:sf_checkAllOptionsPresent(): Benefit: ' + testValue[i] + ' Not displaying the expected total number of options');

//                         await this.failResult(functionName, 'Check the total number of options', testValue[i], 'Benefit: ' + testValue[i] + ' Not displaying the expected total number of options');

//                     }

//                     //Check the order of the Options

//                     for (var j = 0; j < expectedOptionList.length; j++) {

//                         if (expectedOptionList[j].label == actualOptionList[j]) {

//                             await logout('SFQPO:sf_checkAllOptionsPresent(): Benefit: ' + actualBenefitList[i] + ' Option: ' + expectedOptionList[j].label + ' is placed in the correct order');

//                             await this.passResult(functionName, 'Check order of the options', expectedOptionList[j].label);

//                         } else {

//                             await logout('SFQPO:sf_checkAllOptionsPresent(): Benefit: ' + actualBenefitList[i] + ' Option: ' + expectedOptionList[j].label + ' is not placed in the correct order');

//                             await this.failResult(functionName, 'Check order of the options', expectedOptionList[j].label, 'Benefit: ' + actualBenefitList[i] + ' Option: ' + expectedOptionList[j].label + ' is not placed in the correct order');

//                         }

//                     }

//                 }

//             }

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

   

//     this.getProductDOName = async function (productLabel) {

//         var functionName = appnID + 'getProductDOName()';

//         var testName = 'Get DO product name by looking up product label';

//         var testValue = productLabel;

//         var productDOName;

//         //productDOName

//         return productDOName;

//     }

//     //return benefit do name

//     this.getBenefit = async function (benefitLabel) {

//         // var functionName = appnID + 'sf_getBenefitDOName()';

//         // var testName = 'Check Benefit is Present and showing expected Options and Values';

//         // var testValue = benefitLabel;

   

//         var doProduct = this.do[this.do.product.selectedProduct];

//         //*await logout('doProduct: ' + await JSON.stringify(doProduct));

//         // take benefitNames into an Array

//         var benefitListArray = doProduct.mappedBenefitList.map(function (item) {

//             //                                            logout('label: ' + JSON.stringify(item.label));

//             return item.label;

//         });

//        await logout('benefitListArray: ' + await JSON.stringify(benefitListArray));

//         // get index of mappedBenefitList for label

//         var indexOfBenefit = benefitListArray.indexOf(benefitLabel);

//         // get doName for that benefit

//         var doBenefit = doProduct.mappedBenefitList[indexOfBenefit];

//         var doName = doBenefit.doName;

//         await logout('SFQPO:sf_getBenefitDOName(): Benefit doName is ' + doName);

//         // storing at 2 levels until it becomes clear which one has the best value, ease of use

//         doProduct.selectedBenefitDOName = doName;

//         this.do.product.selectedBenefitDOName = doName;

   

//     }

//     //return benefit do name to DO.selectedBenefitDOName and

//     this.sf_getBenefitDOName = async function (benefitLabel) {

//         var functionName = appnID + 'sf_getBenefitDOName()';

//         var testName = 'Check Benefit is Present and showing expected Options and Values';

//         var testValue = benefitLabel;

//         var productList = this.do.product.productList;

//         var productIndex = await productList.indexOf(this.do.product.selectedProduct);

//         await logout(functionName + ': productIndex: ' + productIndex);

//         // var productNameLabelIndex = await this.do.product.productList.indexOf(productLabel);

//         // await logout('productNameLabelIndex: ' + productNameLabelIndex);

//         var selectedProductDOName = this.do.product.productListDO[productIndex];

//         await logout(functionName + ': selectedProductDOName: ' + selectedProductDOName);

//         this.do.product.selectedProductDOName = selectedProductDOName;

//         await logout(functionName + ': this.do.product.selectedProductDOName: ' + this.do.product.selectedProductDOName);

//         try {

//             var doProduct = this.do.products.definitions[this.do.product.selectedProductDOName];

//             //*await logout('doProduct: ' + await JSON.stringify(doProduct));

//             // take benefitNames into an Array

//             var benefitListArray = doProduct.mappedBenefitList.map(function (item) {

//                 return item.label;

//             });

//             await logout('benefitListArray: ' + await JSON.stringify(benefitListArray));

//             // get index of mappedBenefitList for label

//             var indexOfBenefit = benefitListArray.indexOf(benefitLabel);

//             // get doName for that benefit

//             var doBenefit = doProduct.mappedBenefitList[indexOfBenefit];

//             var doName = doBenefit.doName;

//             await logout('SFQPO:sf_getBenefitDOName(): Benefit doName is ' + doName);

//             // storing at 2 levels until it becomes clear which one has the best value, ease of use

//             // doProduct.selectedBenefitDOName = doName;

//             this.do.product.selectedBenefitDOName = doName;

//         } catch (e) {

//             await logout('SFQPO:sf_getBenefitDOName(): ERROR: ' + e);

//         }

//         return true;

//     }

 

//     this.sf_getOptionDOName = async function (optionLabel) {

//         // *** Assumption: that the value for product.selectedProductDOName is correct for getting the option name

//         var functionName = appnID + 'sf_getOptionDOName()';

//         var testName = 'Getting OptionName to use later for checking the option value';

//         var testValue = optionLabel;

//         await logout(functionName + ': ... ');

 

//         try {

//          // var doProduct = this.do[this.do.product.selectedProductDOName];

//          // var doBenefit = doProduct[doProduct.selectedBenefitDOName];

//          await logout(functionName + ': this.do.product.selectedProductDOName: ' + this.do.product.selectedProductDOName);

//             var doProduct = this.do.products.definitions[this.do.product.selectedProductDOName];

//           //await logout('SFQPO:sf_getOptionDOName:doProduct: ' + await JSON.stringify(doProduct));

        

//             var doBenefit = doProduct[this.do.product.selectedBenefitDOName];

//            await logout('SFQPO:sf_getOptionDOName: doBenefit: ' + await JSON.stringify(doBenefit));

//             // take option names and store in an array

//             var optionListArray = doBenefit.mappedOptionList.map(function (item) {

//                 logout('label: ' + JSON.stringify(item.label));

//                 return item.label;

//                 //  return doProduct.mappedBenefitList[label.label];

//             });

//             await logout('optionListArray: ' + await JSON.stringify(optionListArray));

//             await logout(functionName + ': optionLabel: ' + optionLabel);

//             // get index of mappedBenefitList for label

//             var indexOfOption = optionListArray.indexOf(optionLabel);

//             await logout('indexOfOption: ' + indexOfOption);

//             if(indexOfOption == -1){

//                 var e = 'ERROR: Option label does not exist in the list on the UI';

//                 await this.failResult(functionName, testName, testValue, e);

//                 return false;

//             }

//             // get doName for that benefit

//             var doOption = doBenefit.mappedOptionList[indexOfOption];

//             await logout(functionName + ': doOption: ' + JSON.stringify(doOption));

//             var doName = doOption.doName;

//             await logout(functionName + ': doName: ' + doName);

//             var doFieldType = doOption.fieldType;

//             var doValue = doOption.value;

//             await logout('SFQPO:sf_getOptionDOName(): Option doName is ' + doName);

//             await logout('SFQPO:sf_getOptionDOName(): Option doFieldType is ' + doFieldType);

//             await logout('SFQPO:sf_getOptionDOName(): Option doValue is ' + doValue);

//             // storing at 2 levels until it becomes clear which one has the best value, ease of use

 

//             try {

//                 await logout('doBenefit: ' + JSON.stringify(doBenefit));

//                 doBenefit['selectedOptionDOName'] = doName;

//                 doBenefit['selectedOptionDOFieldType'] = doFieldType;

//                 doBenefit['selectedOptionDOValue'] = doValue;

//            } catch (e) {

//                 await logout('SFQPO:sf_getOptionDOName(): ERROR: doBenefit.selectedOptionDOName: ' + e);

//             }

//             try {

//                 await logout('doBenefit: ' + JSON.stringify(doBenefit));

//                 doBenefit['selectedOptionDOFieldType'] = doFieldType;

//             } catch (e) {

//                 await logout('SFQPO:sf_getOptionDOName(): ERROR: doBenefit.selectedOptionDOFieldType: ' + e);

//             }

//             try {

//                 this.do.product.selectedOptionDOName = doName;

//                this.do.product.selectedOptionDOFieldType = doFieldType;

//                 this.do.product.selectedOptionDOValue = doValue;

//             } catch (e) {

//                 await logout('SFQPO:sf_getOptionDOName(): ERROR: this.product.selectedOptionDOName: ' + e);

//             }

//         } catch (e) {

//             await logout('SFQPO:sf_getOptionDOName():' + e);

//        }

//         return true;

//     }

//     //VLO-21 Can be combined with VL0-16

//     this.sf_checkBenefitOptionValuesPresent = async function (benefitName, optionLabel) {

//         var functionName = appnID + 'sf_checkBenefitOptionValuesPresent()';

//         var testName = 'Check Option '+optionLabel+' and Value is present'

//         var testValue = optionLabel;

//         var preCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));

//         var preCheckType = 'visible';

 

//         //Defined postCheckElem later on in the function

    

//         //Get doFieldType and doOptionValue for the Option optionLabel

//         await this.sf_getBenefitDOName(benefitName);

//         await this.sf_getOptionDOName(optionLabel);

//         var doFieldType   = this.do.product.selectedOptionDOFieldType;

//         var doOptionValue = this.do.product.selectedOptionDOValue;

    

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             //Click Show Benefit

//             await this.sf_showHideBenefit(benefitName,'Show');

//             //Storing unique option element into postCheckElem

//             var postCheckElem = await this.sf_getUniqueOptionElem();

//             var postCheckType = 'visible'; //visible, clickable

 

//             await logout('SFQPO:sf_checkBenefitOptionValuesPresent(): Checking Option ' + optionLabel + ' is present...');

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//            await logout('SFQPO:sf_checkBenefitOptionValuesPresent(): Checking default value ' + doOptionValue + ' is present for Option ' + optionLabel + '...');

      

//             //Checking the field type of the option and then getting the actual value and comparing to the expected value

//            if (doFieldType == 'input') {

//                 var optionValue = await postCheckElem.element(by.xpath('../..')).$('input').getAttribute('value');

//             }

//             if (doFieldType == 'dropdown') {

//                var optionValue = await postCheckElem.element(by.xpath('../..')).$('select').$('option[selected ="selected"]').getText();

//             }

//             if (doFieldType == 'readOnly') {

//                var optionValue = await postCheckElem.element(by.xpath('../..')).$('p').getText();

//             }

//             await logout('SFQPO: sf_checkBenefitOptionValuesPresent(): Actual Option value for ' + optionLabel + ' is ' + optionValue);

 

//             if (optionValue.indexOf(doOptionValue) != -1) {

//                 await logout('SFQPO: sf_checkBenefitOptionValuesPresent(): Actual Option value is matching with the expected option value');

//                 await this.passResult(functionName, testName, testValue);

//             } else {

//                 await this.failResult(functionName, testName, testValue, 'Actual Option value is not matching with the expected option value');

//                 return false;

//             }

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.sf_editOptionValues = async function () {

//         //assumes DO has correct values for: selectedBenefit,selectedOption,selectedOptionValue

  

//         // ### BOILERPLATE FUNCTION CODE ###

      

//         var benefitName = this.do.product.selectedBenefit;

//         var optionLabel = this.do.product.selectedOption;

//         var testValue = this.do.product.selectedOptionValue;

//         var functionName = appnID + 'sf_editOptionValues()';

//         var testName = 'Edit Option Value for ' + optionLabel;

//         //var testValue = optionValue;

//         var postCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));;

//         var postCheckType = 'visible'

//         //uniqueBenefitElem holds location of the unique benefit label of selectedClient.(eg: clientContainerElem.all(by.cssContainingText('h3', benefitName)).get(x) )

//        // var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitName);

//         //var optionField = await uniqueBenefitElem.element(by.xpath('../../../../..')).element(by.cssContainingText('label', optionLabel)).element(by.xpath('../..'));

//         // var postCheckElem = actElem

//         // var postCheckType = 'present'; //visible, clickable

      

//         // *** setup values and state prior to interaction with option field        

//         await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//         await this.sf_showHideBenefit(benefitName,'Show');

//         //optionField holds the the location of the unique Option label ( eg: optionField = uniqueBenefitElem.element(by.xpath('../../../../..')).all(by.cssContainingText('label', testValue)).get(x); )

//         var optionField = await this.sf_getUniqueOptionElem();

//         //Get doFieldType for the Option

//         await this.sf_getBenefitDOName(benefitName);

//         await this.sf_getOptionDOName(optionLabel);

//         var optionFieldType = this.do.product.selectedOptionDOFieldType;

//         //Depending on the option field type, edit the value and then compare the actual and expected value

       

//         // *** run the test, depending on the type of input

//         // *** TEXT FIELD

//         if (optionFieldType == 'input') {

//             await this.editOptionValues_forInput(optionField, optionLabel, testValue);

//         }

   

 

//         if (optionFieldType == 'dropdown') {

//             await this.editOptionValues_forDropDown(optionField, optionLabel, testValue);

//         }

 

//         //     var preCheckElem = optionField.element(by.xpath('../..')).$('input');

//         //     var preCheckType = 'clickable';

//         //     var actElem = preCheckElem;

//         //     var postCheckElem = await actElem.getAttribute('value');

//         //     var postCheckType = 'present';

//         //    // try{

//         //         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         //         //await browser.wait(protractor.ExpectedConditions.elementToBeClickable(actElem), 30000);

//         //         await actElem.click();

//         //         //await browser.sleep('5000');

//         //         await this.postCheck(actElem, preCheckType, functionName, testName); // check again

//         //         await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")).perform();

//         //         await browser.actions().sendKeys(protractor.Key.DELETE).perform();

//         //         await this.postCheck(actElem, preCheckType, functionName, testName); // check again

//         //         // *** doesn't easily send keys, so am going to loop a few attempts seeking the attribute value

//         //         var optionValue = await actElem.getAttribute('value');

//         //         var timeOut = 0; // a value that allows the do/while loop to terminate after 10 attempts

 

//         //         await logout(functionName + ': optionValue: ' + optionValue);

//         //         await logout(functionName + ': testValue: ' + testValue);

//         //         do {

//         //             if(timeOut == 50){ // tries 50x, at about 100ms per attempt, or 5 seconds

//         //                 await logout(functionName + ': failed to enter value... timeout reached.. failResult and returning false');

//         //                 await this.failResult(functionName, testName, testValue, 'Option value is not entered correctly: ' + optionLabel + ': Tried to enter ' + testValue + ' but has value entered as ' + optionValue);

//         //                 return false;

//         //             }else{

//         //                 await logout(functionName + ': trying loop...');

//         //             }

 

//         //             try{

//         //                 await logout(functionName + ': DOING text field entry loop for ' + optionLabel + ': timeout: ' + timeOut + ' :optionValue: ' + optionValue + ' :testValue: ' + testValue);

//         //                 // await logout(functionName + ': Doing text field entry loop: ' + timeOut);

//         //                 // await logout(functionName + ': Doing text field entry loop: ' + timeOut);

//         //                 await actElem.sendKeys(testValue);

//         //                 optionValue = await actElem.getAttribute('value');

                      

//         //             //await this.postCheck(actElem, preCheckType, functionName, testName); // check again

//         //             }catch(e){

//         //                 await logout(functionName + ': failed to enter value... trying again');

//         //                 await browser.sleep(100);

//         //                 timeOut++;

//         //             }

 

 

//         //         } while(optionValue != testValue);

//         //         await logout(functionName + ': DONE text field entry loop for ' + optionLabel + ': timeout: ' + timeOut + ' :optionValue: ' + optionValue + ' :testValue: ' + testValue);

//         //         await this.passResult(functionName, testName, testValue);

//         //         return true;

               

//                 //await browser.sleep('2000');

//                // var optionValue = await actElem.getAttribute('value');

//                 // await logout('######### optionValue:'+optionValue);

//             //     if (optionValue == testValue) {

//             //         await this.passResult(functionName, testName, testValue);

//             //         return true;

//             //     } else {

//             //         await this.failResult(functionName, testName, testValue, 'Option value is not entered correctly: ' + optionLabel + ': Tried to enter ' + testValue + ' but has value entered as ' + optionValue);

//             //         return false;

//             //     }

//             // } catch (e) {

//             //     await this.failResult(functionName, testName, testValue, e);

//             //     return false;

//             // }

//         // }

//         // if (optionFieldType == 'dropdown') {

//         //     var actElem = optionField.element(by.xpath('../..')).$('select').$$('option');

//         //     //Browsing the options to look for the matching one and then click

//         //     for (i = 0; i < await actElem.count(); i++) {

//         //         if (optionValue == await actElem.get(i).getText()) {

//         //             await actElem.get(i).click();

//         //         }

//         //     }

//         //     // await browser.sleep('5000');

//         //     await logout('SFQPO:sf_editOptionValues(): Value is clicked');

//         //     // postCheck for optionValue is selected from dropdown

//         //     var optionValue = await optionField.element(by.xpath('../..')).$('select').getAttribute('value');

//         //     var index = optionValue.indexOf(':');

//         //     var optionValue = optionValue.slice(index + 1);

//         //     await logout('SFQPO:sf_editOptionValues(): optionValue:' + optionValue);

//         //     if (optionValue == testValue) {

//         //         await this.passResult(functionName, testName, testValue);

//        //     } else {

//         //         await this.failResult(functionName, testName, testValue, 'Option value is not selected correctly');

//         //     }

//         // }

         

//     }

//     this.editOptionValues_forInput = async function(optionField, optionLabel, testValue){

//         var functionName = 'SFQPO:editOptionValues_forInput()';

//         var testName = 'Enter Option value for ' + optionLabel;

//         var preCheckElem = optionField.element(by.xpath('../..')).$('input');

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         // var postCheckElem = await actElem.getAttribute('value');

//         // var postCheckType = 'present';

//         // try{

//         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         //await browser.wait(protractor.ExpectedConditions.elementToBeClickable(actElem), 30000);

//         var optionValue;

//         var timeOut = 0;

//         //await actElem.click(); // not sure why we are doing this here, and not after postCheck.. moving...

//         //await browser.sleep('5000');

//         //await this.postCheck(actElem, preCheckType, functionName, testName); // check again

       

//         // check if optionValue is not null, and clear out

//         optionValue = await actElem.getAttribute('value');

//         await logout(functionName + ': optionValue:' + await optionValue);

       

//         if(await optionValue != ''){      

//             do {

//                 await logout(functionName + ': optionValue is not null, so clear it out');

 

//                 if(timeOut == 50){ // tries 50x, at about 100ms per attempt, or 5 seconds

//                     await logout(functionName + ': failed to clear value... timeout reached.. failResult and returning false');

//                     await this.failResult(functionName, testName, testValue, 'Option value is not cleared correctly: ' + optionLabel + ': Tried to clear the value but failed');

//                     return false;

//                 }else{

//                     await actElem.click();

//                     await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")).perform();

//                     await browser.actions().sendKeys(protractor.Key.DELETE).perform();

//                     await this.postCheck(actElem, preCheckType, functionName, testName); // check again

 

//                     optionValue = await actElem.getAttribute('value');

//                     await logout(functionName + ': optionValue should be "": "' + optionValue + '"');

               

//                 }

 

//                 timeOut++;

 

//             } while(await optionValue != '');

//         }else{

//             await logout(functionName + ': optionValue is already null, moving on to enter value');

//         }

 

 

//         //await logout(functionName + ': optionValue: ' + optionValue);

//         await logout(functionName + ': testValue: ' + testValue);

 

//         timeOut = 0;

//         do {

//             if(timeOut == 10){ // tries 50x, at about 100ms per attempt, or 5 seconds

//                 await logout(functionName + ': failed to enter value... timeout reached.. failResult and returning false');

//                 await this.failResult(functionName, testName, testValue, 'Option value is not entered correctly: ' + optionLabel + ': Tried to enter ' + testValue + ' but has value entered as ' + optionValue);

//         process.exit();       

//                 return false;

//             }else{

//                 await logout(functionName + ': trying loop...');

//             }

 

//             try{

//                 await logout(functionName + ': DOING text field entry loop for ' + optionLabel + ': timeout: ' + timeOut + ' :optionValue: ' + optionValue + ' :testValue: ' + testValue);

//                 // await logout(functionName + ': Doing text field entry loop: ' + timeOut);

//                 // await logout(functionName + ': Doing text field entry loop: ' + timeOut);

//                 await actElem.sendKeys(testValue);

//                 optionValue = await actElem.getAttribute('value');

              

//                 if(optionValue == testValue){

//                     await browser.actions().sendKeys(protractor.Key.TAB).perform(); // not essential but a good practice incase something is triggered in the future

//                     await logout(functionName + ': DONE text field entry loop for ' + optionLabel + ': timeout: ' + timeOut + ' :optionValue: ' + optionValue + ' :testValue: ' + testValue);

                   

//                     await this.passResult(functionName, testName, testValue);

//                 }else{

//                     await logout(functionName + ': failed to correctly enter testValue "' + testValue + '" into option field "' + optionLabel + '"');

//                     // tries again as part of 'while' condition

//                 }

               

 

//                 //await this.postCheck(actElem, preCheckType, functionName, testName); // check again

           

//             }catch(e){

//                 await logout(functionName + ': failed to enter value... trying again');

//                 await browser.sleep(100);

//                 timeOut++;

//             }

 

 

//         } while(optionValue != testValue);

//         if(timeOut>0){

//             await this.failResult(functionName, testName, 'Took ' + timeOut + ' times to get cursor access to option ' + optionLabel);

//         }

 

       

//         return true;

//     }

 

//     // if (optionFieldType == 'dropdown') {

//     //     var actElem = optionField.element(by.xpath('../..')).$('select').$$('option');

//         //Browsing the options to look for the matching one and then click

//         // for (i = 0; i < await actElem.count(); i++) {

//         //     if (optionValue == await actElem.get(i).getText()) {

//         //         await actElem.get(i).click();

//         //     }

//         // }

//         // await browser.sleep('5000');

//         // await logout('SFQPO:sf_editOptionValues(): Value is clicked');

//         // postCheck for optionValue is selected from dropdown

//         // var optionValue = await optionField.element(by.xpath('../..')).$('select').getAttribute('value');

//         // var index = optionValue.indexOf(':');

//         // var optionValue = optionValue.slice(index + 1);

//         // await logout('SFQPO:sf_editOptionValues(): optionValue:' + optionValue);

//         // if (optionValue == testValue) {

//         //     await this.passResult(functionName, testName, testValue);

//         // } else {

//         //     await this.failResult(functionName, testName, testValue, 'Option value is not selected correctly');

//         // }

//     // }

 

 

//     this.editOptionValues_forDropDown = async function(optionField, optionLabel, testValue){

//         var functionName = 'SFQPO:editOptionValues_forDropDown()';

//         var testName = 'Enter Option value for ' + optionLabel;

//         var optionValue = testValue;

//         var preCheckElem = optionField.element(by.xpath('../..')).$('select').$$('option');

//         var preCheckType = 'present';

//         var actElem = preCheckElem;

//         // var postCheckElem = await actElem.getAttribute('value');

//         // var postCheckType = 'present';

//         // try{

//         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         //await browser.wait(protractor.ExpectedConditions.elementToBeClickable(actElem), 30000);

//         //await actElem.click();

//         //await browser.sleep('5000');

//         //await this.postCheck(actElem, preCheckType, functionName, testName); // check again

//         // await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")).perform();

//         // await browser.actions().sendKeys(protractor.Key.DELETE).perform();

//         //await this.postCheck(actElem, preCheckType, functionName, testName); // check again

//         // *** doesn't easily send keys, so am going to loop a few attempts seeking the attribute value

  

//         var timeOut = 0; // a value that allows the do/while loop to terminate after 10 attempts

//         await logout(functionName + ': optionValue: ' + optionValue);

//         await logout(functionName + ': testValue: ' + testValue);

//         do {

//             if(timeOut == 50){ // tries 50x, at about 100ms per attempt, or 5 seconds

//                 await logout(functionName + ': failed to enter value... timeout reached.. failResult and returning false');

//                 await this.failResult(functionName, testName, testValue, 'Option value is not entered correctly: ' + optionLabel + ': Tried to enter ' + testValue + ' but has value entered as ' + optionValue);

//                 return false;

//             }else{

//                 await logout(functionName + ': trying loop...');

//             }

//             try{

//                 await logout(functionName + ': DOING text field entry loop for ' + optionLabel + ': timeout: ' + timeOut + ' :optionValue: ' + optionValue + ' :testValue: ' + testValue);

//                 // await logout(functionName + ': Doing text field entry loop: ' + timeOut);

//                 // await logout(functionName + ': Doing text field entry loop: ' + timeOut);

//                 // await actElem.sendKeys(testValue);

//                 // do click

//                 for (i = 0; i < await actElem.count(); i++) {

//                     if (optionValue == await actElem.get(i).getText()) {

//                         await actElem.get(i).click();

//                     }

//                 }

//                 //optionValue = await actElem.getAttribute('value');

              

//                 var optionValue = await optionField.element(by.xpath('../..')).$('select').getAttribute('value');

//                 var index = optionValue.indexOf(':');

//                 optionValue = optionValue.slice(index + 1);

//             //await this.postCheck(actElem, preCheckType, functionName, testName); // check again

//             }catch(e){

//                 await logout(functionName + ': failed to enter value... trying again');

//                 await browser.sleep(100);

//                 timeOut++;

//             }

//         } while(optionValue != testValue);

//         await logout(functionName + ': DONE text field entry loop for ' + optionLabel + ': timeout: ' + timeOut + ' :optionValue: ' + optionValue + ' :testValue: ' + testValue);

//         await this.passResult(functionName, testName, testValue);

//         return true;

//     }

 

 

//     this.sf_getUniqueBenefitElem = async function (benefitName) {

//         var checkUniqueBenefitLabel = element.all(by.cssContainingText('h3', benefitName));

//         var uniqueBenefitElem;

//         try {

//             await logout('checkUniqueBenefitLabel count: ' + await checkUniqueBenefitLabel.count());

//             for (var x = 0; x < await checkUniqueBenefitLabel.count(); x++) {

//                 // get text

//                 var benefitText = await checkUniqueBenefitLabel.get(x).getText();

//                 await logout('############# benefitText: ' + benefitText);

//                 // check equal to benefitName

//                 if (benefitText == benefitName) {

//                     uniqueBenefitElem = element.all(by.cssContainingText('h3', benefitName)).get(x);

//                     break;

//                 }

//                 // assign to uniqueBenefitElem, will have .get(x) eg. uniqueBenefitElem = element.all(by.cssContainingText('h3', benefitName)).get(1);

//             }

//             return uniqueBenefitElem;

//         } catch (e) {

//             uniqueBenefitElem = element(by.cssContainingText('h3', benefitName));

//             return uniqueBenefitElem;

//         }

//     }

//     // adds a client under multi client conditions

//     this.unitTest_addClient = async function(unitTestName){

//         var functionName = 'SFQPO:unitTest_addClient()';

//         do {

//             await logout(functionName + ': doing getUnitTestData for excel target: ' + unitTestName);

   

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

//                 await logout(functionName + ': About to create new client');

//                 await this.setNewClientPersonalDetailsInDO();

//                 await logout(functionName + ': Update clients.clientx.personalDetails for values that are not present');

//                 await this.updateMissingClientPersonalDetails();

//                 // get the client number and assign prefixElem based on whether its the primary client, or one of the dependent clients

//                 var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//                 await logout(functionName + ': clientNumber: ' + clientNumber);

//                 // now you have client details stored in the DO. So if this is client2+ then click Add Life and continue

//                 if(clientNumber != 1){

//                     // click add new

//                     await logout(functionName + ': Clicking Add Life');

//                     try{

//                         await $('.nds-edit-block_longcards-add-icon').click();

//                     }catch(e){

//                         await logout('FAILED TO CLICK ADD NEW CLIENT BUTTON FOR CLIENT ' + clientNumber);

//             process.exit(); // brace during development to stop test dead on error

//                     }

          

//                 }else{

//                     await logout('primary client, not clicking new');

//                 }

//                 // now the client details are showing, so enter them

//                 await this.captureClientDetails();

//                 // now you can save the record and do another loop for another client, if any

//                 if(clientNumber > 1){

//                     //save dependent record

//                     try{

//                         await browser.sleep(1000);

//                         await element(by.cssContainingText('button','Save')).click();

//                     }catch(e){

//                         await logout('FAILED TO CLICK SAVE FOR CLIENT ' + clientNumber);

//         process.exit(); // brace during development to stop test dead on error

//                     }

//               }

//             }else{

//                 await logout(functionName + ': PROBLEM: targetGroup.doTest was false and so function did not run');

//             }

//             await logout(functionName + ': if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         await logout(functionName + ': end of function ');

//         return true;

//     }

//     this.setNewClientPersonalDetailsInDO = async function(){

//         // assumes DO has correct values for:

//         // - clients.selectedClient {1,2,3,4..}

//         // - next new client is next in list on UI

//         // - if client already exists, then it will be overwritten in whole or partial

//         // - XL design - can only add 1 client at a time, per row

//         // get client number to add, set as clientDO

//         // get client details to add from clients.clientx.firstName etc

//         var functionName = 'SFQPO:setNewClientPersonalDetailsInDO()';

//         var testName = 'Store New Client in DO.clients: ' + this.do.clients.selectedClient;

//         await logout(functionName + ': testName: ' + testName);

//         //var clientNumberToAdd = 'client' + this.do.clients.selectedClient

//         //var currentClientDO = this.do.clients[this.do.clients.selectedClient];

//         // probably will just create one from defaults first.

//         // get the array from default client details

//         // await logout('this.do.clients.definitions.personalDetails:  ' + this.do.clients.definitions.personalDetails);

//         // get labels, and values into array

//         var defaultClientDetailsVariables = this.do.clients.definitions.personalDetails.map(function (item) {

//             return item.variable;

//         });

//         var defaultClientDetailsValues = this.do.clients.definitions.personalDetails.map(function (item) {

//             return '' + item.value;

//         });

//         // create the new array to add to 'clients'

//         var newClientPersonalDetailsDO = {};

//         var testRefs = this.do.excelData.objRef;

//         await logout(functionName + ': testRefs: ' + JSON.stringify(testRefs));

//         // await logout('testRefs: ' + JSON.stringify(testRefs));

//         // use label to check index of unit test data

//         // await logout('excelData.unitTestData: ' + JSON.stringify(this.do.excelData.unitTestData));

//         var unitTestData = this.do.excelData.unitTestData;

//         await logout(functionName + ': unitTestData: ' + JSON.stringify(unitTestData));

//         var defaultVariable;

//         // var xlData;

//         // var refValue;

//         // cycle through client definition personalDetails variables

//         for(var x=0; x<defaultClientDetailsVariables.length; x++){

//             // take each variable eg. firstName, lastName as defaultVariable

//             defaultVariable = defaultClientDetailsVariables[x];

//             // cycle through the row of data you are on. you will have just captured the row of data into unitTestData

//             // we are looking for any matches of variable names eg. firstName.

//             // they currently have notation .firstName, so lets drop the . and compare the rest

//             for(var y=0; y<unitTestData.length; y++){

//                 await logout(functionName + ': unitTestData[' + y + ']: ' + unitTestData[x]);

//                 // set up the array variable, to populate with firstName, lastName, dob etc. but no personalDetails grouping as yet.

//                 // a values is assigned first, from the default definitions. Then if a value actually exists in the unitTestData, then it overrides that.

//                 newClientPersonalDetailsDO[defaultVariable] = '' + defaultClientDetailsValues[x];

//                 if(testRefs[y].slice(1) == defaultVariable){

//                     // await logout('match!!! XL_Ref:' + refValue + ' is the same as DO_Ref:' + defaultVariable );

//                     // await logout('value to save from xlData: ' + xlData);

//                     // set unitTestData as value

//                     //xlData = unitTestData[y];

//                     newClientPersonalDetailsDO[defaultVariable] = '' + unitTestData[y];

//                     // await logout('newClientPersonalDetailsDO[defaultVariable]: ' + newClientPersonalDetailsDO[defaultVariable]);

//                     //await logout('newClientPersonalDetailsDO: ' + JSON.stringify(newClientPersonalDetailsDO));

//                     y=unitTestData.length;

//                 }

//             } // unitTestCycle

//         } // DO client details field labels cycle

//         await logout(functionName + ': newClientPersonalDetailsDO: ' + await JSON.stringify(newClientPersonalDetailsDO));

 

//         //this.do.clients[this.do.clients.selectedClient];

//         var clientDO = {};

//         clientDO['personalDetails'] = {};

//         clientDO.personalDetails = newClientPersonalDetailsDO;

//         // clientDO.personalDetails.push(newClientPersonalDetailsDO);

//         await logout(functionName + ': clientDO: ' + JSON.stringify(clientDO));

//         //var clientDO = this.do.clients.push(clientDO);

//         // this happens at end once you have loaded XL values, or default values into var

//         this.do.clients[this.do.clients.selectedClient] = clientDO;

//         // this.do.clients[this.do.clients.selectedClient].push(clientDO);

//         //

//         await logout(functionName + ': clients: ' + await JSON.stringify(this.do.clients));

//         return true;

//     }

//     // this.sf_completeClientDetails = async function (clientNo) {

//     //     // ### BOILERPLATE FUNCTION CODE ###

//     //     var functionName = appnID + 'sf_completeClientDetails()';

//     //     var testName = 'Add Client Details for client' + clientNo;

//     //     var clientNumber = 'client' + clientNo;

//     //     //Incrementing the count of clients present

//     //     this.do.clientDetails.count++;

//     //     var testValue = this.do.clientDetails[clientNumber];

//     //     await logout('SFQPO:sf_completeClientDetails(): clientNumber: ' + clientNumber);

//     //     // await logout('SFQPO:sf_completeClientDetails(): client2: ' + await JSON.stringify(testValue));

//     //     await logout('SFQPO:sf_completeClientDetails():' + clientNumber + '.personal Details : ' + await JSON.stringify(testValue.personalDetails));

//     //     //*****toberemoved: One way to update currentClient is directly from spec reading clientNo

//     //     this.do.clientDetails.currentClient = clientNo;

//     //     //*****toberemoved: New button code

//     //     // var preCheckElem = element.all(by.cssContainingText('span','New')).last();

//     //     // var preCheckType = 'clickable';

//     //     var preCheckElem = element(by.cssContainingText('h1', 'Capture Client Details'));

//     //     var preCheckType = 'present';

//     //     //Getting domClientNo from the currentClient in DO     

//     //     this.do.clientDetails.domClientNo = await getdomClientNumber(this.do.clientDetails.currentClient);

//     //     var domClientNo = this.do.clientDetails.domClientNo;

//    //     await logout('SFQPO:sf_completeClientDetails(): getdomClientNumber():' + this.do.clientDetails.domClientNo);

//     //     var actElem = element(by.cssContainingText('button', 'Save'));

//     //     var postCheckElem = element(by.cssContainingText('span', 'Name: ' + await this.sf_getLabelValue('First Name', testValue.personalDetails) + ' ' + await this.sf_getLabelValue('Last Name', testValue.personalDetails)));

//     //     var postCheckType = 'visible'; //visible, clickable

//     //     try {

//     //         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//     //         await logout('SFQPO:sf_completeClientDetails(): : Adding client details...');

//     //         await this.additionalClient_enterInputFieldTextByLabel('First Name', await this.sf_getLabelValue('First Name', testValue.personalDetails));

//     //         await this.additionalClient_enterInputFieldTextByLabel('Last Name', await this.sf_getLabelValue('Last Name', testValue.personalDetails));

//     //         await this.additionalClient_enterInputFieldTextByLabel('Date of birth', await this.sf_getLabelValue('Date of birth', testValue.personalDetails));

//     //         await this.additionalClient_enterInputFieldTextByLabel('Occupation', await this.sf_getLabelValue('Occupation', testValue.personalDetails));

//     //         await browser.sleep(3000); // allow time for list to be showing, replace with preCheckElem, when put into own function

//     //         try {

//     //             await element.all(by.cssContainingText('label', 'Occupation')).last().element(by.xpath('..')).$$('li').first().click();

//     //             await logout('SFQPO:sf_completeClientDetails(): Multiple occupations showing, so selected first one...');

//     //         } catch (e) {

//     //             await logout('SFQPO:sf_completeClientDetails(): Only 1 Occupation is showing, so clicking it....')

//     //             await element.all(by.cssContainingText('label', 'Occupation')).last().element(by.xpath('..')).$('li').click();

//     //         }

//     //         await browser.sleep(2000);

//     //         await this.additionalClient_selectValueByRadioButton('Gender', await this.sf_getLabelValue('Gender', testValue.personalDetails));

//     //         await this.additionalClient_selectValueByRadioButton('Smoking Status', await this.sf_getLabelValue('Smoking Status', testValue.personalDetails));

//     //         //Verify Age is added as expected

//     //         var actualAge = await element.all(by.cssContainingText('label', 'Age')).last().element(by.xpath('..')).$('input').getAttribute('value');

//     //         var expectedAge = await getAge(await this.sf_getLabelValue('Date of birth', testValue.personalDetails));

//     //         if (actualAge == expectedAge) {

//     //             await logout('SFQPO:sf_completeClientDetails()): Age is calculated as expected');

//     //         } else {

//     //             await logout('SFQPO:sf_completeClientDetails(): Age is not calculated as expected');

//     //         }

//     //         //Verify Occupation Class is added as expected

//     //         var actualOccupationClass = await element.all(by.cssContainingText('label', 'Class')).last().element(by.xpath('..')).$('input').getAttribute('value');

//     //         var expectedOccupationClass = await this.getOccupationClass(await this.sf_getLabelValue('Occupation', testValue.personalDetails));

//     //         if (actualOccupationClass == expectedOccupationClass) {

//     //             await logout('SFQPO:sf_completeClientDetails(): Occupation Class is generated as expected');

//     //         } else {

//     //             await logout('SFQPO:sf_completeClientDetails(): Occupation Class is not generated as expected');

//     //         }

//   //         try {

//     //             if (clientNo > 1) {

//     //                 //Click Save

//     //                 await browser.wait(protractor.ExpectedConditions.elementToBeClickable(actElem), 2000);

//     //                 await actElem.click();

//     //                 //Verify Client is added                       

//     //                 await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//     //             }

//     //         } catch (e) {

//     //             await logout('SFQPO:sf_completeClientDetails(): Client details for client ' + clientNo + ' is not saved');

//     //         }

//     //         await this.passResult(functionName, testName, testValue);

//     //         return true;

//     //     } catch (e) {

//     //         await this.failResult(functionName, testName, testValue, e);

//     //         return false;

//     //     }

//     // }

//     this.sf_completeClientDetails = async function (clientNo) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'sf_completeClientDetails()';

//         var testName = 'Add Client Details for client' + clientNo;

//         var clientNumber = 'client' + clientNo;

//         // //Incrementing the count of clients present

//         // this.do.clientDetails.count++;

//          var testValue = clientNo;

//         // await logout('SFQPO:sf_completeClientDetails(): clientNumber: ' + clientNumber);

//         // // await logout('SFQPO:sf_completeClientDetails(): client2: ' + await JSON.stringify(testValue));

//         // await logout('SFQPO:sf_completeClientDetails():' + clientNumber + '.personal Details : ' + await JSON.stringify(testValue.personalDetails));

//         //*****toberemoved: One way to update currentClient is directly from spec reading clientNo

//        // this.do.clientDetails.currentClient = clientNo;

//         //*****toberemoved: New button code

//         // var preCheckElem = element.all(by.cssContainingText('span','New')).last();

//         // var preCheckType = 'clickable';

//         var preCheckElem = element(by.cssContainingText('h1', 'Capture Client Details'));

//         var preCheckType = 'present';

//         //Getting domClientNo from the currentClient in DO    

//         this.do.clientDetails.domClientNo = await getdomClientNumber(this.do.clientDetails.currentClient);

//         var domClientNo = this.do.clientDetails.domClientNo;

//         await logout('SFQPO:sf_completeClientDetails(): getdomClientNumber():' + this.do.clientDetails.domClientNo);

//         var actElem = element(by.cssContainingText('button', 'Save'));

//         var postCheckElem = element(by.cssContainingText('span', 'Name: ' + await this.sf_getLabelValue('First Name', testValue.personalDetails) + ' ' + await this.sf_getLabelValue('Last Name', testValue.personalDetails)));

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await logout('SFQPO:sf_completeClientDetails(): : Adding client details...');

//             await this.additionalClient_enterInputFieldTextByLabel('First Name', await this.sf_getLabelValue('First Name', testValue.personalDetails));

//             await this.additionalClient_enterInputFieldTextByLabel('Last Name', await this.sf_getLabelValue('Last Name', testValue.personalDetails));

//             await this.additionalClient_enterInputFieldTextByLabel('Date of birth', await this.sf_getLabelValue('Date of birth', testValue.personalDetails));

//             await this.additionalClient_enterInputFieldTextByLabel('Occupation', await this.sf_getLabelValue('Occupation', testValue.personalDetails));

//             await browser.sleep(3000); // allow time for list to be showing, replace with preCheckElem, when put into own function

//             try {

//                 await element.all(by.cssContainingText('label', 'Occupation')).last().element(by.xpath('..')).$$('li').first().click();

//                 await logout('SFQPO:sf_completeClientDetails(): Multiple occupations showing, so selected first one...');

//             } catch (e) {

//                 await logout('SFQPO:sf_completeClientDetails(): Only 1 Occupation is showing, so clicking it....')

//                 await element.all(by.cssContainingText('label', 'Occupation')).last().element(by.xpath('..')).$('li').click();

//             }

//             await browser.sleep(2000);

//             await this.additionalClient_selectValueByRadioButton('Gender', this.do.personalDetails.gender);

//             await this.additionalClient_selectValueByRadioButton('Smoker', this.do.personalDetails.smokerStatus);

//             // //Verify Age is added as expected

//             // var actualAge = await element.all(by.cssContainingText('label', 'Age')).last().element(by.xpath('..')).$('input').getAttribute('value');

//             // var expectedAge = await getAge(await this.sf_getLabelValue('Date of birth', this.do.personalDetails.dob));

//             // if (actualAge == expectedAge) {

//             //     await logout('SFQPO:sf_completeClientDetails()): Age is calculated as expected');

//             // } else {

//             //     await logout('SFQPO:sf_completeClientDetails(): Age is not calculated as expected');

//             // }

//             // //Verify Occupation Class is added as expected

//             // var actualOccupationClass = await element.all(by.cssContainingText('label', 'Class')).last().element(by.xpath('..')).$('input').getAttribute('value');

//             // var expectedOccupationClass = await this.getOccupationClass('Occupation', this.do.personalDetails.occupation));

//             // if (actualOccupationClass == expectedOccupationClass) {

//             //     await logout('SFQPO:sf_completeClientDetails(): Occupation Class is generated as expected');

//             // } else {

//             //     await logout('SFQPO:sf_completeClientDetails(): Occupation Class is not generated as expected');

//             // }

//             try {

//                 if (clientNo > 1) {

//                     //Click Save

//                     await browser.wait(protractor.ExpectedConditions.elementToBeClickable(actElem), 2000);

//                     await actElem.click();

//                     //Verify Client is added                   

//                     await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//                 }

//             } catch (e) {

//                 await logout('SFQPO:sf_completeClientDetails(): Client details for client ' + clientNo + ' is not saved');

//             }

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.sf_getLabelValue = async function (labelName, arrayList) {

//         var functionName = appnID + 'sf_getLabelValue()';

//         var testName = 'Get Label Value from DO';

//         var testValue = labelName;

//         try {

//             // take labels into an Array

//             var labelListArray = arrayList.map(function (item) {

//                 //logout('label: ' + JSON.stringify(item.label));

//                 return item.label;

//             });

//             await logout('labelListArray: ' + await JSON.stringify(labelListArray));

//             // get index of labelListArray for label

//          var indexOfLabel = labelListArray.indexOf(testValue);

//             // get labelValue for that labelName

//             var labelValue = arrayList[indexOfLabel].value;

//             await logout('SFQPO:sf_getLabelValue(): Label value is ' + labelValue);

//             await this.passResult(functionName, testName, testValue);

//             return labelValue;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//     }

//     // gets the label for a variable and listDO

//     this.sf_getVariableLabel = async function (variableName, arrayList) {

//         var functionName = appnID + 'sf_getVariableLabel()';

//         var testName = 'Get Label from DO list given a variable in that list';

//         var testValue = variableName;

//         try {

//             // take labels into an Array

//             var variableListArray = arrayList.map(function (item) {

//                 //logout('label: ' + JSON.stringify(item.label));

//                 return item.variable;

//             });

//             await logout('variableListArray: ' + await JSON.stringify(variableListArray));

//             // get index of labelListArray for label

//           var indexOfVariable = variableListArray.indexOf(testValue);

//             // get labelValue for that labelName

//             var variableLabel = arrayList[indexOfVariable].label;

//             await logout(functionName + ': Label value is ' + variableLabel);

//             //await this.passResult(functionName, testName, testValue);

//             return variableLabel;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

 

//     //todo: change to enterInputFieldTextByLabel() function once its up and running

//     this.additionalClient_enterInputFieldTextByLabel = async function (fieldLabel, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//        var functionName = appnID + 'enterInputFieldText()';

//         var testName = 'Input textbox ' + fieldLabel;

//         var testValue = textValue;

//         var domClientNo = this.do.clients.domClientNo;

//         var labelElem = element.all(by.cssContainingText('label', fieldLabel)).get(domClientNo);

//         var preCheckElem = labelElem.element(by.xpath('..')).$('input[type="text"]');

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem;

//         var postCheckType = 'visible'; //visible, clickable

//        try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.clear();

//             await actElem.sendKeys(testValue);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//            await this.passResult(functionName, testName, testValue);

//             return true;

//        } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     //todo:  change to selectValueByRadioButton() function once its up and running

//     // refactored original to handle both cases, backwards compat

//     this.additionalClient_selectValueByRadioButton = async function (fieldName, optionValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'additionalClient_enterInputFieldTextById()';

//         var testName = 'Radio button - ' + fieldName;

//         var testValue = optionValue;

//         var domClientNo = this.do.clients.domClientNo;

//         var preCheckElem = element.all(by.cssContainingText('span', fieldName)).get(domClientNo + 2);

//         await logout('additionalClient_selectValueByRadioButton(): check field ' + fieldName + ' count: ' + await element.all(by.cssContainingText('span', fieldName)).count());

//         var preCheckType = 'present';

//         var actElem = preCheckElem.element(by.xpath('../..')).$('input[value="' + optionValue + '"]').element(by.xpath('..')).$('div');

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     //domClientNo -- this will give the index of the label element on the DOM for the client to fill details

//     async function getdomClientNumber(currentClientNumber) {

//         if (currentClientNumber == 1) {

//             var domClientNo = (currentClientNumber - 1) * 2;

//         } else {

//             var domClientNo = currentClientNumber;

//         }

//         return domClientNo;

//     }

//     this.sf_selectBenefit = async function () {

//         // *** Assumption:  clientNumber = client1 is in this format

//         // *** Assumption: that this.do.product.selectedBenefit has the correct value in it prior to this function being called

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'sf_selectBenefit()';

//         var clientNumber = await this.getClientNumber();

//         var testName = 'Select Benefit for client';

//         var testValue = this.do.product.selectedBenefit + ' for ' + clientNumber;

//         // var testValue = await this.do.clients[clientNumber];

//         await logout('SFQPO:sf_selectBenefit(): clientNumber: ' + clientNumber);

//        // var selectedBenefitsList = testValue.benefits.benefit1;

//        //Read Benefit value from DO

//         var selectedBenefit = this.do.product.selectedBenefit;

//         await logout('SFQPO:sf_selectBenefit():' + clientNumber + '.selectedBenefit : ' + await JSON.stringify(selectedBenefit));

//         // try {

//         //     var totalNoOfClients = await element.all(by.cssContainingText('a', 'Hide Plan Details')).count();

//         //     await logout('Total No Of Clients : ' + totalNoOfClients);

//         // } catch (e) {

//         //     await logout('Error is ' + e);

//         // }

//       //  var clientContainerElem = $$('div[ng-show="childProduct.instanceKey"]').get(clientNo-1);

  

//         var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(selectedBenefit);

//         var preCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));

//         var preCheckType = 'visible';

//         //Select Checkbox

//         var actElem = await uniqueBenefitElem.element(by.xpath('../../..')).element(by.cssContainingText('label','Select optional coverage'));

//         var postCheckElem = actElem;

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();                

//             await logout('SFQPO:sf_selectBenefit(): Benefit clicked');

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);       

//             await this.checkBenefitSelected('Selected');

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     //todo: replace name by sf_getUniqueBenefitElem

//     this.sf_getUniqueBenefitElemMultipleClients = async function (benefitName) {

  

//         //assumption clientNumber should have value like client1 and var clientContainerElem should go 8 levels up to find the main div container

//         var functionName = 'SFQPO:sf_getUniqueBenefitElemMultipleClients()';

//         var testName = 'Get index for unique benefit name ' + benefitName;

//         var testValue = benefitName;

   

//         var clientNumber = await this.getClientNumber();

//         var client = this.do.clients[clientNumber];

//         var clientDetails = client.personalDetails;

//         try {

//             // var clientContainerElem = $$('div[ng-show="childProduct.instanceKey"]').get(clientNo-1);

//             //clientContainerElem is the Anchor to restrict the search per client by looking at the first and last name

//            var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

//             var checkUniqueBenefitLabel = clientContainerElem.all(by.cssContainingText('h3', benefitName));

//             var uniqueBenefitElem;

  

//             await logout('SFPQO:sf_getUniqueBenefitElemMultipleClients(): checkUniqueBenefitLabel count: ' + await checkUniqueBenefitLabel.count());

//             for (var x = 0; x < await checkUniqueBenefitLabel.count(); x++) {

//                 // get text

//                var benefitText = await checkUniqueBenefitLabel.get(x).getText();

//                 await logout('SFPQO:sf_getUniqueBenefitElemMultipleClients(): benefitText: ' + benefitText);

//                 // check equal to benefitName

//                 // assign to uniqueBenefitElem, will have .get(x) eg. uniqueBenefitElem = element.all(by.cssContainingText('h3', benefitName)).get(1);

//                 if (benefitText == benefitName) {

//                     uniqueBenefitElem = clientContainerElem.all(by.cssContainingText('h3', benefitName)).get(x);

//                     break;

//                 }

//             }

//             return uniqueBenefitElem;

//         } catch (e) {

//             await this.failResult(functionName, testName,testValue , e);

//         }

//     }

//     //todo: still inprogress function is incomplete

//     this.sf_getUniqueOptionElem = async function () {

//         var functionName = 'SFQPO:sf_getUniqueOptionElem()';

//         var testValue = this.do.product.selectedOption; //holds the optionLabel to test on

//         var testName = 'Get index for unique option name ' + testValue;

    

//         var benefitName = this.do.product.selectedBenefit;

//         var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitName);

   

//         try {

//             var checkUniqueOptionLabel =  uniqueBenefitElem.element(by.xpath('../../../../..')).all(by.cssContainingText('label', testValue));

//             var uniqueOptionElem;

   

//             await logout('SFPQO:sf_getUniqueOptionElem(): checkUniqueOptionLabel count: ' + await checkUniqueOptionLabel.count());

//             for (var x = 0; x < await checkUniqueOptionLabel.count(); x++) {

//                 // get text

//                 var optionText = await checkUniqueOptionLabel.get(x).getText();

//                 await logout('SFPQO:sf_getUniqueOptionElem(): optionText: ' + optionText);

//                 // check equal to testValue

//                 // assign to uniqueOptionElem, will have .get(x) eg. uniqueOptionElem = uniqueBenefitElem.element(by.xpath('../../../../..')).all(by.cssContainingText('label', testValue)).get(1);

//                 if (optionText == testValue) {

//                     uniqueOptionElem = uniqueBenefitElem.element(by.xpath('../../../../..')).all(by.cssContainingText('label', testValue)).get(x);

//                     break;

//                 }

//             }

//             return uniqueOptionElem;

//         } catch (e) {

//             await this.failResult(functionName, testName,testValue , e);

//         }

   

//     }

//     this.getFieldIdAndCount = async function(fieldLabel){

//         // assumptions - we are doing this only for personal details

//         // - we have set the selectedClient correctly

//         var functionName = 'SFQPO:getFieldIdAndCount()';

//         var testName = 'Get Id and rowCount for field: ' + fieldLabel;

//         // get client number

//         var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//         await logout(functionName + ': clientNumber: ' + clientNumber);

//         // take labels, ids into separate Arrays

//         var labelListArray = this.do.clients.definitions.personalDetails.map(function (item) {

//             return item.label;

//         });

//        var idListArray = this.do.clients.definitions.personalDetails.map(function (item) {

//             return item.id;

//         });

//         await logout(functionName + ': idListArray: ' + JSON.stringify(idListArray));

//         //await logout('labelListArray: ' + await JSON.stringify(labelListArray));

//         // get index of labelListArray for label

//         var indexOfLabel = labelListArray.indexOf(fieldLabel);

//         await logout(functionName + ': indexOfLabel: ' + indexOfLabel);

//         // get labelValue for that labelName

//         //var idValueArray;

//         var idValue = idListArray[indexOfLabel];

//         await logout('idValue: ' + JSON.stringify(idValue));

//         await logout('typeof idValue: ' + typeof idValue);

//         //await logout(functionName + ': idValueArray: ' + idValueArray);

//         // get indexof our label

//         var idCountArray = [];

//         if(clientNumber == 1){

//             idCountArray[0] = idValue[0];

//         }else{

//             idCountArray[0] = idValue[1];

//         }

//         var domCount;

//         if(clientNumber ==1){

//             domCount = 0;

//         }else{

//             domCount = clientNumber-1;

//         }

//         idCountArray[1] = domCount;

//         await logout(functionName + ': idCountArray: ' + JSON.stringify(idCountArray));

//         // return the id, and the count

//         return idCountArray;

//     }

//     // new function (190722) for quote personalDetails text fields... using id for both primary and dependent clients

//     this.enterTextfieldById = async function (fieldLabel, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterTextfieldById()';

//         var testName = 'Input textbox ' + fieldLabel;

//         var testValue = textValue;

//         // get id from label

//         var fieldIdAndCountArray = await this.getFieldIdAndCount(fieldLabel);

//         var fieldId = fieldIdAndCountArray[0];

//         var domCount = fieldIdAndCountArray[1];

//         await logout(functionName + 'id: ' + fieldId);

//         await logout(functionName + 'domCount: ' + domCount);

  

//         //var preCheckElem = element.all(by.cssContainingText('label',fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckElem = $$('#' + fieldId).get(domCount).element(by.xpath('..')).$('input[type="text"]');

//         // var preCheckElem = element.all(by.cssContainingText('label', fieldLabel)).get(domCount).element(by.xpath('..')).$('input[type="text"]');

//         var preCheckType = 'clickable'

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.clear();

//             await actElem.sendKeys(testValue);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//           await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     // multi client radio locator

//     this.selectRadioById = async function (fieldLabel, optionValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'selectRadioById()';

//         var testName = 'Radio button - Select ' + fieldLabel;

//         var testValue = optionValue;

//         // get id from label

//         var fieldIdAndCountArray = await this.getFieldIdAndCount(fieldLabel);

//         var fieldId = fieldIdAndCountArray[0];

//         var domCount = fieldIdAndCountArray[1];

//         // await logout(functionName + 'id: ' + fieldId);

//         // await logout(functionName + 'domCount: ' + domCount);

//         // var idCount = 1;

//         // if(domCount>0){

//         //     idCount = await $$('input[id="' + fieldId + '"][value="' + optionValue + '"]').count();

//         // }

//        // await logout(functionName + ': idCount(' + fieldId + ')' + await idCount);

//         // await logout(functionName + '... optionValue: ' + optionValue);

//         var preCheckElem ;

//         if(domCount>0){

//             preCheckElem = $$('input[id="' + fieldId + '"][value="' + optionValue + '"]').get(domCount).element(by.xpath('..')).$('div'); // need to click on the div, silly huh.

//         }else{

//             preCheckElem = $('input[id="' + fieldId + '"][value="' + optionValue + '"]').element(by.xpath('..')).$('div');

//         }

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//            await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//            await this.postCheck(actElem, preCheckType, functionName, testName);

//            // NULL reporting handler

//             if (optionValue != '') {

//                 await actElem.click();

//             } else {

//                 optionValue = 'NULL';

//             }

//             //await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await logout(functionName + ': ' + e);

   

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     // refactor for each field type, wont be used for client details any longe, using by Id instead due to dependent client causing complexity of html code

//     this.enterInputFieldTextByLabel = async function (fieldLabel, textValue, domCount) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterInputFieldTextByLabel()';

//         var testName = 'Input textbox ' + fieldLabel;

//         var testValue = textValue;

//         // var prefixElem;

//         // var clientNumber = clientNumber | 1;

//         // get the client number and assign prefixElem based on whether its the primary client, or one of the dependent clients

//         //var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//         // await logout(functionName + ': clientNumber: ' + clientNumber);

//         // await logout(functionName + ': doing the correct function for text entry')

//         // set the prefix elem to locate correct label elems

//        // if(clientNumber == 1){

//             //this is the primary client, and needs this prefix elem

//         //    prefixElem = await $$('child[aria-hidden="false"]').first();

//         //}else{

//             // its a dependent client. however, we need to handle if only 1 dependent client

//             // try{

//           //      prefixElem = await $$('child[class="nds-size_1-of-1 nds-max-small-size_1-of-1 nds-small-size_12-of-12"][aria-hidden="false"]').get(2);

//                 // prefixElem = await $('#depFirstName').element(by.xpath('../../../../..')).$$('child[aria-hidden="false"]').get(1);

//                 // prefixElem = await $$('div[id="Dependent"]').get((clientNumber-2)).element(by.xpath('..'));

//            //    await logout(functionName + ': got prefixElem for client 2+');

//             // }catch(e){

//             //     prefixElem = await $('div[id="Dependent"]').element(by.xpath('..'));

//             // }

//         //}

//         //var preCheckElem = element.all(by.cssContainingText('label',fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

//        var preCheckElem = element.all(by.cssContainingText('label', fieldLabel)).get(domCount).element(by.xpath('..')).$('input[type="text"]');

//         var preCheckType = 'clickable'

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.clear();

//             await actElem.sendKeys(testValue);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     // refactor for each field type

//     this.enterTextByLabelPreDropDown = async function (fieldLabel, textValue) {

//         // this.enterDateTextByLabel = async function(fieldLabel, textValue){

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterTextByLabelPreDropDown()';

//         var testName = 'Input text ' + fieldLabel;

//         var testValue = textValue;

//         // get the client number and assign prefixElem based on whether its the primary client, or one of the dependent clients

//         // var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//         // set the prefix elem to locate correct label elems

//         // if(clientNumber == 1){

//         //     //this is the primary client, and needs this prefix elem

//         //     prefixElem = await $$('child[aria-hidden="false"]').first();

//         // }else{

//         //     // its a dependent client. however, we need to handle if only 1 dependent client

//         //     try{

//         //         prefixElem = await $$('child').get(2).$$('div[id="Dependent"]').get(clientNumber-2);

//         //     }catch(e){

//         //         prefixElem = await $$('child').get(2).$('div[id="Dependent"]');

//         //     }

//         // }

//         //var preCheckElem = element.all(by.cssContainingText('label',fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckElem = element(by.cssContainingText('label', fieldLabel)).element(by.xpath('..')).$('input[type="text"]');

//         var preCheckType = 'clickable'

//         var actElem = preCheckElem;

//         //var calendarShowing = $('h2[id="month"]');

//        //var calendarCheckType = 'present';

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             // await actElem.clear();

//             // await browser.sleep(2000);

//             await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")).perform();

//             // await browser.sleep(2000);

//             await browser.actions().sendKeys(protractor.Key.DELETE).perform();

//             // await browser.sleep(2000);

//             await actElem.sendKeys(testValue);

//             // await browser.sleep(2000);

//             if (fieldLabel == 'Date of birth') { // extra click needed for this field. not ideal solution. TODO.

//                 await actElem.click();

//             }

//             //await this.preCheck(calendarShowing, calendarCheckType, functionName, 'Calendar showing');

//             //await actElem.click(); // to make calendar picker disappear, and to check errors if any (future warning shows immediately)

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     // id used

//     this.enterInputFieldTextById = async function (idValue, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterInputFieldText()';

//         var testName = 'Input textbox ' + idValue;

//         var testValue = textValue;

//         var preCheckElem = $('#' + idValue);

//         var preCheckType = 'clickable'

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.sendKeys(testValue);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

   

 

//     this.enterInputFieldTextByPlaceholder = async function (placeholderValue, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterInputFieldText()';

//         var testName = 'Input textbox ' + placeholderValue;

//         var testValue = textValue;

//         // var preCheckElem = element.all(by.cssContainingText('span',placeholderValue)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckElem = $('input[placeholder="' + placeholderValue + '"]');

//         var preCheckType = 'clickable';

//        var actElem = preCheckElem;

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.sendKeys(testValue);

//             //            await this.postCheck(postCheckElem, postCheckType, functionName, testName);                                   

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.enterInputFieldTextByPlaceholderWithPopup = async function (placeholderValue, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterInputFieldText()';

//         var testName = 'Input textbox ' + placeholderValue;

//         var testValue = textValue;

//         // var preCheckElem = element.all(by.cssContainingText('span',placeholderValue)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckElem = $('input[placeholder="' + placeholderValue + '"]');

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.sendKeys(testValue);

//             await browser.sleep(500);

//             // await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await browser.actions().sendKeys(protractor.Key.TAB).perform();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//            await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.selectValueByRadioButton = async function (fieldName, optionValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'selectValueByRadioButton()';

//        var testName = 'Radio button - Select ' + fieldName;

//         var testValue = optionValue;

//         // get the client number and assign prefixElem based on whether its the primary client, or one of the dependent clients

//         //var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//         // set the prefix elem to locate correct label elems

//        // if(this.do.clients.selectedClient == 1){

//             //this is the primary client, and needs this prefix elem

//             //prefixElem = $$('child[aria-hidden="false"]').first();

//        // }else{

//             // its a dependent client. however, we need to handle if only 1 dependent client

//         //     try{

//         //         prefixElem = $$('child').get(2).$$('div[id="Dependent"]').get(clientNumber-2);

//         //     }catch(e){

//         //         prefixElem = $$('child').get(2).$('div[id="Dependent"]');

//         //    }

//         // }

//         // await logout('prefixElem: ' + JSON.stringify(prefixElem));

//         await logout(functionName + '... optionValue: ' + optionValue);

//         var preCheckElem = element(by.cssContainingText('span', fieldName));

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem.element(by.xpath('../..')).$('input[value="' + optionValue + '"]').element(by.xpath('..')).$('div');

//         var postCheckElem = preCheckElem;

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//            // await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             if (optionValue != '') {

//                 await actElem.click();

//             } else {

//                 optionValue = 'NULL';

//             }

//             //await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.navigationStepClick = async function (stepCounter, titleName) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'buttonClick()';

//         var testName = 'Click step ' + (stepCounter);

//         var testValue = '';

//         var preCheckElem = $('section [class="nds-page-header"]').$$('li').get(stepCounter - 1).$('button');

//         // var preCheckElem = element(by.cssContainingText('div',stepName)).element(by.xpath('../..'));

//         var preCheckType = 'clickable';

//        var actElem = preCheckElem;

//         //Post checking on label - for navigating to new pages or searches ******* modify this as per what is avaialble on next screen*******

//         //var postCheckElem = element.all(by.cssContainingText('span',labelName)).first()//.element(by.xpath('../..')).$('input[type="text"]');

//         var postCheckElem = element(by.cssContainingText('h1', titleName));

//         //element(by.cssContainingText('label',labelName));

//         var postCheckType = 'present'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.buttonClick = async function (buttonName, labelName) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'buttonClick()';

//         var testName = 'Click ' + buttonName;

//         var testValue = labelName;

//         var preCheckElem = element(by.cssContainingText('button', buttonName));

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         //Post checking on label - for navigating to new pages or searches ******* modify this as per what is avaialble on next screen*******

//         //var postCheckElem = element.all(by.cssContainingText('span',labelName)).first()//.element(by.xpath('../..')).$('input[type="text"]');

//         var postCheckElem = element(by.cssContainingText('h1', labelName));

//         //element(by.cssContainingText('label',labelName));

//         var postCheckType = 'present'; //visible, clickable /// clickable seems to run away on us. present seems to get hidden by panels. probably need to handle the errors and panels

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await this.nfrStart('nfr4');

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.nfrStop('nfr4');

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.buttonClickById = async function (buttonId, labelName) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'buttonClick()';

//         var testName = 'Click ' + buttonId;

//         var testValue = labelName;

//         var preCheckElem = $('#' + buttonId);

//         // var preCheckElem = element(by.cssContainingText('button',buttonName));

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem;

//         //Post checking on label - for navigating to new pages or searches ******* modify this as per what is avaialble on next screen*******

//         //var postCheckElem = element.all(by.cssContainingText('span',labelName)).first()//.element(by.xpath('../..')).$('input[type="text"]');

//         var postCheckElem = element(by.cssContainingText('h1', labelName));

//         //element(by.cssContainingText('label',labelName));

//         var postCheckType = 'present'; //visible, clickable /// clickable seems to run away on us. present seems to get hidden by panels. probably need to handle the errors and panels

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.buttonClickError = async function (buttonName, labelName) { //identical to buttonClick() except looks for labelName as h2, which is what the Error popup is

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'buttonClick()';

//         var testName = 'Click ' + buttonName;

//         var testValue = '';

//         var preCheckElem = element(by.cssContainingText('button', buttonName));

//         var preCheckType = 'clickable'

//         var actElem = preCheckElem

//         //Post checking on label - for navigating to new pages or searches ******* modify this as per what is avaialble on next screen*******

//         //var postCheckElem = element.all(by.cssContainingText('span',labelName)).first()//.element(by.xpath('../..')).$('input[type="text"]');

//         var postCheckElem = element(by.cssContainingText('h2', labelName));

//         //element(by.cssContainingText('label',labelName));

//         var postCheckType = 'present'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.selectValueMultipleDropdown = async function (fieldLabel, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'selectValueMultipleDropdown()';

//         var testName = 'Select a single value from multi drop down ' + fieldLabel;

//         var testValue = textValue;

//         var preCheckElem = element.all(by.cssContainingText('span[class="FieldLayout---field_label', fieldLabel)).first().element(by.xpath('../..')).$('.MultipleDropdownWidget---dropdown_value');

//         var preCheckType = 'clickable'

//        var actElem = preCheckElem;

//         var itemElem = $$('.TetherComponent---sailcontents').last().element(by.cssContainingText('li[role="option"]', textValue));

//         var postCheckElem = preCheckElem

//         var postCheckType = 'not null'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await browser.sleep(500);

//             await itemElem.click();

//             await browser.actions().sendKeys(protractor.Key.TAB).perform();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     // refactor for each field type

//     this.selectSingleDropdownValue = async function (fieldLabel, textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterSingleDropdownValue()';

//         var testName = 'Select value from drop down ' + fieldLabel;

//         var testValue = textValue;

//         var preCheckElem = element.all(by.cssContainingText('label', fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckType = 'clickable'

//         var actElem = ''; // drop down

//         var postCheckElem = preCheckElem

//        var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.sendKeys(testValue);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     // refactor for each field type

//     this.searchBuilderInput = async function (fieldLabel, searchValue) {

//         var multiDropDownLabels = ['Sponsor', 'Product Type', 'Status', 'Event Type'];

//         var singleDropDownLabels = ["Event Date"];

//         var inputFields = ["Policy Number", "Insured First Name", "Insured Surname", "RM Number", "Event Number"];

//         if (multiDropDownLabels.includes(fieldLabel)) {

//             await logout('You are dealing with a multi drop down field');

//         }

//         if (singleDropDownLabels.includes(fieldLabel)) {

//             await logout('You are dealing with a multi drop down field');

//         }

//         if (inputFields.includes(fieldLabel)) {

//             if (searchValue == '__rnd') {

//                 var numberString = '01234567890';

//                 var twoRandomNumbers = '' + Math.floor(Math.random() * numberString.length) + Math.floor(Math.random() * numberString.length);

//                 searchValue = twoRandomNumbers;

//             } else {

//                 switch (typeof searchValue) {

//                     case 'string':

//                         searchValue = searchValue;

//                         break;

//                     default:

//                     //nothing

//                 }

//             }

//         }

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'searchBuilder()';

//         var testName = 'Enter search criteria';

//         var testValue = fieldLabel + ' = ' + searchValue;

//         var preCheckElem = $('a[title="Last page"]');

//         var preCheckType = 'clickable'

//         var actElem = element.all(by.cssContainingText('label', fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var postCheckElem = preCheckElem

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//            await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.sendKeys(searchValue);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.searchEvents = async function () {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'searchEvents()';

//         var testName = 'Submit event search';

//         var testValue = '';

//         var preCheckElem = $('a[title="Last page"]');

//         var preCheckType = 'clickable'

//         var postCheckElem = preCheckElem

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             // await logout('about to hit enter');

//             // await browser.sleep(5000);

//             await browser.actions().sendKeys(protractor.Key.ENTER).perform();// hit enter

//             // await logout('search done');

//             // await browser.sleep(5000);

//             try {

//                 await browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.cssContainingText('td', 'No policy events found'))), 1000);

//                 await logout('WARNING: No policy events found');

//                 return false;

//             } catch (e) {

//                 await logout('GOOD: RESULTS FOUND');

//                 await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//                 await this.passResult(functionName, testName, testValue);

//                 return true;

//             }

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.openEventFromSearch = async function (selectionChoice) {

//         var actElem;

//         if (selectionChoice == '__rnd') {

//             //count results

//            var resultRows = $('table').$('tbody').$$('tr').count();

//             await logout('count     : ' + await resultRows);

//             for (y = 0; y < 1; y++) {

//                 var rowToSelect = Math.floor(Math.random() * await resultRows);

//                 await logout('select row: ' + await rowToSelect);

//             }

//             actElem = $('table').$('tbody').$$('tr').get(rowToSelect).$$('td').first().$('a');

//             await logout('policy number: ' + await actElem.getText());

//             await browser.sleep(10000);

//         }

//         if (selectionChoice == '__first') {

//             actElem = $('table').$('tbody').$$('tr').first().$$('td').first().$('a');

//         }

//         await logout(appnID + 'openEventFromSearch(): ')

//         await logout('Going to click this one: ' + await actElem.getText());

//         //await browser.sleep(5000);

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'openEventFromSearch()';

//         var testName = 'Click Event Policy Number';

//         var testValue = actElem.getText();

//         var preCheckElem = $('img[alt="Logo"]');

//         var preCheckType = 'clickable';

//         var postCheckElem = element.all(by.cssContainingText('p', await testValue)).first();

//         // var postCheckElem = element(by.cssContainingText('button','Edit Event'));

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             // Set browser handle for returning focus later

//             var currentPage = browser.driver.getWindowHandle();

//             await logout('current handle: ' + await currentPage);

//             await logout('current url   : ' + await browser.getCurrentUrl());

//             this.do.meta.windowHandles.sfQuote.eventPage = await currentPage;

//             await browser.sleep(3000);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.createEvent = async function () {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'createEvent()';

//         var testName = 'Click Create Event Button';

//         var testValue = '';

//         var preCheckElem = $('img[alt="Logo"]');

//         var preCheckType = 'clickable'

//         var actElem = element(by.cssContainingText('div', 'CREATE EVENT'));

//         var postCheckElem = element(by.cssContainingText('button', 'CREATE EVENT'));

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.enterPolicyAndSearch = async function (textValue) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterPolicyAndSearch()';

//         var testName = 'Enter policy number and click search';

//         var testValue = textValue;

//         var preCheckElem = element(by.cssContainingText('button', 'Search'));

//         var preCheckType = 'present'

//         var actElemInput = element(by.cssContainingText('label', 'Policy Number')).element(by.xpath('../..')).$('input[type="text"]');

//         var actElemSearch = preCheckElem;

//         var postCheckElem = element(by.cssContainingText('button', 'CREATE EVENT'));

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElemInput.sendKeys(textValue);

//             await actElemSearch.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

  

//     this.specifyCommission = async function(){

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'specifyCommission()';

//         var testValue = this.do.quote.specifyCommission;

//         var testName = 'Enter commission ' + testValue;

//         var preCheckElem = element(by.cssContainingText('span', 'Do you want to configure commission option?'));

//         var preCheckType = 'present';

//         var actElemInput = preCheckElem.element(by.xpath('../..')).$('input[id="CommissionConfig"][value="' +  testValue + '"]').element(by.xpath('..')).$('div');

//         var actElem = actElemInput;

//         var postCheckElem = $('#configureProducts').element(by.cssContainingText('button', 'Next'));

//         var postCheckType = 'clickable'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             await postCheckElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.selectCommission = async function(){

//         //RR pseudo code tips

//         // what we know:

//         //  - anz@work value is either true/false

//         //  - select commission is either yes/no

//         //  - commission amount

//         // So, here are our tests

//         // 1. if anz@work == true, then commission options can only be Standard, and all others are visible but not clickable/selectable

//         // 2. if anz@work == false, then all commission options are available and selectable

//         // so, treat this function ask a valid path one

//         // it should:

//         // select the value in the DO

//         // the test decides the path, so you dont need to put in logic to prevent rules from being broken as you may like to attempt to break them as part of the test

//         // maintain the default if anz@work is true, so do nothing

//         // therefore, your code could be this:

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'selectCommission()';

//         var testValue = this.do.quote.commissionOption || 'Standard'; // this means that if a value is not selected, then standard is chosen by default

      

//         var testName = 'Select comission option ' + testValue;

 

//         var preCheckElem = element.all(by.cssContainingText('span', 'Please select a Commission Option')).first();

//         var preCheckType = 'present';

//         var actElemInput = preCheckElem.element(by.xpath('../..')).$('input[id="CommisionOptions"][value="' +  testValue + '"]').element(by.xpath('..')).$('div');

//         var actElem = actElemInput;

//         var postCheckElem = $('#CommissionConfiguration_nextBtn').element(by.cssContainingText('button', 'Next')); // are you sure the generic function for button click doesn't work here, because it will check a value on the next page.

//         var postCheckType = 'clickable'; //visible, clickable

      

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.click();

//             //Click on Next

//             await postCheckElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

                 

//             } catch (e) {

//                 await this.failResult(functionName, testName, testValue, e);

//                 return false;

//         }

//     }

//     this.unitTest_commission = async function(unitTestName){

//         await logout('SFQPO: unitTest_commission(): ... ');

//         var functionName = appnID + 'unitTest_commission()';

//         var testName = 'Check that the commission feature is displaying correctly for the role: IA/IFA/Sys';

//         // ### BOILERPLATE FUNCTION CODE ###

//     //   var functionName = appnID + 'specifyCommission()';

//     //   var testValue = 'Yes';

//     //   var testName = 'Enter commission ' + testValue;

//     //   var preCheckElem = element(by.cssContainingText('span', 'Do you want to configure commission option?'));

//     //   var preCheckType = 'present';

//     //   var actElemInput = preCheckElem.element(by.xpath('../..')).$('input[id="CommissionConfig"][value="' +  testValue + '"]').element(by.xpath('..')).$('div');

//     //   var actElem = actElemInput;

//     //   var postCheckElem = $('#configureProducts').element(by.cssContainingText('button', 'Next'));

//     //   var postCheckType = 'clickable'; //visible, clickable

//       try {

//         //If ANZ@Work = NotApplicable/No/NULL in the role as an sysadmin & IA

//         if((this.do.quote.specifyCommission == 'NotApplicable'

//             || this.do.quote.specifyCommission == 'No'

//             || this.do.quote.specifyCommission == 'NULL')

//             && this.do.quote.commissionOption == 'DoesNotShow'){

          

//             //Click Next button - BAU that doesn't show any pages or elements about commission

//             await preCheckElem.element(by.cssContainingText('button', 'Next')).click();

//         }else { //If ANZ@Work = Yes in the role as a IFA then they can see commissions

//             //From the 'Select Product / Select product' page, call the function that clicks the commission = Yes

//             await this.specifyCommission();

//             //[NOT NEEDED - included in specifyCommission()] -

//             //Click on the next button on the page to reach the next page of 'Commission Configuration / Select Commission' page

//             //Call the function that clicks on the commission options

//            await this.selectCommission();

//             //[NOT NEEDED - included in selectCommission()] -

//             //click on the next button on the page to reach the 'Product Configuration \ Product Configuration' page

//         }

 

 

 

 

 

//           // no preChecks needed, start of test

//           await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//           await actElem.click();

//           await postCheckElem.click();

//           await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//           await this.passResult(functionName, testName, testValue);

//           return true;

//       } catch (e) {

//           await this.failResult(functionName, testName, testValue, e);

//           return false;

//       }

 

 

 

 

 

 

 

 

 

 

//     }

 

 

 

 

 

 

//     this.openPDFinTab = async function () {

//         //open outgoing docs folder

//         logout('doing openPDFinTab')

//         var outgoingCorres = element(by.cssContainingText('a[target="fProcess"]', 'Outgoing Correspondence'));

//         if (await checkEle(outgoingCorres, 'Outgoing Corres link')) {

//             await isLoaded(outgoingCorres);

//             await logout('outgoingCorres is ' + await outgoingCorres.getText());

//             outgoingCorres.click();

//             //open pdf

//             //await $('a[target="fProcess"][title*="Fulfilment Pack"]').click();

//             var pdfLink = $('a[target="fProcess"][title*="AURA PDF"]');

//             if (await checkEle(pdfLink, 'PDF link')) {

//                 await isLoaded(pdfLink);

//                 await logout('pdfLink is ' + await pdfLink.getText());

//                 pdfLink.click();

//                 await logout('done pdf link open... did it show?');

//             }

//         }

//         await sleep(20000, 'End openPDFinTab');

//     }

//     // note: not used

//     this.openPDFDoc = async function (targetDoc) {

//         //logout('test');

//         //browser.sleep(2000);

//         //await logout('browser.driver.getWindowHandle() is ' + browser.driver.getWindowHandle() );

//         // switchTo iframe

//         // browser.driver.switchTo().frame('appianMainPage').then(function(){   

//         // browser.sleep(1000);

//         // });

//         // goto Application Folder portlet

//         //var portlet = element(by.cssContainingText('.portletHeader','Application Folder')).element(by.xpath('..')).$('.portletBody');

//         // var pdfLink = element(by.cssContainingText('a[target="fProcess"]','AURA PDF for UnderWriting'));

//         var appnText = this.do.livedata.appnText;

//         await logout('appnText is ' + appnText);

//         // ####################

//         await process.exit();

//         // ####################

//         var pdfLink = $('a[title="' + appnText + '/AURA PDF for UnderWriting.pdf"]');

//         await checkEle(pdfLink, 'pdfLink');

//         await logout('pdf is ' + await pdfLink.getText());

//         if (currentClientNumber == 1) {

//             var domClientNo = (currentClientNumber - 1) * 2;

//         } else {

//             var domClientNo = currentClientNumber;

//         }

//         return domClientNo;

//     }

//     this.sf_clickSaveClientDetails = async function (FirstName, LastName) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'sf_clickSaveClientDetails()';

//         var testName = 'Save Client Details ' + fieldLabel;

//         var testValue = textValue;

//         //var preCheckElem = element.all(by.cssContainingText('label',fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckElem = element(by.cssContainingText('button', 'Save'));

//         var preCheckType = 'clickable'

//         var actElem = preCheckElem;

//         var postCheckElem = element(by.cssContainingText('span', 'Name: ' + FirstName + ' ' + LastName));

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             actElem.click();

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     // refactor for each field type

//     this.enterInputFieldTextByLabel = async function (fieldLabel, textValue) {

//        // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'enterInputFieldText()';

//         var testName = 'Input textbox ' + fieldLabel;

//         var testValue = textValue;

//         //var preCheckElem = element.all(by.cssContainingText('label',fieldLabel)).first().element(by.xpath('../..')).$('input[type="text"]');

//         var preCheckElem = element(by.cssContainingText('label', fieldLabel)).element(by.xpath('..')).$('input[type="text"]');

//         var preCheckType = 'clickable'

//         var actElem = preCheckElem;

//         var postCheckElem = preCheckElem

//         var postCheckType = 'visible'; //visible, clickable

//         try {

//             // no preChecks needed, start of test

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await actElem.clear();

//             await actElem.sendKeys(testValue);

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//            await this.passResult(functionName, testName, testValue);

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.verifyFileInDownloadsFolder = async function (fileName) {

//         await logout('Getting users download path ' + downloadsFolder());

//         var filePath = (downloadsFolder() + '\\' + fileName).replace(/\\/g, '/');

//         await logout('Getting the path ' + filePath);

//         // store filepath for future opening

//       this.do.livedata.pdfUnderwriting = filePath;

//         await browser.wait(async () => fse.existsSync(filePath), this.DEFAULT_WAIT_TIME_SECONDS * 10000, 'File never appeared!');

//         await expect(fse.existsSync(filePath)).toBe(true, 'Failed to download file: ' + fileName + ' in user directory' + filePath);

//         await logout('File download was successful');

//         // now open the file to tab

//         return 0;

//     }

//     // main pdf text capture function

//     this.openPdfFromPath = async function () {

//         //pdfContent = '';

//         var fileName = this.do.livedata.pdfUnderwriting;

//         var encodedFileName = encodeURI(fileName);

//         await logout('fileName is ' + fileName);

//         await logout('Encoded is ' + encodedFileName);

//         //browser.waitForAngularEnabled(false);

//         browser.executeScript('window.open();')

//         await sleep(1000, 'opening window for pdf'); //if too short pause then error 'failed unknown error: 'name' must be a string

//         await logout('opened new window tab');

//         var handles = await browser.getAllWindowHandles();

//         await logout('handles are ' + handles);

//         var secondWindow = await handles[1];

//         await logout('secondWindow is ' + secondWindow);

//         await browser.switchTo().window(secondWindow);

//         await logout('opening pdf in new window');

//         await browser.get(encodedFileName);

//         // var firstWindow = handles[0];

//         // await browser.switchTo().window(firstWindow);

//        // so we got the pdf to the tab

//         // but cannot access the content becuase need to use library to gather that

//         //this.do.livedata.pdfContent = 'testValue';

//         //await logout('pdf content is '+ this.do.livedata.pdfContent);

//         // var pdfreader = require('pdfreader');

//         var rows = {}; // indexed by y-position

//         //var rowArray=[];

//         try {

//             await new pdfreader.PdfReader().parseFileItems(fileName, async function (

//                 err,

//                 item

//             ) {

//                 if (!item || item.page) {

//                     // end of file, or page

//                     Object.keys(rows) // => array of y-positions (type: float)

//                         .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions

//                         .forEach(y => logoutStore((rows[y] || []).join("")));

//                     //.forEach(y => console.log((rows[y] || []).join("")), rowArray.push(rows[y] || []).join(""));

//                     //if(item.page){console.log("PAGE:", item.page);} // fails when no item.page... also fails the async design, 2 errors

//                     rows = {}; // clear rows for next page

//                     //this.do.livedata.pdfContent = rowArray;

//                 } else if (item.text) {

//                     // accumulate text items into rows object, per line

//                     (rows[item.y] = rows[item.y] || []).push(item.text);

//                 }

//             });

//         } catch (err) {

//             await logout(err);

//         }

//         await sleep(1000, 'waiting for pdf content to be captured')

//         await logout('end pdfContent is ' + pdfContent);

//         this.do.pdfContent.fullText = pdfContent;

//         //await sleep(5000, 'end of pdf thing');

//         //now process pdfContent line by line, checking for particular labels and values

//         return 0;

//     }

//     // perform checks on pdf content

//     this.pdfContentChecks = async function () {

//         var pdfContent = this.do.pdfContent.fullText;

//         var pdfContentArray = pdfContent.split('||');

//         var pdfLine;

//         for (x = 0; x < pdfContentArray.length; x++) {

//             pdfLine = pdfContentArray[x];

//             await logout('Line ' + x + ': ' + pdfContentArray[x])

//         }

//         //logout('Miss Erika Turner  Preferred Life was found in line ' + pdfContentArray.indexOf("Miss Erika Turner  Preferred Life"))

//         //pdfContentArray.filter(x => x.includes("Miss Erika Turner  Preferred Life"));

//         var lineMatch = pdfContentArray.findIndex(element => element.includes("Miss Erika Turner  Preferred Life"));

//         await logout('line matching Miss Erika Turner  Preferred Life is: ' + lineMatch);

//         textToSearch = 'BMI:';

//         lineMatch = pdfContentArray.findIndex(element => element.includes(textToSearch));

//         await logout('line matching ' + textToSearch + ' is: ' + lineMatch);

//         textToSearch = '1. ';

//         lineMatch = pdfContentArray.findIndex(element => element.includes(textToSearch));

//         await logout('line matching ' + textToSearch + ' is: ' + lineMatch);

//         textToSearch = '15. ';

//         lineMatch = pdfContentArray.findIndex(element => element.includes(textToSearch));

//        await logout('line matching ' + textToSearch + ' is: ' + lineMatch);

//         await logout('');

//         await logout('this.do.pdfContent.checks.searchStrings is ' + this.do.pdfContent.checks.searchStrings);

//         await logout('this.do.pdfContent.checks.expectedLine is ' + this.do.pdfContent.checks.expectedLine);

//         await logout('this.do.pdfContent.checks.strategy is ' + this.do.pdfContent.checks.strategy);

//         await logout('this.do.pdfContent.checks.variable is ' + this.do.pdfContent.checks.variable);

//         await logout('this.do.pdfContent.checks.type is ' + this.do.pdfContent.checks.type);

//         await logout('this.do.pdfContent.checks.comparisonDO is ' + this.do.pdfContent.checks.comparisonDO);

//         // next is to do some comparisons

//         // store values

//         // get vals from sheet to compare

//         // go and implement excel storage solution now

//         // set up timestamp folder for test run

//     }

//     // not used, not working

//     function searchAppnTableGetRows(columnName, searchText) {

//         // loads a bunch of stuff and code runs much faster than pay loading, and errors with stale element error.

//         // TODO: next try EC. functions to check presence, or move on after x seconds

//         browser.sleep(500);

//         var headingArray = [];

//         var colNum = -1;

//         var rowArray = [];

//         // wait for page load

//         logout('checking for last element');

//         //var waitForLastPageElement = element(by.id('footer'));

//         // var waitForLastPageElement = $('.dLinksChan');

//         //var waitForLastPageElement = $('.dLinksChan');

//         var waitForLastPageElement = element(by.tagName('tbody'));

//         waitForLastPageElement.isPresent().then(function () {

//             logout('Table fully loaded');

//         });

//         // get table contents and header, and columns

//         var tableElement = $('.asiGrid.server');

//         tableElement.isPresent().then(function () {

//             logout('Application table is showing');

//             // cycle through rows of table header to get column number to check

//             tableElement.$('thead').$$('tr').each(function (tableRow, index) {

//                 tableRow.$$('th').each(function (th, index) {

//                     //logout('th ' + index);

//                     th.getText().then(function (tdText) {

//                         //logout('Column is ' + tdText);

//                         headingArray.push(tdText.trim());

//                         //logout('headingArray is now ' + JSON.stringify(headingArray) );

//                         //logout('length is ' + headingArray.length);

//                     });

//                 });

//             });

//         }).then(function () {

//             //get index of column text

//             logout('headingArray contains ' + JSON.stringify(headingArray));

//             //loop array contents and do an includes because 'Application No' column is not straight text

//             headingArray.forEach(function (eachHeading, index) {

//                 if (eachHeading.includes(columnName)) {

//                     colNum = index;

//                 }

//             });

//             //colNum = headingArray.indexOf(columnName); //old way, required an exact text match, which 'application no' did not have

//             logout(columnName + ' is position ' + colNum);

//             // cycle through rows of tbody, going down the column

//             tableElement.$('tbody').$$('tr').each(function (tableRow, index) {

//                 //logout('index counter of row is ' + index);

//                 var cellCss = tableRow.$$('td').get(colNum);

//                 cellCss.getText().then(function (textValue) {

//                     //logout('textValue is:' + textValue);

//                     if (textValue.trim() == searchText.trim()) {

//                         //logout('match on index ' + index);

//                         rowArray.push(index);

//                     }

//                 }).then(function () {

//                     logout(columnName.trim() + '=' + searchText + ' in rows ' + JSON.stringify(rowArray));

//                     logout('rowArray is ' + rowArray);

//                     return rowArray;

//                 });

//             });

//         });

//         //logout('Returning ' + columnName.trim() + '=' + searchText + ' in rows ' + JSON.stringify(rowArray) );

//         //return rowArray;               

 

 

 

 

//     }

//     // not used

//     this.openPDF = function (docName) {

//         browser.sleep(1000);

//         var appnNumber;

//         var appnListRows = [];

//         var waitForLastPageElement = element(by.tagName('tbody'));

//         waitForLastPageElement.isPresent().then(function () {

//             logout('2nd Table fully loaded');

//             // this line not working so well. searchAppnTableGetRows is not defined

//             // var returnedValue = searchAppnTableGetRows(columnName, searchText);

//             logout('columnName is ' + columnName);

//             logout('searchText is ' + searchText);

//             var returnedValue = searchAppnTableGetRows(columnName, searchText);

//             logout('returnedValue is ' + returnedValue);

//             //.then(function(arrayList){

//             // var appnTd = $('tbody').$$('tr').get(returnedValue).$$('td').first().$('a[href]');

//             var appnTd = $('tbody').$$('tr').get(1).$$('td').first().$('a[href]');

//             appnTd.getText().then(function (appnNo) {

//                 logout('theText is ' + JSON.stringify(theText));

//                 appnTd.click();

//                 appnNumber = appnNo;

//             });

//             logout('appnNumber is ' + appnNumber);

//             //appnListRows = searchAppnTableGetRows(columnName, searchText);  

 

//             //});

//         });

//         browser.sleep(2000);

//     }

//     // adapt this to be generic, pass iterator css eg. table row and go through tds

//     this.searchTableForRow = function (tableCss, tableRowCss, columnCss, fieldNameText, fieldValueToSearch) {

//         let currentElement = fullCss;

//         currentElement.isPresent().then(function () {

//             currentElement.click();

//             //logout(fieldName + ' clicked');

//         });

//         var titleIndex = -1;

//         var titleOptionValue = -1;

//         // Cycle through product values

//         iteratorCss.each(function (item) {

//             // Compare values

//             item.getText().then(function (optionValue) {

//                 titleIndex++;

//                 if (optionValue === optionName) {

//                     // Store titleIndex

//                     titleOptionValue = titleIndex;

//                     logout(optionName + ' is option ' + titleOptionValue);

//                 }

//             });

//         }).then(function () {

//             if (titleOptionValue = -1) { logout('Failed to locate ' + fieldName + ' value of ' + optionName) };

//             $$('.cdk-overlay-pane').last().$('.mat-select-content').$$('[role="option"]').get(titleOptionValue).click();

//         });

//         // got column ref, now check for value

//     }

//     // log function

//     async function logout(logMessage) {

//         console.log(showTime() + logMessage);

//         return 0;

//     }

//     async function logoutStore(logMessage) {

//         //console.log(showTime() + logMessage);

//         pdfContent += logMessage + '||';

//         //await logout(pdfContent);

//         return 0;

//     }

//     this.logout = function (logMessage) {

//         console.log(showTime() + logMessage);

//     }

//     //TODO: these look like GF functions, check and delete these ones

//     // Logging date output formatting

//     function showTime() {

//         date = new Date();

//         //var d = date.getDate();

//         //var m = date.getMonth() + 1; //Month from 0 to 11

//         //var y = date.getFullYear();

//         var H = ('' + 0 + date.getHours()).slice(-2);

//         var M = ('' + 0 + date.getMinutes()).slice(-2);

//         var S = ('' + 0 + date.getSeconds()).slice(-2);

//         return '[' + H + ':' + M + ':' + S + '] INFO - ';

//         //return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

//    }

//     async function sleep(ms, sleepReason) {

//         if (!sleepReason) { sleepReason = '' }

//         await logout('sleeping...' + ms + ' ' + sleepReason);

//         return new Promise(resolve => setTimeout(resolve, ms));

//    }

//     // Getting latest directory

//     function sequence(arr, fn) {

//         // get list of dirs in reverse order newest to oldest - works

//         arr.reverse();

//         return arr.reduce((p, item) => {

//             return p.then(() => {

//                 return fn(item);

//             });

//         }, Promise.resolve());

//     }

//     // Getting latest directory

//     function listDirs(rootDir) {

//         const dirsOfCurrentDir = new Map();

//         return readdirP(rootDir).then(files => {

//             return sequence(files, f => {

//                 let fullPath = path.join(rootDir, f);

//                 return statP(fullPath).then(stats => {

//                     if (stats.isDirectory()) {

//                         dirsOfCurrentDir.set(f, rootDir)

//                     }

//                 });

//           });

//         }).then(() => {

//             //console.log('dirsOfCurrentDir: ' + JSON.stringify(dirsOfCurrentDir));

//             return dirsOfCurrentDir;

//         });

//     }

//     //PASS AND FAIL STRUCTURE

//     // Here we want to store results as we go along.

//     // Jasmine expects don't work well for us, as it is too primitive and ties us into a library, and wont be relied upon.

//     // Instead, we will code our results to our data object and output that to spreadsheet on conclusion of each scenario test

//    //            try{

//     //                            //await logout('OPO: passResult(): about to push to this.do.testResults.elementUse');

//     //                            await this.do.testResults.functionName.push(await functionName);

//     //            }catch(e){

//    //                            await logout('OPO: passResult(): functionName: ERROR: ' + e);

//     //            }

//     //            try{

//     //                            //await logout('OPO: passResult(): about to push to this.do.testResults.elementUse');

//     //                            await this.do.testResults.elementUse.push(await elementUse);

//     //            }catch(e){

//     //                            await logout('OPO: passResult(): elementUse: ERROR: ' + e);

//     //            }

//     //            try{

//     //                            await this.do.testResults.elementResult.push('pass');

//     //            }catch(e){

//     //                            await logout('OPO: passResult(): elementResult: ERROR: ' + e);

//     //            }

//     //            try{

//     //                            await this.do.testResults.elementValue.push(await elementValue);

//     //            }catch(e){

//     //                            await logout('OPO: passResult():elementValue: ERROR: ' + e);

//     //            }

//     //            try{

//     //                            var timeTaken = await this.do.meta.timer.timeTaken;

//     //                            if(await timeTaken > 0){

//     //                                            await this.do.testResults.timeTaken.push(timeTaken);

//     //                            }else{

//     //                                            await this.do.testResults.timeTaken.push('');

//     //                            }

//     //                            // clear out any timeTaken value

//    //                            this.do.meta.timer.timeTaken = 0;

//     //                            this.do.meta.timer.timerStop = 0;

//     //                            this.do.meta.timer.timerStart = 0;

//     //                            this.do.meta.timer.testName = '';

//     //            }catch(e){

//     //                            await logout('OPO: passResult():timeTaken: ERROR: ' + e);

//     //            }

//     //            try{

//     //                            await this.do.testResults.elementError.push('');

//     //            }catch(e){

//     //                            await logout('OPO: passResult(): elementError: ERROR: ' + e);

//     //            }

//     //            //await logout('OPO: passResult(): done with updateing testResults array, now reporting on that');

//     //            await logout('### Result Pass:  Test step: ' + await elementUse + ':  Value: ' + await elementValue + ':    Function: ' + functionName);

//    //            // screen shots could be handled here with a meta value for all/nothing screenshot for pass elements

//     //            // would consume a lot of time

//     //            return 0;

//     // }

//     this.passResult = async function (functionName, testName, testValue) {

//         // variables: elementName,

//         this.do = await this.fn.passResult(functionName, testName, testValue, this.do);

//         return true;

//     }

//     this.failResult = async function (functionName, testName, testValue, err) {

//         // variables: elementName,

//         this.do = await this.fn.failResult(functionName, testName, testValue, err, this.do);

//         return true;

//     }

//     //APPIAN

//     // temp living here until GF is updated for all apps

//     //precheck function to do standard checking of an element prior to doing any interaction with target element

//     this.preCheck = async function (preCheckElem, preCheckType, functionName, testName) {

//         this.do = await this.fn.preCheck(preCheckElem, preCheckType, functionName, testName, this.do);

//         //await logout('SFQPO:preCheck(): after fn.preCheck: DO: ' + JSON.stringify(this.do));

//         return true;

//     }

//     this.postCheck = async function (postCheckElem, postCheckType, functionName, testName) {

//         this.do = await this.fn.postCheck(postCheckElem, postCheckType, functionName, testName, this.do);

//         //await logout('SFQPO:postCheck(): after fn.postCheck: DO: ' + JSON.stringify(this.do));

//         return true;

//     }

//     // get results file, open it, and read in ref and data rows to data object

//     this.setup_appianOpenResultsGetData = async function (resultsFile) {

//         await logout('APO: getting results file data');

//         var objRefData = [];

//         var objTestData = [];

//         var rowTestData = [];

//         var workbook = new Excel.Workbook();

//         var textValue;

//         var ws;

//         var sheetName = 'results';

//         var lastRow;

//         var typeOfData = 'NO TYPE'

//         await logout('GF: workbook name is ' + resultsFile);

//         await logout('GF: sheetName is ' + sheetName);

//         resultsFile = this.do.meta.logDirectory + '/' + resultsFile;

//         // resultsFile = './tests/executionData/' + this.do.meta.logDirectory + '/' + resultsFile;

//         await workbook.xlsx.readFile(resultsFile) //.then(function(){

//         // logout('APO: state of getworksheet exists: ' + typeof workbook.getWorksheet(sheetName));

//         // logout('APO: state of getworksheet no sht: ' + typeof workbook.getWorksheet('donestexist'));

//         if (typeof workbook.getWorksheet(sheetName) == 'object') {

//             ws = workbook.getWorksheet(sheetName);

//             //cell = ws.getCell('A1').value;

//             //logout('GF: cell is '+ cell);

//             lastRow = ws.actualRowCount;

//             for (var r = 2; r < await lastRow + 1; r++) {

//                 //logout('Col A value is ' + ws.getCell('A'+r));

//                 // first column of results file needs to be meta.testCase.testID, or anything with 'testID' in it

//                 if (r == 2) { // row 2 has refData

//                     //await logout('GF: Col A value is ' + await ws.getCell('A'+r));

//                     typeOfData = 'refData';

//                 }

//                 if (r > 2) { //rows after 2 have test case data in them, capture that

//                     typeOfData = 'testData';

//                 }

//                 ws.getRow(r).eachCell({ includeEmpty: true }, async function (cell, colNumber) {

//                     var cellValue = '' + cell.value;

//                     //await logout('Typeof cell.value: ' + typeof cell.value);

//                     //await logout('cellValue.slice(0,1): ' + cellValue.slice(0,1));

//                     if (cellValue.slice(0, 1) != '{') { //dont capture any array values, too large and cumbersome at this point

//                         //await logout('CellValue is not an array: ' + cellValue);

//                         // check if cell null, and set to 'null'

//                         if (cell.value == null) {

//                             //logout(colNumber + ': cell.value is null');

//                             textValue = 'null';

//                         } else {

//                             // if cell has a value check if its an object, undefined, or string

//                             if (typeof cell.value.result != 'undefined' && typeof cell.value == 'object') {

//                                 textValue = cell.value.result;

//                             } else {

//                                 if (typeof cell.value == 'string') {

//                                     textValue = cell.value;

//                                 } else {

//                                     textValue = 'null';

//                                     await logout('GF: ' + colNumber + ': Exceptional Case: set to null')

//                                 }

//                             }

//                         }

//                     } else { // value is an array, so we will not add it to the testDataObj - too long

//                         textValue = '';

//                     }

//                     //push the type of data into correct array

//                     if (typeOfData == 'refData') {

//                         await objRefData.push(textValue);

//                     }

//                     if (typeOfData == 'testData') {

//                         await rowTestData.push(textValue);

//                     }

//                     //            //await logout('GF: row: ' + t + '  col: ' + colNumber + '  value: ' + textValue);

//                 }); // per cell in row iterator

//                 // // simple push of row data into 2d array

//                 objTestData[r - 3] = new Array();

//                 for (var s = 0; s < await rowTestData.length; s++) {

//                     //await logout('rowTestData[' + s + '] is ' + rowTestData[s]);

//                     objTestData[r - 3].push(rowTestData[s]);

//                 }

//                 // // set row array to null for reuse

//                 rowTestData = [];

//                 //await logout('objRefData is ' + await objRefData);

//             }

//         } else {

//             await logout('APO: ERROR: NO sheet exists: ' + sheetName);

//             return "ERROR NO SHEET";

//         }

//         // await logout('GF: objRefData length is ' + objRefData.length);

//         this.do.excelData.objRef = objRefData;

//         this.do.excelData.testData = objTestData;

//         return true;

//     }

//     // get results file, given logDir is already achieved

//     this.setup_appianGetResultsFile = async function (logDirectory) {

//         //var xlsxFile='nofileyet';

//         await logout('APO: results Dir : ' + logDirectory);

//         // var fullDir = './tests/executionData/' + logDirectory;

//         // var fullDir = './tests/executionData/' + logDirectory;

//         // CYCLE through files in dir until you get .xlsx

//         fse.readdirSync(logDirectory).forEach(file => {

//             if (file.slice(0, 2) != '--$' && path.extname(file) == '.xlsx') {

//                 // if(file.slice(0,2)!='~$' && path.extname(file) == '.xlsx'){

//                 logout('APO: MATCH!! File we want : ' + file)

//                 //xlsxFile = file;

//                 this.do.excelData.fileNamePath = file;

//             }

//         });

//         //await logout('APO: xlsx file: ' + xlsxFile);

//         return true;

//     }

//     //post check of appian, after sale

//     this.setup_appianGetLatestResultsFolder = async function (dataString, meta) { //copy modify of setup()

//         await logout('APO: setup latest folder: dataString1: ' + dataString);

//         //check if any file suffix exists, and remove it

//         if (dataString.indexOf('.') != -1) {

//             dataString = dataString.slice(0, dataString.indexOf("."));

//         }

//         dataString = dataString.replace(/\//g, '_');

//         await logout('APO: setup latest folder: dataString2: ' + dataString);

//         var matchValue;

//         await logout('PO: setup async ==> 5.4 USING APPIAN ES8.JS - test & data files');

//         // get latest execution folder for data file we want

//         var root = path.join(meta.filePathRoot, 'tests/executionData/');

//         await logout('APO: setup latest folder: root: ' + root);

//         await listDirs(root).then(m => {

//             // m.reverse();

//             // logout('GF: m type: ' + typeof m);

//             logout('APO: m : ' + JSON.stringify(m));

//             var logDir;

//             for (let [f, dir] of m) {

//                 logout('APO: File to check: ' + f);

//                 // matching logic

//                 itemArray = f.split('--');

//                 var comparisonString

//                 if (itemArray[1].indexOf(".") > -1) {

//                     comparisonString = itemArray[1].slice(0, itemArray[1].indexOf("."));

//                 } else {

//                     comparisonString = itemArray[1];

//                 }

//                 logout('APO: looking to match dataString:' + dataString + ' with ' + comparisonString);

//                 // logout('GF: comparisonString: ' + comparisonString);

//                 // logout('GF: comparisonString type: ' + typeof comparisonString);

//                 // logout('GF: comparisonString: ' + comparisonString);

//                 if (comparisonString == dataString) {

//                     logout('APO: MATCH! file we want is ' + f);

//                     logout('APO: about to return previousDirectory: ' + f);

//                     this.do.meta.logDirectory = root + f;

//                     break;

//                 }

//             }

//         });

//         // this.do.meta.logDirectory = f;

//         // await logout('APO: latest dir: ' + await this.do.meta.logDirectory);

//         this.do.excelData.iteration = -1; //beforeEach will increment this by 1 prior to running test.

//         // update DO with CLi values, if any

//         this.do = await this.fn.updateDO_CLI(this.do, this.browserParams);

//         return true;

//     }

//     // TODO: moved to gF, check and delete this one. ARI will still rely on it, so fix ARI.

//     // Origin and Ari setup

//     this.setup = async function () { //setup() is called, copy above for appian

//         logout('AOP: setup async ==> 5.8 USING appian opl');

//        // create logDir for execution run (spec level), and store to logDirectory in DO

//         this.do.meta.logDirectory = await this.fn.setupTestAssetFolder(this.do.test, this.do.data);

//         this.do.excelData.iteration = -1; //beforeEach will increment this by 1 prior to running test.

//         // update DO with CLi values, if any

//         this.do = await this.fn.updateDO_CLI(this.do, this.browserParams);

//         // if mode is excel then this is the initial load of all data, then copy excel template, and copy in values for objref, and testdata

//         if (this.do.data != null) { //checks if we have a data file ie. xlsx

//             this.do.excelData.usingExcel = true;

//             // update mode to dataLoaded so the above excel stuff is not rerun.

//             this.do.meta.mode = 'dataLoaded';

//             await logout('PO: Setting up for Excel');

//             // copyExcelTemplate

//             //await logout('PO: Excel - copying template')

//             //await logout('******** this.do.meta.xlsxTemplate.filePathName is ' + this.do.meta.xlsxTemplate.filePathName);

//             // this.do.meta.xlsxTemplate.filePathName = './tests/e2e/' + this.do.data;

//             // this.do.excelData.filePathName = await this.fn.copyFileFromTo(this.do.meta.xlsxTemplate.filePathName,this.do.meta.logDirectory);

//             // await logout('PO: filePathName is ' + this.do.excelData.filePathName);

//             // getExcelRefObj

//             await logout('PO: Excel - getting Ref Obj Data');

//             this.do.excelData.objRef = await this.fn.excelGet_objRefData(this.do.excelData.filePathName, this.do.excelData.sheetName);

//             await logout('PO: Excel - objRefData is ' + await this.do.excelData.objRef);

//             // getExcelTestData

//             await logout('PO: Excel - getting TEST Data');

//             this.do.excelData = await this.fn.excelGet_testData(this.do.excelData);

//             await logout('PO: Excel - TEST data is ' + await JSON.stringify(this.do.excelData.testData));

//             // add sheet for output

//             await logout('PO: Excel - adding output sheet');

//             await this.fn.excelAddResultsSheet(this.do.excelData);

//             await logout('PO: Added results sheet');

//             // await this.fn.excelWriteResults_test(this.do.excelData);

//             // await logout('PO: UPDATED results sheet');

//         } else {

//             this.do.excelData.usingExcel = false;

//         }

//         return true;

//     }

//     // TODO: should be moved to GF. check, and delete this one.

//     this.setupTestAssetFolder = async function () { //THIS WAS moved to GF?

//         // current dir when run is /protractor/, so create in ./tests/log/datestamp

//         // get relative dir for storing temp folders with timestamps for assets

//         // make directory

//         var nowDate = new Date();

//         var nowTimestamp = '' + nowDate.getFullYear() + ('0' + nowDate.getMonth() + 1).slice(-2) + ('0' + nowDate.getDate()).slice(-2) + '_' + ('0' + nowDate.getHours()).slice(-2) + ('0' + nowDate.getMinutes()).slice(-2) + ('0' + nowDate.getSeconds()).slice(-2);

//         var makeDir = './tests/executionData/' + nowTimestamp;

//         //await logout('mk dir is ' + makeDir);

//         await fse.mkdirSync(makeDir);

//         // set dir in DO

//         this.do.meta.logDirectory = makeDir;

//         await logout('this.do.meta.logDirectory is ' + this.do.meta.logDirectory);

//     }

//     // check the origin version of this, its way better. Since its a generic function, needs to go in functions. js

//     // TODO: this should already be in gf. check and delete this one.

//     this.copyExcelInputWorkbook = async function (src, dest) {

//         try {

//             await fse.copy(src, dest, { overwrite: false, errorOnExist: true });

//             return true;

//         } catch (error) {

//             if (error.message.includes('already exists')) {

//                 return false;

//             }

//             throw error;

//         }

//     }

//     // this gets run per beforeEach to take the next set of data from DO, and populate DO vars

//     this.getExecutionData = async function () { //appian

//         // run through testData. last item pushed as 'rowExecuted'

//         await logout('APO: mode is ' + await this.do.meta.mode);

//         await logout('APO: usingExcel is ' + await this.do.excelData.usingExcel);

//         if (this.do.excelData.usingExcel == true && this.do.meta.mode == 'appianCheck') { //means excel mode with data to iterate

//             // update DO with TestData values

//            this.do = await this.fn.updateDO_testData(this.do);

//             await logout('APO: FINAL DO updated with current testData row is : ' + JSON.stringify(this.do, 2, null));

//            // update DO itDirectory

//             // this.do.meta.itDirectory = '/' + await this.fn.setupIterationFolder(this.do.meta);

//             this.do.meta.itDirectory = '/' + this.do.meta.testCase.testID;

//             await logout('APO: get execution data: set iteration directory: ' + this.do.meta.itDirectory)

//         } else {

//             await logout('PO: meta.mode not dataLoaded, not progressing with data-driven test');

//         }

//         return true;

//     }

//     this.getUnitTestData = async function (unitTestName) {

//         await logout('SFQPO:getUnitTestData() ... which just calls Gf:updateDO_unitTestData with do and unitTestName')

//         this.do = await this.fn.updateDO_unitTestData(this.do, unitTestName);

        

//         // await logout('SFQPO:getUnitTestData()... Update clients.clientx.personalDetails for values not present');

//         // await this.updateMissingClientPersonalDetails();

//         return true;

//     }

//     this.areThereMoreUnitTests = async function () {

//         // check DO for a value higher than 0

//         // await this.logout('OPO:areThereMoreUnitTests(): ' + this.do.meta.targetGroup.moreTests );

//         if (this.do.meta.targetGroup.moreTests == true) {

//             await this.logout('SFQPO:areThereMoreUnitTests(): YES');

//             return true;

//         } else {

//             await this.logout('SFQPO:areThereMoreUnitTests(): NO');

//             return false;

//         }

//     }

//     this.doAnotherSearch = async function () {

//         await browser.sleep(500);

//         await element(by.cssContainingText('span', 'Search panel')).click();

//         await browser.sleep(500);

//     }

//     // *** V16

//     // *** benefit and option checker unit tester

//     this.unitTest_benefitOptionValidation = async function (unitTestName, benefitLabel, optionLabel) {

//         await logout('SFQPO: unitTest_benefitOptionValidation(): ... ');

//         await browser.sleep(1000);

//         do {

//             await logout('SFQPO: unitTest_benefitOptionValidation(): doing getUnitTestData for excel target: ' + unitTestName);

//             await logout('SFQPO: unitTest_benefitOptionValidation(): benefit label:' + benefitLabel + ', option label: ' + optionLabel);

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

//                 // first get the DO names of the benefit and option labels passed from xl

//                 await po.sf_getBenefitDOName(benefitLabel);

//                 await po.sf_getOptionDOName(optionLabel);

//                 // *** assumptions

//                 // *** - that the benefit label in DO is this.do.product.selectedBenefit

//                 // *** - that the option label in DO is this.do.product.selectedOption

//                 // next do the test

//                 await po.sf_checkBenefitOptionValuesPresent(benefitLabel, optionLabel);

//                 // !! how is validation and error handling done... TOCHECK TODO

//             }

//             await logout('SFQPO: unitTest_fieldValidation(): if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         // } while (await po.areThereMoreUnitTests());

//         await logout('SFQPO: unitTest_fieldValidation(): end of function ');

//         return true;

//     }

//     // assume one field is under test and seeking error text

//     this.unitTest_fieldValidation = async function (unitTestName, labelName, fieldType, doString) {

//         // get client number, and prefix

//         var currentClient = this.do.clients[this.do.clients.selectedClient];

//         var clientDetails = currentClient.personalDetails;

//         // Unit Test, explicit step through of each field and set of unit tests

//         //var unitTestName = 'firstname';

//         // should be at least one unit test I would imagine, assumption. but checked in getUnittestdata, areThereMoreUnitTests anyway

//         await logout('SFQPO: unitTest_fieldValidation(): ... '); // was targetUnitTests()

//         //await browser.sleep(1000);

//         do {

//             await logout('SFQPO: unitTest_fieldValidation(): doing getUnitTestData for excel target: ' + unitTestName);

//             await logout('SFQPO: unitTest_fieldValidation(): field label is ' + labelName + ', fieldType is ' + fieldType);

//             //await logout('SFQPO: unitTest_fieldValidation(): getting unit test data... ');

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

//                 try {

//                     doPart = doString.split('.');

//                     var doName1 = this.do[doPart[0]];

//                     var doName = doName1[doPart[1]];

//                     await logout('SFQPO: unitTest_fieldValidation(): Unit test value being used is: doPart[0]: ' + doPart[0]);

//                     await logout('SFQPO: unitTest_fieldValidation(): Unit test value being used is: doPart[1]: ' + doPart[1]);

//                     await logout('SFQPO: unitTest_fieldValidation(): Unit test value being used is: ' + doName);

//                 } catch (e) {

//                     await logout('SFQPO: unitTest_fieldValidation(): Error :' + e);

//                 }

//                 //await logout('SFQPO: unitTest_fieldValidation(): value being used is ' + doName);

//                 //await logout('SFQPO: unitTest_fieldValidation(): areThereMoreUnitTests? : ' + await this.areThereMoreUnitTests());

//                 //await logout('SFQPO: unitTest_fieldValidation(): doing data entry... ');

//                 switch (fieldType) {

//                     case 'TEXTFIELD':

//                         await logout('SFQPO: unitTest_fieldValidation(): doing textfield entry... ');

//                         await this.enterInputFieldTextByLabel(labelName, doName);

//                         break;

//                     case 'DOBTEXTENTRY':

//                         await logout('SFQPO: unitTest_fieldValidation(): doing dob text entry... ');

//                         await this.enterTextByLabelPreDropDown(labelName, doName);

//                         break;

//                     // todo: dobdatepicker

//                     case 'RADIOBUTTON':

//                         await logout('SFQPO: unitTest_fieldValidation(): doing radio button selection ... ');

//                         await this.selectValueByRadioButton(labelName, doName);

//                         break;

//                     case 'ENTERTEXT_SELECTFROMDROPDOWN': //eg. occupation

//                         await logout('SFQPO: unitTest_fieldValidation(): doing drop down text entry, then select first ... ');

//                         await this.enterTextByLabelPreDropDown(labelName, doName); // handles error scenario for occupation

//                         // if expecting error, then dont attempt to get first value

//                         if (this.do.validation.isError != true) {

//                             await this.dropDownListSelectFirst();

//                         }

//                         break;

//                     // case 'ENTERTEXT_EXPECTERROR': //eg. occupation // SAME AS TEXTFIELD?

//                     //            await logout('SFQPO: unitTest_fieldValidation(): doing drop down text entry, and expect an error ... ');

//                     //            await this.enterDateTextByLabel(labelName, doName);

//                     //            await this.dropDownListSelectFirst();

//                     //            break;

//                     default:

//                         await logout('SFQPO: unitTest_fieldValidation(): Error: no fieldType sent, or not found');

//                 }

//                 // Should I check for errors, or confirm success?

//                 await logout('SFQPO: unitTest_fieldValidation(): done entry... ' + this.do.meta.testCase.unitTestID + ': ' + labelName + ' validation.isError: ' + this.do.validation.isError);

//                 if (this.do.validation.isError == true) {

//                    await logout('SFQPO: unitTest_fieldValidation(): checking error ...');

//                     //if(po.do.validation.errorType == 'onSubmit'){

//                     // process.exit();

//                     // await po.buttonClick('Next', 'Capture Client Details');

//                     await this.checkErrorTypeAndContent(labelName); // doesnt exist yet

//                     //await po.enterInputFieldTextByLabel('First Name', po.do.validation.validValue);

//                     // }

//                 } else {

//                     // select next and carry on

//                     //Click Next

//                     await logout('SFQPO: unitTest_fieldValidation(): no error, valid entry')

//                     //await this.buttonClick('Next', 'Select Product');

//                     //await browser.sleep(1000);

//                     //await this.navigationStepClick('Client Details', 'Capture Client Details');

//                 }

//             }

//             await logout('SFQPO: unitTest_fieldValidation(): if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         // } while (await po.areThereMoreUnitTests());

//         await logout('SFQPO: unitTest_fieldValidation(): end of function ');

//         return true;

//     }

//     this.updateMissingClientPersonalDetails = async function(){

//         // assumptions - just do for current client

//         // - a value is not required for .selectedClient, it will be set to client1

//         // - a structure is not required for client1, it will be provided if missing

//         // - it should be possible to run this command without any XL data entry row needed, it will grab  you a client1 to use

//         var functionName = 'SFQPO:updateMissingClientPersonalDetails()';

//         var clientDetails;

//         var currentClientDO;

//         try{

//             // *** important to not assume we have client1 or anything stored in .selectedClient

//             // *** if a low level test, it may not have a value, and only use one client, so put clien1 there and move on

//             // if(this.do.clients.selectedClient == ''){

//             //     this.do.clients.selectedClient = 'client1';

//             // }

//             // *** if a placeholder for building a client does not exist, then make sure its created, and add all fields too

//            await logout(functionName + ': this.do.clients.selectedClient: ' + this.do.clients.selectedClient);

     

//            // if no value exists for .selectedClient, then assume we want to add one for client1

//            if(this.do.clients.selectedClient == '' ){this.do.clients.selectedClient = 'client1';}

      

//            // if no object exists for .selectedClient, then create one. probably client1 but could be any

//            if(typeof this.do.clients[this.do.clients.selectedClient] == 'undefined'){

 

           

//                 clientDetails = {};

//                 clientDetails.gender = '' + await this.fn.getRandomGender();

//                 clientDetails.smoker = '' + await this.fn.getRandomSmoker();

//                 clientDetails.ANZWork = '' + await this.fn.getRandomANZWork();

//                 clientDetails.firstName = await this.fn.getRandomName('first', clientDetails.gender);

//                 clientDetails.lastName = await this.fn.getRandomName('last','');

//                 clientDetails.occupation = await this.getRandomValidOccupation(); //class 1,2,3

//                 clientDetails.class = await this.getOccupationClass(await clientDetails.occupation);

           

//                 await logout(functionName + ': clientDetails.occupation , clientDetails.class:  ' + clientDetails.occupation + ' - class ' + clientDetails.class);

//                 await logout(functionName + ': check above two values are coming through okay, and remove process.exit');

//     process.exit();

 

//                 var validMinAge = 20;

//                 var validMaxAge = 50;

//                 var validAge = Math.floor(Math.random()*(validMaxAge-validMinAge))+validMinAge;

//                 clientDetails.age = validAge;

//                 clientDetails.dob = '' + await this.fn.getDOBFromAge(validAge); //minAge,maxAge

            

//                 // this.do.clients.client1['personalDetails'] = clientDetails;

//                 var clientDO = {};

//                 clientDO['personalDetails'] = {};

//                 clientDO.personalDetails = clientDetails;

//                 this.do.clients[this.do.clients.selectedClient] = clientDO;

//             // *** otherwise, check for a value and create the ones that are missing

//             }else{

//                 // *** if the client has no .personalDetails set up, then do that as well, otherwise, grab what values exist

//                 // *** we are about to create any missing values

//                 currentClientDO = this.do.clients[this.do.clients.selectedClient];

//                 clientDetails = currentClientDO.personalDetails;

//                 // *** now lets get some values into the clientx DO in preparation for data entry

//                 if(clientDetails.gender == 'null'){

//                     clientDetails.gender = '' + await this.fn.getRandomGender();

//                 }

         

//                 if(clientDetails.smoker == 'null'){

//                     clientDetails.smoker = '' + await this.fn.getRandomSmoker();

//                 }

//                 if(clientDetails.ANZWork == 'null'){

//                     clientDetails.ANZWork = '' + await this.fn.getRandomANZWork();

//                 }

//                 if(clientDetails.firstName == 'null'){

//                     clientDetails.firstName = await this.fn.getRandomName('first', clientDetails.gender);

//                 }

//                 if(clientDetails.lastName == 'null'){

//                     clientDetails.lastName = await this.fn.getRandomName('last','');

//                 }

//                 // *** if both occupation and class are not supplied, then create a random valid occupation (class1-3), and get the class for that too

//                 if(clientDetails.occupation == 'null' && clientDetails.class == 'null'){

//                     // await logout(functionName + ': Both occupation and class are null');

//                     clientDetails.occupation = await this.getRandomValidOccupation(); //class 1,2,3

//                     clientDetails.class = await this.getOccupationClass(clientDetails.occupation);

//                 }else{

//                     // *** if only occupation class is known, then get a random occupation from that class

//                     if(clientDetails.class != 'null'){

//                         clientDetails.occupation = await this.getRandomOccupationFromClass(clientDetails.class);

                 

//                     }else{

//                         // *** if only the occupation is know, then look up the class

//                         if(clientDetails.occupation != 'null'){

//                             clientDetails.class = await this.getOccupationClass(clientDetails.occupation);

//                         }

//                     }

//                 }

         

//                 // *** if neither dob or age is supplied, the get a valid age, and calc a dob (age 20-50 years)

//                 if(clientDetails.dob == 'null' && clientDetails.age == 'null'){

//                     var validMinAge = 20;

//                     var validMaxAge = 50;

//                     var validAge = Math.floor(Math.random()*(validMaxAge-validMinAge))+validMinAge;

//                     clientDetails.age = validAge;

//                     clientDetails.dob = '' + await this.fn.getDOBFromAge(validAge); //minAge,maxAge

//                 }else{

//                     // *** if age is known, then get a dob from that

//                     await logout(functionName + ': Checking Age is there, then calc dob ...');

//                     if(clientDetails.age != 'null'){

//                         clientDetails.dob = '' + await this.fn.getDOBFromAge('' + clientDetails.age); //minAge,maxAge

//                     }else{

//                         // *** if dob is known, then get the age from that for valiation purposes on client form

//                         await logout(functionName + ': Checking DOB is there, and calc age...');

//                         if(clientDetails.dob != 'null'){

//                             clientDetails.age = '' + await this.fn.getAgeFromDOB('' + clientDetails.dob);

//                         }

//                     }

//                 }

//             }

//             await logout(functionName + ': Final clientDetails                  : ' + JSON.stringify(clientDetails));

//             await logout(functionName + ': Final this.do.clients.client[' + this.do.clients.selectedClient + ']: ' + JSON.stringify(this.do.clients[this.do.clients.selectedClient]));

//         }catch(e){

//             await logout(functionName + ': There was this error: ' + e);

//             await logout(functionName + ': Final clientDetails: ' + JSON.stringify(clientDetails));

//         }

//         await logout(functionName + ': FINAL this.do.clients: ' + JSON.stringify(this.do.clients));

//         return true;

//     }

//     this.unitTest_confirmMissingBenefit = async function (unitTestName){

//         // assumptions - that you are on the benefit page

//         // - that selectedClient and selectedBenefit are captured and accurate

//         // - that a attempt at finding a missing benefit will fail a try/catch, but that is a passResult

//         var functionName = 'SFQPO:unitTest_confirmMissingBenefit()';

//         do {

//             await logout(functionName + ': doing getUnitTestData for excel target: ' + unitTestName);

    

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

//                 await logout(functionName + ': About to create new client');

//                 await this.setNewClientPersonalDetailsInDO();

//                 await logout(functionName + ': Update clients.clientx.personalDetails for values that are not present');

//                 await this.updateMissingClientPersonalDetails();

//                 // get the client number and assign prefixElem based on whether its the primary client, or one of the dependent clients

//                 var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//                 await logout(functionName + ': clientNumber: ' + clientNumber);

//                 // now you have client details stored in the DO. So if this is client2+ then click Add Life and continue

//                if(clientNumber != 1){

//                     // click add new

//                     await logout(functionName + ': Clicking Add Life');

//                     try{

//                         await $('.nds-edit-block_longcards-add-icon').click();

//                     }catch(e){

//                         await logout('FAILED TO CLICK ADD NEW CLIENT BUTTON FOR CLIENT ' + clientNumber);

//             process.exit(); // brace during development to stop test dead on error

//                     }

           

//                 }else{

//                     await logout('primary client, not clicking new');

//                 }

//                 // now the client details are showing, so enter them

//                 await this.captureClientDetails();

//                 // now you can save the record and do another loop for another client, if any

//                 if(clientNumber > 1){

//                     //save dependent record

//                     try{

//                         await browser.sleep(1000);

//                         await element(by.cssContainingText('button','Save')).click();

//                     }catch(e){

//                         await logout('FAILED TO CLICK SAVE FOR CLIENT ' + clientNumber);

//         process.exit(); // brace during development to stop test dead on error

//                    }

//               }

//             //   #########################################

//             //Click Next

//             await po.buttonClick('Next', 'Select Product');

//             //Select Product

//             await po.sf_selectProduct();

//             await logout(functionName + ': About to check missing benefits');

//             await this.sf_checkMissingBenefit(this.do.product.selectedBenefit);

       

//             await browser.sleep(8000);

          

    

        

 

               

 

 

 

//   }else{

//                 await logout(functionName + ': PROBLEM: targetGroup.doTest was false and so function did not run');

//             }

//             await logout(functionName + ': if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         await logout(functionName + ': end of function ');

//         return true;

//     }

//     this.getClientNumber = async function () {

//         //assumption: selectedClient in DO holds a value

//         var clientNumber = this.do.clients.selectedClient;

//         return clientNumber;

//     }

//     this.sf_checkMissingBenefit = async function () {

 

//         var functionName = 'SFQPO:sf_checkMissingBenefit()';

//         var clientNumber = await this.getClientNumber();

//         var benefitName = this.do.product.selectedBenefit;

//         var testName = 'Check missing benefit ' + benefitName + ' for '+clientNumber;

//         var testValue = benefitName;

  

//         var client = this.do.clients[clientNumber];

//         var clientDetails = client.personalDetails;

//        //clientContainerElem is the Anchor to restrict the search per client by looking at the first and last name

//         var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

//         var checkUniqueBenefitLabel = clientContainerElem.all(by.cssContainingText('h3', benefitName));

//         var desiredState = 'Not found';

//         try {

//             await logout('SFPQO:sf_checkMissingBenefit(): checkUniqueBenefitLabel count: ' + await checkUniqueBenefitLabel.count());

//             var matchLabel = 'false'; //boolean to check matching benefitName

//             if (await checkUniqueBenefitLabel.count() != 0){

//                 for (var x = 0; x < await checkUniqueBenefitLabel.count(); x++) {

//                     // get text

//                     var benefitText = await checkUniqueBenefitLabel.get(x).getText();

//                     // check equal to benefitName

//                     if (benefitText == benefitName) {

//                         matchLabel = 'true';

//                     }

//                 }       

//             }

//             if(matchLabel == 'false'){

//                await logout('SFPQO:sf_checkMissingBenefit(): Benefit ' +benefitName+ ' is not available');

//                 await this.passResult(functionName, testName, testValue);

//                 desiredState = 'notDisplayed';

//             } else {

//                await this.failResult(functionName, testName, testValue, 'Benefit ' +benefitName+ ' should not be available');

//                desiredState = 'Displayed'

//             }

//         } catch (e) {

//           await logout('SFPQO:sf_checkMissingBenefit(): Error in finding missing Benefit '+e);

//           desiredState = 'ERROR: cannot find state of benefit: sf_checkMissingBenefit(): ' + e;

//         }

//         return desiredState;

//     }

//     this.sf_checkBenefitShowing = async function () {

   

//         var functionName = 'SFQPO:sf_checkBenefitShowing()';

//         var clientNumber = await this.getClientNumber();

//         var benefitName = this.do.product.selectedBenefit;

//         var testName = 'Check benefit ' + benefitName+ ' is showing for ' + clientNumber;

//         var testValue = benefitName;

    

//         var client = this.do.clients[clientNumber];

//         var clientDetails = client.personalDetails;

//        //clientContainerElem is the Anchor to restrict the search per client by looking at the first and last name

//         var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName+' '+clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

//         var checkUniqueBenefitLabel = clientContainerElem.all(by.cssContainingText('h3', benefitName));

//         var desiredState;

//         try {

//             await logout('SFPQO:sf_checkBenefitShowing(): checkUniqueBenefitLabel count: ' + await checkUniqueBenefitLabel.count());

//            var matchLabel = 'false'; //boolean to check matching benefitName

//             if (await checkUniqueBenefitLabel.count() != 0){

//                 for (var x = 0; x < await checkUniqueBenefitLabel.count(); x++) {

//                     // get text

//                     var benefitText = await checkUniqueBenefitLabel.get(x).getText();

//                     // check equal to benefitName

//                     if (benefitText == benefitName) {

//                         matchLabel = 'true';

//                     }

//                 }         

//             }

//             if(matchLabel == 'true'){

//                 await logout('SFPQO:sf_checkBenefitShowing(): Benefit ' +benefitName+ ' is  showing');

//                 await this.passResult(functionName, testName, testValue);

//                 desiredState = 'Displayed';

//             } else {

//                await this.failResult(functionName, testName, testValue, 'Benefit ' +benefitName+ ' is not showing');

//                desiredState = 'notDisplayed';

//             }

//         } catch (e) {

//           await logout('SFPQO:sf_checkBenefitShowing(): Error in finding Benefit '+e);

//           desiredState = 'Error in sf_checkBenefitShowing(): ' + e;

//         }

//         return desiredState;

//     }

  

//     this.sf_showHideBenefit = async function (benefitName,actionToPerform) {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'sf_showHideBenefit()';

//         var testName =  actionToPerform+ ' Benefit ' +benefitName;

//         var testValue = benefitName;

//        // var clientNumber = await this.getClientNumber();

//         var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitName);

//         var preCheckElem = uniqueBenefitElem;

//         var preCheckType = 'visible'

//         //Show/Hide button

//         var actElem = uniqueBenefitElem.element(by.xpath('../../../../..')).$('div[role="button"]');

//         var postCheckElem = actElem;

//         var desiredButtonState;

//         if(actionToPerform == 'Show'){

//             desiredButtonState = 'Hide';

//         } else {

//             desiredButtonState = 'Show'

//         }

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             var currentButtonState = await actElem.getText();

//             if(currentButtonState == actionToPerform){

//                 await logout('SFQPO: sf_showHideBenefit() : Clicking ' +actionToPerform+ ' button...');

//                 await actElem.click();

//                 await browser.wait(protractor.ExpectedConditions.textToBePresentInElement(postCheckElem, desiredButtonState), 10000);

//                 await logout('SFQPO:sf_showHideBenefit():' +actionToPerform+ ' button clicked');

//             } else {

//                 await logout('It is already in the desired state');

//             }

       

            

//             return true;

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.sf_verifyClientDetails = async function() {

//         // ### BOILERPLATE FUNCTION CODE ###

//         var functionName = appnID + 'sf_verifyClientDetails()';

//         var testName =  'Verify Client details on Product Configuration Page'

//         var testValue = this.do.clients.selectedClient;

//         var clientNumber = this.do.clients.selectedClient;

//         var client = this.do.clients[clientNumber];

//         var expectedClientDetails = client.personalDetails;

//         var preCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));

//         var preCheckType = 'visible';

   

//         var clientDetails = [];

//         var fieldToCheck = [];

//         try{

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//            //clientContainerElem is the anchor and it will look for selected client's first and last name

//             var clientContainerElem = element(by.cssContainingText('strong', expectedClientDetails.firstName + ' ' + expectedClientDetails.lastName));

//             var actElem = clientContainerElem.element(by.xpath('../../../../..')).$$('span');

//             await logout('SFQPO: sf_verifyClientDetails(): Client details are ' + await actElem.getText());

//             await logout('SFQPO: sf_verifyClientDetails(): Checking if the client details are as expected....');

//             //Since clientContainerElem is found first and last name is as expected

//             await logout('SFQPO: sf_verifyClientDetails(): Field First and last name is as expected');

//             await this.passResult(functionName,'First and Last name is as expected', testValue);

//             //Looping through the spans to read individual fields

//             for (var i = 0; i < await actElem.count(); i++) {

//                 //Storing the whole text first into clientDetails array

//                 clientDetails.push(await actElem.get(i).getText());

//                 //Then getting index of the ':' in each field

//                 var index = clientDetails[i].indexOf(':');

//                 //Storing fieldlabels to fieldToCheck array and the fieldvalue into clientDetails array

//                 fieldToCheck.push((clientDetails[i].slice(0,index)).toLowerCase()); //lowercase done to match DO variables

           

//                 clientDetails[i] = clientDetails[i].slice(index+2);  //slice(index+2) is done to include space in the fieldlabel

//                 //Below Check is done only for Age, Gender,Smoker, Occupation and Class. Assumption: Age is at index 3

//                 if(i > 2){

//                     if(clientDetails[i] == expectedClientDetails[fieldToCheck[i]]){

//                         await logout('SFQPO: sf_verifyClientDetails(): Field ' +fieldToCheck[i] + ' is as expected');

//                         await this.passResult(functionName,'Field ' +fieldToCheck[i] + ' is as expected', testValue);

//                     } else {

//                          await this.failResult(functionName, testName, testValue, 'Field '+fieldToCheck[i]+' is not as expected Error:');

//                     }

//                 }

//             }

//             //DOB check is done seperately as fieldname is not matching DO variable

//             //Taking DOB from DO and replacing / with -

//             var expectedDOB = expectedClientDetails.dob.replace(/([/])/mg, '-');

//             //assumption DOB is at index 2

//             if (clientDetails[2] == expectedDOB) {        

//                 await logout('SFQPO: sf_verifyClientDetails(): Field D.O.B. is as expected');

//              } else {

//                 await this.failResult(functionName, testName, testValue, 'Field '+fieldToCheck[2]+' is not as expected');

//              }

//         } catch(e){

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

//     }

//     this.manual_createClientDetails = async function(){

   

//         var functionName = 'SFQPO:manual_createClientDetails';

//         await po.getApplication();

//         await po.logInApplication();

//         await po.sf_navigateToQuote();

//         var manualFunctionName = this.do.manual;

//         var numberOfClientsToCreate=1;

//         await logout('SFQPO:manual_createClientDetails(): manualFunctionName: ' + manualFunctionName);

//         await logout('SFQPO:manual_createClientDetails(): Number(manualFunctionName.slice(7): ' + Number(manualFunctionName.slice(7)) );

//         try{

//            numberOfClientsToCreate = Number(manualFunctionName.slice(7));

//         }catch(e){

//             await logout('SFQPO:manual_createClientDetails(): problem with parsing the number to create. Is it in the format of CC1 or CC2 etc eg --params.manual CC2');

//         }

//         for(var x=0; x<numberOfClientsToCreate; x++){

//             this.do.clients.selectedClient = 'client' + (x+1);

//             await po.updateMissingClientPersonalDetails();

//             await po.captureClientDetails();

       

//             var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//             await logout(functionName + ': clientNumber: ' + clientNumber);

//             // now you have client details stored in the DO. So if this is client2+ then click Add Life and continue

//             if(clientNumber != 1){

//                 // click add new

//                 await logout(functionName + ': Clicking Add Life');

//                 try{

//                     await $('.nds-edit-block_longcards-add-icon').click();

//                 }catch(e){

//                     await logout('FAILED TO CLICK ADD NEW CLIENT BUTTON FOR CLIENT ' + clientNumber);

//         process.exit(); // brace during development to stop test dead on error

//                 }

       

//             }else{

//                 await logout('primary client, not clicking new');

//             }

//             // now the client details are showing, so enter them

//             await this.captureClientDetails();

//             // now you can save the record and do another loop for another client, if any

//             if(clientNumber > 1){

//                 //save dependent record

//                 try{

//                     await browser.sleep(1000);

//                     await element(by.cssContainingText('button','Save')).click();

//                 }catch(e){

//                     await logout('FAILED TO CLICK SAVE FOR CLIENT ' + clientNumber);

//     process.exit(); // brace during development to stop test dead on error

//                 }

//             }

   

 

 

//         }

//         process.exit();

   

//     }

//     this.nfrStart = async function (nfrRef) {

//         await this.fn.nfrStart(nfrRef, this.do)

//     }

//     this.nfrStart_movedToGF = async function (nfrRef) {

    

//         var functionName = 'SFQPO:nfrStart()';

//         await logout(functionName + ': ...');

//         if(this.do.nfr.reportingNfr == true){

//             await logout(functionName + ': nfrRef: ' + nfrRef);

           

//             //var nfrDO = this.do.nfr[nfrRef];

//             //nfrDO.startTime = Date.now();

//             var nfrIdsArray= this.do.nfr.mappedRequirements.map(function (item) {

//                 return item.id;

//             });

//             var indexOfNfr = nfrIdsArray.indexOf(nfrRef);

//             var nfrDO = this.do.nfr.mappedRequirements[indexOfNfr];

//             if(nfrDO.state == true){

//                 nfrDO.startTime = Date.now();

//                 await logout('SFQPO:nfrStop(): Started NFR: ' + nfrDO.id + ': ' + nfrDO.name + ': startTime: ' + nfrDO.startTime + ': Description: ' + nfrDO.description );

//             }

//                 }

//         return true;

//     }

//     this.nfrStop = async function (nfrRef) {

//         await this.fn.nfrStop(nfrRef, this.do)

//     }

//     this.nfrStop_movedToGF = async function (nfrRef) {

//         // var nfrDO = this.do.nfr[nfrRef];

//         // nfrDO.stopTime = Date.now();

//         if(this.do.nfr.reportingNfr == true){

//             var functionName = 'SFQPO:nfrStop()';

//             // var testName = '';

       

//             var nfrIdsArray= this.do.nfr.mappedRequirements.map(function (item) {

//                 return item.id;

//             });

   

//             var indexOfNfr = nfrIdsArray.indexOf(nfrRef);

   

//             var nfrDO = this.do.nfr.mappedRequirements[indexOfNfr];

//             if(nfrDO.state == true){

//                 var startTime = nfrDO.startTime;

//                 var endTime = Date.now();

//                 nfrDO.endTime = endTime;

     

//                 var timeLimit = nfrDO.timeLimit;

//                 var actualTime = (endTime - startTime) / 1000;

    

//                 await logout('SFQPO:nfrStop(): Checking NFR: ' + nfrDO.id + ': ' + nfrDO.name + ': Description: ' + nfrDO.description );

    

//                 var testName = this.do.nfr.testName;

//                 if(testName.length > 0){testName+=': '};

//                 var testName = 'Checking Non-functional Requirement ' + nfrRef + ':' + nfrDO.name + ' response time is within';

//                 var testValue = testName + nfrDO.name + ' should load within ' + timeLimit + ' seconds';

    

//                 if(actualTime > timeLimit){ // too slow!

//                     var e = 'ERROR: EXCEEDED TIME LIMIT: ' + nfrRef + ': Limit: ' + timeLimit + ': Actual: ' + actualTime + '.  Description of requirement: ' + nfrDO.description;

//                     await logout('SFQPO:nfrStop(): EXCEEDED TIME LIMIT: ' + nfrRef + ': Limit: ' + timeLimit + ': Actual: ' + actualTime);

//                     //turn time reporting off

//                     this.do.meta.timer.reportTime = false;

//                    await this.failResult(functionName, testName, testValue, e);

//                     // turn time reporting on

//                     this.do.meta.timer.reportTime = true;

//                 }else{ // its good :)

//                     testValue = 'Limit was: ' + timeLimit + ': Actual: ' + actualTime;

//                     await logout('SFQPO:nfrStop(): WITHIN TIME LIMIT: ' + nfrRef + ': Limit: ' + timeLimit + ': Actual: ' + actualTime);

//                     // turn time reporting off

//                     this.do.meta.timer.reportTime = false;

//                     await this.passResult(functionName, testName, testValue);

//                     // turn time reporting on

//                     this.do.meta.timer.reportTime = true;

    

//                 }

//                 this.do.nfr.fieldName = '';

//             }

//         }

//         return true;

//     }

//     this.unitTest_checkBenefitNotShowing = async function (unitTestName) {

//         var functionName = 'SFQPO:unitTest_checkBenefitNotShowing()';

//         await logout(functionName + ': ... ');

//         do {

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

//                 // do test per XL row in here

//                 // assume starting from Client details page

//                 // dont assume one client

//                 // assume already have a client loaded ie. captureClientDetails already run before this unit test loop

//                 var client = this.do.clients[this.do.clients.selectedClient];

//                 var clientDetails = client.personalDetails;

//                 // if backwards, then want to keep existing data for client, which is all valid

//                 // then go to product and benefit page

//                 // then go back and update age

//                 await logout(functionName + ': entry Order: ' + this.do.navigation.entryOrder);

//                 if (this.do.navigation.entryOrder == 'backwards') {

//                     await logout(functionName + ': ... going backwards ' );

//                     // have just entered client details, or started from that page, assume clean data there

//                     await this.navigateTo('Product Configuration');

//                     // confirm all benefits are showing, as our baseline

//                     // TODO - awaiting JA refac of sf_checkAllBenefitsPresent() which also does option check of defaults which is covered elsewhere

//                     // navigate back to client details

//                     await this.navigateTo('Client Details');

//                     // now back at point where we can update client details with any values passed from unit test data

//                     await this.captureClientDetails_updateUnitTestChangesOnly();

//                     await this.navigateTo('Product Configuration');

//                 }else{

//                     // navigate to start page

//                     // if its the Product Configuration page, then dont go anywhere, otherwise head back to Client Capture and do an update

//                     var pageArray = ['Client Details'];

//                     await logout(functionName + ': 1st pageArray: ' + pageArray.indexOf(this.do.navigation.startPage));

//                     if(pageArray.indexOf(this.do.navigation.startPage)!=-1){

//                         var startPage = this.do.navigation.startPage

//                         await this.navigateTo(startPage);

//                         // now back at point where we can update client details with any values passed from unit test data

//                         await this.captureClientDetails_updateUnitTestChangesOnly();

//                         await this.navigateForwardsToPage('Product Configuration');

//                     }

//                     var pageArray = ['Select Product','Product Configuration'];

//                     await logout(functionName + ': 2nd pageArray: ' + pageArray.indexOf(this.do.navigation.startPage));

//                     if(pageArray.indexOf(this.do.navigation.startPage)!=-1){

//                         await this.navigateTo('Client Details');

//                         await this.captureClientDetails_updateUnitTestChangesOnly();

//                         await this.navigateTo(this.do.navigation.startPage);

//                     }

//                     if(this.do.navigation.startPage == 'null'){

//                         // now back at point where we can update client details with any values passed from unit test data

//                         await this.captureClientDetails_updateUnitTestChangesOnly();

//                         await this.navigateTo('Product Configuration');

//                     }

                  

//                 }

 

 

//                 // absorb into keyword

//                 // now lets test to see if the benefit showed or not...

//                 if (this.do.validation.isError == true) {

//                     await logout(functionName + ': About to check benefits that are not showing');

//                     await this.sf_checkMissingBenefit(this.do.product.selectedBenefit);

//                 } else {

//                     await this.sf_checkBenefitShowing(this.do.product.selectedBenefit);

//                 }

              

//                 // end of test, lets go somewhere for next test

//                 // check validation.returnState

//                 // if == 'clientDetails' return there

//                 // if (this.do.validation.returnState == 'Client Details') {

//                 //     await this.navigateTo('Client Details');

//                 // }

              

//                 await this.navigateTo(this.do.validation.returnState);

               

 

//                 // // nav to benefit page again, and do check of missing benefit, or not

//                 // await this.buttonClick('Next', 'Select Product');

         

//                 // //Navigate to benefit page

//                 // await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

               

                

 

//                 //await logout(functionName + ': About to update client');

//                 // get validation.entryOrder

              

               

//                     //this.do.clients.selectedClient = '';

//                     // await this.updateMissingClientPersonalDetails();

//                     //await this.captureClientDetails_updateUnitTestChangesOnly();

//                     // await this.captureClientDetails();

//                // } else {

//                     // if not backwards, then add client with the data in excel

//                     //await this.setNewClientPersonalDetailsInDO();

//                     //await this.updateMissingClientPersonalDetails();

//                     // get the client number and assign prefixElem based on whether its the primary client, or one of the dependent clients

//                     // var clientNumber = Number(this.do.clients.selectedClient.slice(6));

//                     // await logout(functionName + ': clientNumber: ' + clientNumber);

//                     //await this.captureClientDetails_updateUnitTestChangesOnly();

//                     // await this.captureClientDetails();

//                     // await po.captureClientDetails();

//                 //}

//                 //Click Next

              

 

               

//                // var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../..'));

//                 // if backwards, then go back and change something like age, then come back to benefit page

//                 // if (this.do.validation.entryOrder == 'backwards') {

//                     //Navigate to Client Details Page

//                     // await this.navigateToPage('Client Details');

//                     //Take age from excelData and store it into clientDetails.age in DO

//                     // var index = this.do.excelData.objRef.indexOf('personalDetails.age');

//                     // clientDetails.age = this.do.excelData.unitTestData[index];

//                     // clientDetails.dob = '' + await this.fn.getDOBFromAge('' + clientDetails.age);

//                     // await logout('Updating Date of birth to ' + JSON.stringify(clientDetails.dob) + ' to verify benefits that are not showing');

//                     //Update DOB

//                     // await this.enterTextfieldById('Date of birth', clientDetails.dob);

//                     // await this.verifyAge(); // bug in web UI

//                     //Navigate to Product Page

//                     //Click Next

//                     // await this.buttonClick('Next', 'Select Product');

//                     // await po.buttonClick('Next', 'Select Product');

//                     // await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

//                 // }

              

//                 // check for error = True

//                 // if true, then check for 'benefitNotShowing' value (or whatever it is in XL)

//                // if true, then check benefit is missing, pass

//                 // if false, then benefit should show

//                 // if false, then ignore for now, no other tags expected

//                 // if false, then just check benefit is there and pass test

             

 

//             }

//             await logout(functionName + ': if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         await logout(functionName + ': end of function');

//         return true;

//     }

//     // V19 - Rule - when Occupation Class = 5, then Business Extra product not available

//     this.checkProductNotShowing = async function(){

//         var functionName = 'SFQPO:checkProductNotShowing()';

//         // var clientNumber = await this.getClientNumber();

//         var testName = 'Check product is not available for selection';

//         var testValue = this.do.product.selectedProduct;

//         var preCheckElem = $('#configureProducts');

//         var preCheckType = 'clickable';

//         var actElem = preCheckElem.element(by.cssContainingText('h2', await testValue));

//         // var postCheckElem = $('#ConfigureCoveragesLife').element(by.cssContainingText('h1', 'Product Configuration'));

//         // var postCheckType = 'visible'; //visible, clickable

//         await logout(functionName + 'Step label: ' + await this.whatIsMyStepLabel());

//         await logout(functionName + 'H1 heading: ' + await this.whatIsMyH1Heading());

//         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//         // await logout('SFQPO:sf_selectProduct() : Checking all 4 Products are available...');

      

//         // for (i = 0; i < this.do.product.productList.length; i++) {

//         //     if (preCheckElem.element(by.cssContainingText('h2', this.do.product.productList[i])).isPresent()) {

//         //         await logout('SFQPO:sf_selectProduct(): Product ' + this.do.product.productList[i] + ' is present');

//         //     } else {

//         //         await logout('SFQPO:sf_selectProduct(): Product ' + this.do.product.productList[i] + ' is not present');

//         //     }

//         // }

//         // await logout('SFQPO:sf_selectProduct() : Checking cannot select Product ' + this.do.product.selectedProduct);

      

//         // looks like i need to get unique value for product name i think

//         try{

//             await actElem.click();

//             // await browser.wait(protractor.ExpectedConditions.visibilityOf($('message description ng-scope')), 10000);

//             // var actualErrorText = $('message description ng-scope').getText();

//             // if (expectedErrorText.indexOf(actualErrorText)){

//             //     await logout(functionName + ' : Error message is displayed as expected');

//             //     await this.passResult(functionName, testName, testValue);

//             // } else {

//             //     await this.failResult(functionName, testName, testValue, 'Error message is not as expected');

//             // }

           

//             await this.failResult(functionName, testName, testValue, e);

//             // check validation.returnState

//             // if == 'clientDetails' return there

//             // if (this.do.validation.returnState == 'clientDetails') {

//             await this.navigateToPage('Client Details');

//             //}

//             return false;

      

//         }catch(e){

//             await this.passResult(functionName, testName, testValue);

//             await this.navigateToPage('Client Details');

//             return true;

//         }

//     }

 

 

//     // NEW VERSION OF RULES TEST

//     // ALL RULES BASED TESTS TO USE THIS SINGLE FUNCTION FOR UNIT TESTS

//     // SET XL TO VALUE rulesTest

//     // SET SPEC TO USE FUNCTION unitTest_rules

//     // V12 - adding freestyle benefits and option values. no XL structure required. freeform. very cool.

//     // updated to new name - unitTest_rules from unitTest_selectBenefitAndOptions

//     this.unitTest_rules = async function(unitTestName){

//         var functionName = 'SFQPO:unitTest_rules()';

//         // var functionName = 'SFQPO:unitTest_selectBenefitAndOptions()';

//         await logout(functionName + ': ... ');

//         // *** navigate to correct page

//         // updating CD is within the logic

//         var client = this.do.clients[this.do.clients.selectedClient];

//         var clientDetails = client.personalDetails;

       

 

//         this.do.meta.targetGroup.xlKeywords = true; //this needs to be set so we can check for the keywords addBenefit, updateOption and withValue. makes use of this in getUnitTestData function

//         do {

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

             

//                 //*** FIRST, GET THE NAVIGATION CORRECT (then do the keyword tests) */

 

//                  // if backwards, then want to keep existing data for client, which is all valid

//                 // then go to product and benefit page

//                 // then go back and update age

//                 await logout(functionName + ': entry Order: ' + this.do.navigation.entryOrder);

//                 await logout(functionName + ': startPage: ' + this.do.navigation.startPage);

//                 await logout(functionName + ': navigationDO: ' + JSON.stringify(this.do.navigation));

 

 

//                 if (this.do.navigation.entryOrder == 'backwards') {

       

//                     await logout(functionName + ': ... going backwards ' );

//                     // have just entered client details, or started from that page, assume clean data there

//                     await this.navigateTo('Product Configuration');

       

//                     // confirm all benefits are showing, as our baseline

//                     // TODO - awaiting JA refac of sf_checkAllBenefitsPresent() which also does option check of defaults which is covered elsewhere

       

//                     // navigate back to client details

//                     await this.navigateTo('Client Details');

//                     // now back at point where we can update client details with any values passed from unit test data

//                     await this.captureClientDetails_updateUnitTestChangesOnly();

//                     await this.navigateTo('Product Configuration');

//                 }else{

//                     // navigate to start page

//                     await logout(functionName + ': startPage: ' + this.do.navigation.startPage);

 

//                     // if its the Product Configuration page, then dont go anywhere, otherwise head back to Client Capture and do an update

//                     var pageArray = ['Client Details'];

//                     await logout(functionName + ': 1st pageArray: ' + pageArray.indexOf(this.do.navigation.startPage));

 

//                     if(pageArray.indexOf(this.do.navigation.startPage)!=-1){

//                     // if(pageArray.indexOf(this.do.navigation.startPage)!=-1){

//                         var startPage = this.do.navigation.startPage

//                         await this.navigateTo(startPage);

//                         // now back at point where we can update client details with any values passed from unit test data

//                         await this.captureClientDetails_updateUnitTestChangesOnly();

//                         await this.navigateTo('Product Configuration');

//                     }

       

//                     pageArray = ['Product Configuration'];

//                     await logout(functionName + ': 2nd pageArray: ' + pageArray.indexOf(this.do.navigation.startPage));

//                     if(pageArray.indexOf(this.do.navigation.startPage)!=-1){

//                         //await this.navigateTo('Client Details');

//                         //await this.captureClientDetails_updateUnitTestChangesOnly();

//                         await this.navigateTo(this.do.navigation.startPage);

//                     }

 

//                     pageArray = ['Select Product'];

//                     await logout(functionName + ': 3rd pageArray: ' + pageArray.indexOf(this.do.navigation.startPage));

//                     if(pageArray.indexOf(this.do.navigation.startPage)!=-1){

 

//                         await logout(functionName + ': doing Select Product...');

                       

 

//                         await this.navigateTo(this.do.navigation.startPage); // should usually do nothing as you are already on that page

//                         // select product

//                         await logout(functionName + ': selectedProduct: ' + this.do.product.selectedProduct);

//                         //await this.sf_selectProduct();

//                         // nav to prod config

//                         await this.navigateTo('Product Configuration');

//                     }

 

//         //process.exit();

       

//                     if(this.do.navigation.startPage == 'null' || this.do.navigation.startPage == ''){

//                         await logout(functionName + ': should not be ending up here, please add a navigation.startPage columnn and value to your unit test in the Xl .... exiting');

//             process.exit();

//                         // now back at point where we can update client details with any values passed from unit test data

//                         //*** note here that you can check for unit test personaldetails updates from

//                         //*** meta.targetGroup.specialItemsScenario: [], specialItemsUnit: []

//                         // but actually you havent gotten the unit test data yet....

                   

//                         await this.navigateTo('Client Details');

//                         await this.captureClientDetails_updateUnitTestChangesOnly();

//                         await this.navigateTo('Product Configuration');

//                     }

               

//                 }

 

//                 //*** KEYWORD STUFF - THIS IS THE ACTUAL TEST */

//                 var keywordArray = this.do.meta.targetGroup.keywordArray;

//                 await logout(functionName + ': keywordArray: ' + JSON.stringify(keywordArray));

 

//                 if(keywordArray.length>0){

//                     for(var x=0;x<keywordArray.length;x++){

//                         switch(keywordArray[x]){

//                             case 'addBenefit':

//                                 await logout(functionName + ': found addBenefit: ' + keywordArray[x]);

//                                 // select benefit

//                                 var benefitLabel = keywordArray[x+1];

//                                 this.do.product.selectedBenefit = benefitLabel;

//                                 await this.sf_selectBenefit();

//                                 x++;

//                                 break;

//                             case 'setBenefit':

//                                 await logout(functionName + ': found setBenefit: ' + keywordArray[x]);

//                                 this.do.product.selectedBenefit = keywordArray[x+1];

//                                 x++;

//                                 break;

//                             case 'setOption':

//                                 await logout(functionName + ': found setOption: ' + keywordArray[x]);

//                                 this.do.product.selectedOption = keywordArray[x+1];

//                                 x++;

//                                 break;

//                             case 'checkBenefitState': // stateValue such as Selected, notSelected, displayed, notDisplayed

//                                 await logout(functionName + ': found withValue: ' + keywordArray[x]);

//                                 await this.checkBenefitState(keywordArray[x+1]);

//                                 x++;

//                                 break;

                  

//                             case 'updateOption':

//                                 await logout(functionName + ': found updateOption: ' + keywordArray[x]);

//                                 this.do.product.selectedOption = keywordArray[x+1];

//                                 // do nothing, as we just want to note the option we are dealing with. its not until we get a value, that we do something.

//                                 x++;

 

//                                 // nesting this in here, because withValue can be used for multiple keywords, so need to maintain context

//                                 if(keywordArray[x+1] == 'withValue'){

//                                     x++;

//                                     await logout(functionName + ': found withValue: ' + keywordArray[x]);

//                                     this.do.product.selectedOptionValue = keywordArray[x+1];

//                                     await this.sf_editOptionValues();

//                                     x++;

//                                 }

//                                 break;

//                             case 'expectOptionError': // this is the inline field warning message in small red font

//                                 // assumes we have already interacted and updated selectedOption prior to this

//                                 await logout(functionName + ': found keyword: ' + keywordArray[x]);

//                                 await this.sf_checkOptionError(keywordArray[x+1]);

//                                 x++;

//                                 break;

//                             case 'expectErrorOnCalculatePremium':

//                                 // assumes we have already interacted with the benefit and updated selectedOption prior to this

//                                 await logout(functionName + ': found keyword: ' + keywordArray[x]);

//                               //  await this.sf_checkErrorOnCalculatePremium('BenefitLevel', keywordArray[x + 1]);

//                                 await this.buttonClick('Calculate Premium', 'Product Configuration');

//                                 await this.sf_checkErrorOnCalculatePremium('ClientLevel', keywordArray[x + 1]);

//                              //  await this.sf_checkErrorOnCalculatePremium('Alert', 'Please select an amount for a benefit');

//                                 x++;

 

//                             default:

//                                 await logout(functionName + ': keyword not found in unitTest_rules() function: ' + keywordArray[x]);

//                                 x++;

//                         }

//                     }

//                 }

            

//                 // *** do some free tests here

//                 // If no value exists in keyword array for 'keepErrors'

//                 // then check for absence of any errors that are inline, or appearing on the page.

 

//                 // *** navigate to return page

//                 if(this.do.navigation.returnPage.length >0){

//                     await this.navigateTo(this.do.navigation.returnPage);

//                 }

//             }

//             await logout(functionName + ': if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         await logout(functionName + ': end of function');

//         return true;

 

//     }

//     // OLD FUNCTION, KEPT FOR A LITTLE WHILE FOR BACKWARDS COMPAT

//     // V12 - adding freestyle benefits and option values. no XL structure required. freeform. very cool.

//     // updated to new name - unitTest_rules from unitTest_selectBenefitAndOptions

//     this.unitTest_selectBenefitAndOptions = async function(unitTestName){

//         var functionName = 'SFQPO:unitTest_selectBenefitAndOptions()';

//         // var functionName = 'SFQPO:unitTest_selectBenefitAndOptions()';

//         await logout(functionName + ': ... ');

 

//         // check you are on the right page, should be benefit page

//         await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

      

//         // *** Check you have the right customer showing plan

//         // *** Client details UI container and benefit label array of elems

//         var client = this.do.clients[this.do.clients.selectedClient];

//         var clientDetails = client.personalDetails;

//         var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../../..'));

//         // var clientBenefitsArrayElems = clientContainerElem.all(by.cssContainingText('h3', benefitName));

//         // var benefitListUI = clientContainerElem.$$('h3');

//         // plan showing list of benefits

//         var customisePlanLink = clientContainerElem.element(by.cssContainingText('a', 'Customize Plan Details'));

//         var customiseType = 'clickable';

      

//         // check plan is showing with benefits, or click on Customize Plan Details

//         checkName = 'Check plan is displaying benefits';

//         try {

//             // await this.postCheck(customisePlanLink, customiseType, functionName, testName);

//             await customisePlanLink.click();

//         } catch (e) {

//             //if not showing, then assume it already showing

//             await logout(functionName + ': Full plan is showing... continue...');

//         }

//         this.do.meta.targetGroup.xlKeywords = true; //this needs to be set so we can check for the keywords addBenefit, updateOption and withValue. makes use of this in getUnitTestData function

//         do {

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

             

//                 var keywordArray = this.do.meta.targetGroup.keywordArray;

//                 await logout(functionName + ': keywordArray: ' + JSON.stringify(keywordArray));

//                 if(keywordArray.length>0){

//                     for(var x=0;x<keywordArray.length;x++){

//                         switch(keywordArray[x]){

//                             case 'addBenefit':

//                                 await logout(functionName + ': found addBenefit: ' + keywordArray[x]);

//                                 // select benefit

//                                 var benefitLabel = keywordArray[x+1];

//                                 this.do.product.selectedBenefit = benefitLabel;

//                                 await this.sf_selectBenefit();

//                                 x++;

//                                 break;

//                             case 'setBenefit':

//                                 await logout(functionName + ': found withValue: ' + keywordArray[x]);

//                                 this.do.product.selectedBenefit = keywordArray[x+1];

//                                 x++;

//                                 break;

//                             case 'checkBenefitState': // boolean true/false

//                                 await logout(functionName + ': found withValue: ' + keywordArray[x]);

//                                 await this.checkBenefitState(keywordArray[x+1]);

//                                 x++;

//                                 break;

//                             case 'updateOption':

//                                 await logout(functionName + ': found updateOption: ' + keywordArray[x]);

//                                 this.do.product.selectedOption = keywordArray[x+1];

//                                 // do nothing, as we just want to note the option we are dealing with. its not until we get a value, that we do something.

//                                 x++;

//                                 break;

//                             case 'withValue':

//                                 await logout(functionName + ': found withValue: ' + keywordArray[x]);

//                                 this.do.product.selectedOptionValue = keywordArray[x+1];

//                                 await this.sf_editOptionValues();

//                                 x++;

//                                 break;

//                             default:

//                                 await logout(functionName + ': keyword not found: ' + keywordArray[x]);

//                                 x++;

//                         }

//                     }

//                 }

//                 //Click Next

//                 //await po.buttonClick('Next', 'Select Product');

//                 // var client = this.do.clients[this.do.clients.selectedClient];

//                 // var clientDetails = client.personalDetails;

//                // var clientContainerElem = element(by.cssContainingText('strong', clientDetails.firstName + ' ' + clientDetails.lastName)).element(by.xpath('../../../../../../..'));

//                 // check for error = True

//                 if (this.do.validation.isError == true) {

                  

//                 } else {

                  

//                 }

//                 // check validation.returnState

//                 if (this.do.validation.returnState == 'clientDetails') {

//                     await this.navigateToPage('Client Details');

//                 }

//             }

//             await logout(functionName + ': if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests);

//         await logout(functionName + ': end of function');

//         return true;

//     }

//     //  this one possible is better than sf_checkBenefitState, as it uses better sub functions within it

//     this.checkBenefitState = async function (benefitState) {

//         var functionName = 'SFQPO:checkBenefitState';

//         var testName =  'Check Benefit state'

//         var testValue = benefitState.toUpperCase();

//         var benefitToCheck = this.do.product.selectedBenefit;

 

//         if(typeof benefitToCheck == 'undefined'){

//             await logout(functionName + ': Benefit is UNDEFINED');

//             var e = 'ERROR: checkBenefitState: Benefit is UNDEFINED';

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

 

//         await logout(functionName + ': About to check if benefit ' + benefitToCheck + ' is in the desired state: ' + testValue);

 

//         // following used for checking where benefit exists, but passes 'not defined' when does not exist

//         var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitToCheck);

//         // await logout(functionName + ': typeof uniqueBenefitElem: ' + typeof uniqueBenefitElem);

      

//         var preCheckElem = element.all(by.cssContainingText('h1','Product Configuration')).first();

//         var preCheckType = 'present';

//         var postCheckElem = uniqueBenefitElem;

//         var postCheckType = 'visible';

//         var desiredState = '';

//         await logout(functionName + ': About to check if benefit ' + benefitToCheck + ' is in the desired state: ' + testValue);

//         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

 

 

//         try {

      

//             if(testValue =='DISPLAYED' || testValue == 'NOTDISPLAYED'){

//                 if (testValue == 'DISPLAYED') {

//                     desiredState = await this.sf_checkBenefitShowing();

//                     // elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-not-empty');

//                     // desiredState = 'Displayed';

//                 }

               

//                 if (testValue == "NOTDISPLAYED") {

 

//                     await logout(functionName + ': doing NOTDISPLAYED: ' + testValue);

//                     desiredState = await this.sf_checkMissingBenefit();

//                     //elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-empty');  

//                     //desiredState = 'Not Displayed';

 

//                 }

//             }else if (testValue == 'SELECTED' || testValue == 'NOTSELECTED') {

//                 desiredState = await this.checkBenefitSelected(testValue);

//                 //elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-not-empty');

//                 //desiredState = '';

//             }else if(testValue == 'ALLBENEFITSDISPLAYED'){

//                 desiredState = await this.sf_checkAllBenefitsPresent();

//             }

         

//             //await this.postCheck(preCheckElem, postCheckType, functionName, testName);

//             //await browser.wait(protractor.ExpectedConditions.visibilityOf(elemToCheck), 10000);

//             await logout(functionName + ': Benefit is in the desired state: ' + desiredState);

//             await this.passResult(functionName, testName, testValue);

//         } catch (e) {

//             await logout(functionName + ': Benefit is NOT the desired state: ' + benefitState + ' was expected'); 

//             await this.failResult(functionName, testName, testValue, e);

//         }

 

 

 

//         return true;

          

//     }

 

 

//     this.sf_checkBenefitState = async function (benefitState) {

//         var functionName = 'SFQPO:sf_checkBenefitState';

//         var testName =  'Check Benefit state'

//         var testValue = benefitState.toUpperCase();

//         var benefitToCheck = this.do.product.selectedBenefit;

//         var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitToCheck);

//         var elemToCheck;

 

//         var preCheckElem = element.all(by.cssContainingText('h1','Product Configuration')).first();

//         var preCheckType = 'visible';

//         var postCheckElem = preCheckElem;

//         var postCheckType = 'visible';

//         var desiredState = '';

//         await logout(functionName + ': About to check if benefit ' + benefitToCheck + ' is in the desired state: ' + testValue);

//         await this.preCheck(preCheckElem, preCheckType, functionName, testName);

      

//         try {

      

//             if(testValue =='DISPLAYED' || testValue == 'NOTDISPLAYED'){

//                 if (testValue == 'DISPLAYED') {

//                     elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-not-empty');

//                     desiredState = 'Displayed';

//                 }

              

//                 if (testValue == "NOTDISPLAYED") {

//                     elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-empty');  

//                     desiredState = 'Not Displayed';

//                 }

//             }else if (testValue == 'SELECTED' || testValue == 'NOTSELECTED') {

//                 desiredState = await this.checkBenefitSelected(testValue);

//                 //elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-not-empty');

//                 //desiredState = '';

//             }

         

//             await this.postCheck(postCheckElem, postCheckType, functionName, testName);

//             //await browser.wait(protractor.ExpectedConditions.visibilityOf(elemToCheck), 10000);

//             await logout(functionName + ': Benefit is in the desired state: ' + desiredState);

//             await this.passResult(functionName, testName, testValue);

//         } catch (e) {

//             await logout(functionName + ': Benefit is NOT the desired state: ' + benefitState + ' was expected'); 

//             await this.failResult(functionName, testName, testValue, e);

//         }

          

//     }

//     this.sf_checkBenefitSelectionRules = async function () {

//         var functionName = 'SFQPO:sf_checkBenefitSelectionRules';

//         var testName =  'Check Benefit Selection Rules'

//         var testValue = this.do.product.selectedBenefit_2nd;

//         var benefitToCheck = this.do.product.selectedBenefit_2nd;

//         var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitToCheck);

//         try{

//             await logout('SFQPO: sf_checkBenefitSelectionRules() : About to check if benefit '+ benefitToCheck + ' is selected by default');

//             var elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-not-empty');        

//             await browser.wait(protractor.ExpectedConditions.visibilityOf(elemToCheck), 10000);

//             await logout('SFQPO: sf_checkBenefitSelectionRules() : Benefit ' +benefitToCheck+ ' is selected');

//             await this.passResult(functionName, testName, testValue);

//         }catch (e){

//             await this.failResult(functionName, testName, testValue, e);

//         }

//     }

//     // used as part of XL rulesTest, unitTest_rules

//     this.checkBenefitSelected = async function (booleanSelected) {

//         // booleanSelected is 'selected' or 'notselected'

//         var functionName = 'SFQPO:checkBenefitSelected()';

//         var testName =  'Check benefit is ' + booleanSelected;

//         var testValue = booleanSelected.toUpperCase();

//         var benefitToCheck = this.do.product.selectedBenefit;

//         var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(benefitToCheck);

//         var preCheckElem = uniqueBenefitElem;

//         var preCheckType = 'visible';

//         var postCheckType = 'visible';

//         var elemToCheck;

//         try{

//             // element must be there to begin with

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await logout(functionName + ': About to check if benefit '+ benefitToCheck + ' is selected');

//             elemToCheck = uniqueBenefitElem.element(by.xpath('../../..')).$('.ng-not-empty');        

                 

//             try{

//                 await this.postCheck(elemToCheck, postCheckType, functionName, testName);

//                 await logout(functionName + ': Benefit ' + benefitToCheck + ' IS selected');

                

 

//                 if(testValue =='SELECTED'){

//                     await this.passResult(functionName, testName, testValue);

//                 }else{

//                     var e = 'ERROR: Benefit ' + benefitToCheck + ' IS selected';

//                     await this.failResult(functionName, testName, testValue, e);

//                     return false;

//                 }

//             }catch(e){

//                 await logout(functionName + ': Benefit ' + benefitToCheck + ' IS NOT selected');

//                if(testValue =='NOTSELECTED'){

//                     var e = 'ERROR: Benefit ' + benefitToCheck + ' IS NOT selected';

//                     await this.failResult(functionName, testName, testValue, e);

//                     return false;

//                 }else{

//                     await this.passResult(functionName, testName, testValue);

//                 }

//             }

  

//            // await browser.wait(protractor.ExpectedConditions.visibilityOf(elemToCheck), 10000);

//         }catch (e){

      

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

      

//         return booleanSelected;

//     }

 

//     //V17 - Select one Benefit and check if any other benefits gets selected by default

//     this.unitTest_checkBenefitSelectionRules = async function(unitTestName){

//         var functionName = 'SFQPO:unitTest_checkBenefitSelectionRules()';

//         await logout(functionName + ': ... ');

//         do {

//             await this.getUnitTestData(unitTestName); // updates DO with new set of data, but dont want new results tab, just adds tests to existing scenario/tab in excel

//             if (this.do.meta.targetGroup.doTest == true) {

//                 // do test per XL row in here

//                 // assume starting from Client details page

//                 // assume one client

//                 await logout(functionName + ': About to create new client');

//                 await this.setNewClientPersonalDetailsInDO();

//                 await this.updateMissingClientPersonalDetails();

//                 await this.captureClientDetails();

//                 //Click Next

//                 await po.buttonClick('Next', 'Select Product');

//                 //Navigate to benefit page

//                 await this.navigateFromProductPageToBenefitList(this.do.product.selectedProduct);

//                 //Select a Benefit

//                 await this.sf_selectBenefit();

//                 await this.sf_checkBenefitSelectionRules();

//                 if (this.do.validation.returnState == 'clientDetails') {

//                     await this.navigateToPage('Client Details');

//                 }

//             }

//             await logout(functionName + ': if this.do.meta.targetGroup.moreTests is true, then carry on: ' + this.do.meta.targetGroup.moreTests);

//         } while (this.do.meta.targetGroup.moreTests); 

 

//         await logout(functionName + ': end of function');

//         return true;

//     }

   

 

//     this.getProductConfigWarning = async function(optionField){

 

//         var functionName = 'SFQPO:getProductConfigWarning';

//         var testName =  'Store the warning for an Option'

//         var testValue = optionField;

 

//         // var preCheckElem = optionField.element(by.xpath('../..')).$('ul').$$('li');

//         // var preCheckType ='visible';

//        try{

//         //   await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//            var actualErrorList =[];

//            var actualerrorListLength = await optionField.element(by.xpath('../..')).$('ul').$$('li').count();

//            await logout('SFPO:getProductConfigWarning: actualerrorListLength: ' +actualerrorListLength);

//            for (i = 0; i < actualerrorListLength; i++) {

//                var errorText = await optionField.element(by.xpath('../..')).$('ul').$$('li').get(i).getText();

//               // actualErrorList.push(errorText.toUpperCase());

//                await actualErrorList.push(errorText);

//            }

//            return actualErrorList;

//         } catch(e){

//             await this.failResult(functionName, testName, testValue, e);

//         }

//     }

 

//     this.sf_checkOptionError = async function (expectedErrorText) {

 

//         var optionLabel = this.do.product.selectedOption;

//         var functionName = 'SFQPO:sf_checkOptionError';

//         var testName = 'Validate Option errors for ' + optionLabel;

//         var testValue = expectedErrorText;

 

//         var optionField = await this.sf_getUniqueOptionElem();

 

//         var preCheckElem = optionField;

//         var preCheckType = 'visible';

 

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

 

//             await logout(functionName + ': About to check if error message is displayed for option '+ optionLabel);

 

//             var actualErrorList = [];

//            // actualErrorList.push(await this.getProductConfigWarning(optionField));

//            actualErrorList = await this.getProductConfigWarning(optionField);

//             await logout('SFPO:sf_checkOptionError: Error message displayed is ' + JSON.stringify(actualErrorList));

   

//             for(var i =0; i< actualErrorList.length; i++){

               

//                  if (await expectedErrorText.indexOf(actualErrorList[i]) > -1){   

//                     await logout(functionName + ' : Error message is displayed as expected');

//                     await this.passResult(functionName, testName, testValue);

//                     return true;

                   

//                 } else {

//                     await logout(functionName + ' : Expected error message is '+expectedErrorText);

//                     await logout(functionName + ' : Actual error message is '  +actualErrorList[i]);

//                     await this.failResult(functionName, testName, testValue, 'Error message is not as expected ');

//                 }

//             }

 

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

 

//     }

 

 

//     this.sf_checkErrorOnCalculatePremium = async function (errorLevel, expectedErrorText) {

 

//         var functionName = 'SFQPO:sf_checkErrorOnCalculatePremium';

//         var testName = 'Validate Errors on clicking Calculate Premium'

//         var testValue = expectedErrorText;

 

//         if(typeof errorLevel == 'undefined'){

//             await logout(functionName + ': Error Level is UNDEFINED');

//             var e = 'ERROR: sf_checkErrorOnCalculatePremium():  Error Level is UNDEFINED';

//             await this.failResult(functionName, testName, testValue, e);

//             return false;

//         }

 

//         await logout(functionName + ': About to check if error is present on clicking Calculate Premium' );

//        try{

//         switch (errorLevel) {

//             case 'Alert':

//                 await logout('SFQPO:sf_checkErrorOnCalculatePremium(): checking error message on Alert window... ');

//                 var alertWindow = element(by.cssContainingText('h2','Alert'));

//                 await browser.wait(protractor.ExpectedConditions.visibilityOf(alertWindow, 30000));

//                 var actualErrorText = await alertWindow.element(by.xpath('../..')).$('p').getText();

               

//                 break;

//             case 'ClientLevel':

//                 await logout(functionName + ':  checking error message at Client Level... ');

//                 var clientNumber = await this.getClientNumber();

//                 var client = this.do.clients[clientNumber];

//                 var clientDetails = client.personalDetails;

//                  try {

//                     var clientContainerElem = element.all(by.cssContainingText('h3', clientDetails.firstName + ' ' + clientDetails.lastName));

//                     await browser.wait(protractor.ExpectedConditions.visibilityOf(clientContainerElem.get(0)), 30000);

//                     var actualErrorListLength =  +await clientContainerElem.count();

//                     await logout(functionName + ': Number of error messages displayed is '+actualErrorListLength);

//                     var actualErrorText = [];

//                     for (var i = 0; i < actualErrorListLength; i++) {

//                         var actualErrorvalue = await clientContainerElem.get(i).element(by.xpath('../..')).$('p').getText();

//                         await actualErrorText.push(await actualErrorvalue);

//                     }

//                     await logout(functionName + ': Error List '+JSON.stringify(actualErrorText));

//                     if(actualErrorListLength > 1){

//                         await logout (functionName + ': More than one error message is displayed');

//                         for (var i=0; i <actualErrorListLength; i++ ){

//                             if (await actualErrorText[i].indexOf(expectedErrorText) > -1){

//                                 await logout(functionName + ' : One of the error message is displayed as expected');

//                                 await this.passResult(functionName, testName, testValue);

//                                 return true;

//                             } else {

//                                 await logout(functionName + ': actualErrorText: '+JSON.stringify(actualErrorText));

//                                 await logout(functionName + ': expectedErrorText: '+expectedErrorText);

//                                 await this.failResult(functionName, testName, actualErrorText[i], 'This error message is not expected to be present');

//                             }

//                         }

//                     }

//                 } catch (e) {

//                     await this.failResult(functionName, 'Checking errors at '+errorLevel, testValue, e);

//                 }

               

//                 break;

//             case 'BenefitLevel':

//                 await logout('SFQPO:sf_checkErrorOnCalculatePremium(): checking error message at Benefit Level ... ');

//                 var actualErrorText = await $('div[class="message description ng-scope"]').getText();

//                 break;

 

//             default:

//                 await logout('SFQPO:sf_checkErrorOnCalculatePremium(): Error: no errorLevel sent, or not found');

//             }

//             if (await actualErrorText.indexOf(expectedErrorText) > -1){

//                 await logout(functionName + ' : Error message is displayed as expected');

//                 await this.passResult(functionName, testName, testValue);

//             } else {

//                 await logout(functionName + ': actualErrorText: '+actualErrorText);

//                 await logout(functionName + ': expectedErrorText: '+expectedErrorText);

//                 await this.failResult(functionName, testName, testValue, 'Error message is not as expected');

//             }

//         } catch (e) {

//         await this.failResult(functionName, testName, testValue, e);

//         }

//     }

 

 

//     this.sf_checkNoOptionError = async function () {

 

//         var functionName = 'SFQPO:sf_checkNoOptionError';

//         var testName = 'Check no errors are present on all Options for ' +this.do.product.selectedProduct;

//         var testValue = this.do.product.selectedProduct;

 

//         var preCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));

//         var preCheckType = 'visible';

       

//         var actualBenefitList = [];

//                                 actualBenefitList = await this.getBenefitListArray();

                                               

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await logout(functionName + ': Checking no errors are present on all Options for ' + testValue + '...');

//             // Looping through each Benefit

//             for (i = 0; i < actualBenefitList.length; i++) {

//                 this.do.product.selectedBenefit = actualBenefitList[i];

//                 await logout(functionName + ': Checking no errors are present for benefit '+actualBenefitList[i]);

//                 //Getting the uniqueBenefitElem to be tested

//                 var uniqueBenefitElem = await this.sf_getUniqueBenefitElemMultipleClients(actualBenefitList[i]);

//                 //Click Show Button

//                 await this.sf_showHideBenefit(actualBenefitList[i], 'Show');

//                 //Counting the number of options displayed

//                 var benefitLevel = uniqueBenefitElem.element(by.xpath('../../../../..'));

//                 var noOfOptions = await benefitLevel.$('.vloc-ins-coverages-coverage-row-attributes-outer-container').$$('label').count();

           

//                 //Storing all displayed options per benefit into an Array 'actualOptionList'

//                 var actualOptionList = [];

//                 for (x = 0; x < noOfOptions; x++) {

//                     var optionName = await benefitLevel.$('.vloc-ins-coverages-coverage-row-attributes-outer-container').$$('label').get(x).getText();

//                     await actualOptionList.push(await optionName);

//                 }

//                 // Looping through each option for that Benefit to check for Errors

//                 for (var j = 0; j < actualOptionList.length; j++) {

//                     this.do.product.selectedOption = actualOptionList[j];

//                     var optionField = await this.sf_getUniqueOptionElem();

//                     //Getting the count of errors if present. If not then, actualerrorListLength == 0 , then passResult

//                     var actualerrorListLength = await optionField.element(by.xpath('../..')).$('ul').$$('li').count();

 

//                     if (actualerrorListLength == 0) {

//                         await this.passResult(functionName, testName, actualBenefitList[i]+ ':'+ actualOptionList[j]);

//                     } else {

//                         await this.failResult(functionName, testName, actualBenefitList[i]+ ':'+actualOptionList[j], 'An error message is present on the option');

//                         return false;

//                     }

//                 }

//             }

//        } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

 

//     }

 

//     this.sf_checkNoErrorOnCalculatePremium = async function(){

 

//         var functionName = 'SFQPO:sf_checkNoErrorOnCalculatePremium';

//         var testName = 'Validate No Errors are present on clicking Calculate Premium'

//         var testValue = this.do.product.selectedProduct;

 

//         var preCheckElem = element(by.cssContainingText('strong', this.do.product.selectedProduct));

//         var preCheckType = 'visible';

 

//         try {

//             await this.preCheck(preCheckElem, preCheckType, functionName, testName);

//             await logout(functionName + ': Checking no errors are present on clicking Calculate Premium for ' + testValue + '...');

//             //Alert Level

//             try{

//                 var alertWindow = element(by.cssContainingText('h2', 'Alert'));

//                 await alertWindow.element(by.xpath('../..')).$('p').click();

//                 await this.failResult(functionName, 'Check no errors are present at Alert Level', testValue, 'Error message is present at Alert Level');

//                 return false;

//             }

//             catch(e){

//                 await this.passResult(functionName, 'Check no errors are present at Alert Level', testValue);

//             }

//             //Client Level

//             try{

//                 var clientNumber = await this.getClientNumber();

//                 var client = this.do.clients[clientNumber];

//                 var clientDetails = client.personalDetails;

//                 var clientContainerElem = element.all(by.cssContainingText('h3', clientDetails.firstName + ' ' + clientDetails.lastName));

//                 var actualErrorListLength =  +await clientContainerElem.count();

//                 if (actualErrorListLength != 0){

//                     await this.failResult(functionName,  'Check no errors are present at Client Level', testValue, 'Error message is present at Client Level');

//                 } else {

//                     await this.passResult(functionName, 'Check no errors are present at Client Level', testValue);

//                 }   

//             }

//             catch(e){

//                 await this.failResult(functionName,  'Check no errors are present at Client Level', testValue, e);

//             }

//             //Benefit Level

//             try{

//                 await $('div[class="message description ng-scope"]').click();

//                 await this.failResult(functionName,  'Check no errors are present at Benefit Level', testValue, 'Error message is present at Benefit Level');

//             }

//             catch(e){

//                 await this.passResult(functionName, 'Check no errors are present at Benefit Level', testValue);

//             }

//         } catch (e) {

//             await this.failResult(functionName, testName, testValue, e);

//         }

//     }

 

 

//     // looking into pdf management of data

//     // this function will move moouse to 200,200 and copy all, then paste into variable

//     this.saveAllContent = async function(){

//         // *** select all

//         await browser.actions().mouseMove($('body'), 200, 200).click().perform();

//         // await browser.actions().mouseMove($('.loginError'), 2, 2).click().perform();

//         await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")).perform();

//         await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "c")).perform();

//         var copiedText = ncp.paste();

//         await logout('copied text is : ' + copiedText);

//         return true;

//     }

//     // example of getting a pdf to correct directory, using conf prefs, and overriding the downloads location

//     this.getPdfDoc = async function(){

//         await logout('getPdfDoc function...');

//         await browser.get('https://www.cigna.co.nz/sites/default/files/policies/CIG785%20LifeOne%20Policy%20Wording.pdf#zoom=100');

//         // await browser.get('https://www.cigna.co.nz/life-insurance/');

//         await browser.sleep(3000);

//         await this.saveAllContent();

//         // await $$('a').get(5).click();

//         //await element(by.cssContainingText('p','upfront about conditions and exclusions. See the full details below:')).element(by.xpath('..')).$$('a').first().click();

//         await browser.sleep(5000);

//     }

    // something api related here

 


