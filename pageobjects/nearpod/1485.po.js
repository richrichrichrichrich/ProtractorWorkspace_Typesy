const Log = require("../../functions/log")
const sleep = require('await-sleep')
const SwitchTab = require("../../functions/switchTab")
// const { browser } = require("protractor")



var applicationPO = function(){


    this.get = async function(){
        console.log('\nNearpod 1485 - Typing Lesson: get()...')

        await browser.get('https://www.typesy.com/type/nearpod/1485')

        var elemToCheck = $('#headerTitleDiv > h6')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToCheck), 30000)
        await console.log('h6 text: ' + await elemToCheck.getText())
        await expect(await elemToCheck.getText()).toEqual('Typing Lesson')

    }

    this.typePage = async function(speed){
        await console.log('typePage()...')

        var sentenceEl = $('#textTyper')
        await browser.wait(protractor.ExpectedConditions.presenceOf(sentenceEl), 30000)
        console.log('Raw sentence text: ' + await sentenceEl.getText())

        var sentenceLetters = sentenceEl.$$('span')
        await browser.wait(protractor.ExpectedConditions.presenceOf(sentenceLetters), 30000)
        console.log('sentenceLetters length: ' + await sentenceLetters.count())

        var sentenceCleansed = ''
        var letterStyle = ''
        var letterEl
        var sentenceLength = await sentenceLetters.count()

        if(speed.toUpperCase() != 'FAST'){
            for(var x=0; x<sentenceLength; x++){

                letterEl = await sentenceLetters.get(x)
    
                letterStyle = await letterEl.getAttribute('style')
    
                if(letterStyle.includes('transparent')){
                    sentenceCleansed += " "
                }else{
                    sentenceCleansed += await letterEl.getText()
                }
                if(x%40==0){
                    console.log('sentence builder: ' + x + '/' + sentenceLength)
                }
    
            }
        }
        else{
            sentenceCleansed = 'the and for are but not you all any can her was one our out day get has him his how man new now old see two way who boy did its let put say she too use dad mom act bar car dew eat far gym hey ink jet key log mad nap odd pal ram saw tan urn vet wed yap zoo try why men bed had may'
        }
        
 
        console.log('FINAL SENTENCE: ' + sentenceCleansed)

        var textArea = $('textarea')
        await browser.wait(protractor.ExpectedConditions.presenceOf(textArea), 30000)

        await textArea.sendKeys(sentenceCleansed)

    }

}
module.exports = applicationPO





