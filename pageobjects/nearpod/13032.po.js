const Log = require("../../functions/log")
const sleep = require('await-sleep')
const SwitchTab = require("../../functions/switchTab")
const { browser, ExpectedConditions } = require("protractor")
// const { browser } = require("protractor")



var applicationPO = function(){


    this.get = async function(){
        console.log('\nNearpod 13032 - Speed Builder: get()...')
        await browser.get('https://www.typesy.com/type/nearpod/13032')

        var elemToCheck = $('#headerTitleDiv > h6')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToCheck), 30000)
        await console.log('Header text: ' + await elemToCheck.getText())
        await expect(await elemToCheck.getText()).toEqual('Speed Builder')

    }

    this.typePage = async function(){
        await console.log('typePage()...')

        

        let elemToType = $$('#wordBox > span')
        
        console.log('looking for word...')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToType.get(0)), 30000)
        console.log('looking for word... success')
       
        let inputElems = $$('input')
        console.log('input count: ' + await inputElems.count())

        let inputElem = inputElems.get(13)
        console.log('looking for input field...')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await inputElem), 30000)
        console.log('looking for input field... success')

        let heading = $('#headerTitleDiv > h6')
        let headingText = await heading.getText()
        console.log('heading: ' + await headingText)

        let oldText
        
        while(await headingText == 'Speed Builder'){
            let inputText = ''

            for(var x=0; x<await elemToType.count(); x++){
                
                inputText += await elemToType.get(x).getText()
                
            }
            
            //console.log('word to type: ' + await inputText)

            if(await inputText != oldText && await inputText.length > 0){
                await inputElem.sendKeys(await inputText)
            }

            headingText = await heading.getText()
            oldText = await inputText

            await browser.sleep(500)

        }

        console.log('end of while loop... success screen')


        

    }

}
module.exports = applicationPO





