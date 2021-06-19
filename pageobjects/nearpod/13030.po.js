const Log = require("../../functions/log")
const sleep = require('await-sleep')
const SwitchTab = require("../../functions/switchTab")
const { browser } = require("protractor")
// const { browser } = require("protractor")



var applicationPO = function(){


    this.get = async function(){
        console.log('\nNearpod 13030 - Falling Words: get()...')

        await browser.get('https://www.typesy.com/type/nearpod/13030')

        var elemToCheck = $('#headerTitleDiv > h6')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToCheck), 30000)
        await console.log('h6 text: ' + await elemToCheck.getText())
        await expect(await elemToCheck.getText()).toEqual('Falling Words')

    }

    this.typePage = async function(){
        await console.log('typePage()...')

        let elemToType = $('.fallingWord')
        // let elemToType = $('div[class="fallingWord"]')
        console.log('looking for falling word...')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToType), 30000)
        let wordIsFalling = await elemToType.isPresent()
        console.log('looking for falling word... success')
       

        let inputElems = $$('input')
        console.log('input count: ' + await inputElems.count())

        let inputElem = inputElems.get(13)
        console.log('looking for input field...')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await inputElem), 30000)
        console.log('looking for input field... success')

        let heading = $('#headerTitleDiv > h6')
        let headingText = await heading.getText()
        console.log('heading: ' + await headingText)
        
        while(await headingText == 'Falling Words'){
            
            elemToType = $('.fallingWord')
            let inputText = await elemToType.getText()
            // console.log('word to type: ' + await inputText)

            if(await inputText.length>0){
                await inputElem.sendKeys(inputText)
            }
            

            headingText = await heading.getText()

        }

        console.log('end of while loop... success screen')


    

    }

}
module.exports = applicationPO





