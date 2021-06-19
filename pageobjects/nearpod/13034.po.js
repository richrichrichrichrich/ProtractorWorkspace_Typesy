const Log = require("../../functions/log")
const sleep = require('await-sleep')
const SwitchTab = require("../../functions/switchTab")
const { browser, ExpectedConditions } = require("protractor")
// const { browser } = require("protractor")



var applicationPO = function(){


    this.get = async function(){
        console.log('\nNearpod 13034 - Letter Train: get()...')
        await browser.get('https://www.typesy.com/type/nearpod/13034')

        var elemToCheck = $('#headerTitleDiv > h6')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToCheck), 30000)
        await console.log('Header text: ' + await elemToCheck.getText())
        await expect(await elemToCheck.getText()).toEqual('Letter Train')

    }

    this.typePage = async function(speed){
        await console.log('typePage()...')

        if(speed == undefined){speed=''}

        let elemToType = $$('#sentenceBox > span')
        
        console.log('looking for sentence...')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToType.get(0)), 30000)
        console.log('looking for sentence... success')
       
        let inputElems = $$('input')
        console.log('input count: ' + await inputElems.count())

        let inputElem = inputElems.get(13)
        console.log('looking for input field...')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await inputElem), 30000)
        console.log('looking for input field... success')

        let heading = $('#headerTitleDiv > h6')
        let headingText = await heading.getText()
        console.log('heading: ' + await headingText)

        let oldLetterCount=0
        let inputText = ''

        while(await headingText == 'Letter Train'){
            
            if(speed.toUpperCase() != "FAST"){
                let currentLetterElem = $$('#sentenceBox > span').first()
                let letterCount = $$('#sentenceBox > span').count()

                if(await letterCount != oldLetterCount){

                    if(await currentLetterElem.getText() == "_"){
                        //console.log('letter: ' + ' ')
                        inputText += " "
                        await inputElem.sendKeys(' ')
                    }else{
                        //console.log('letter: ' + await currentLetterElem.getText())
                        inputText += await currentLetterElem.getText()
                        await inputElem.sendKeys(await currentLetterElem.getText())
                    }
                    
                    oldLetterCount = await letterCount
                }

                headingText = await heading.getText()

            }else{
                let sentenceFull = 'fad lass alfalfa lad fads lads salsa a salsa alas fad alfalfa lads a lass sad dad fads'
                await inputElem.sendKeys(sentenceFull)
                break
            }
            headingText = await heading.getText()

        }
        console.log('sentence to type: ' + await inputText)
        console.log('end of while loop... success screen')

    }

}
module.exports = applicationPO





