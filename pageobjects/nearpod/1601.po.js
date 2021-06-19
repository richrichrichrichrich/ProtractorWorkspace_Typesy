const Log = require("../../functions/log")
const sleep = require('await-sleep')
const SwitchTab = require("../../functions/switchTab")
const { browser } = require("protractor")
// const { browser } = require("protractor")



var applicationPO = function(){


    this.get = async function(){
        console.log('\nNearpod 1601 - Dictation Activity: get()...')

        await browser.get('https://www.typesy.com/type/nearpod/1601')

        var elemToCheck = $('#headerTitleDiv > h6')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await elemToCheck), 30000)
        await console.log('h6 text: ' + await elemToCheck.getText())
        await expect(await elemToCheck.getText()).toEqual('Dictation Activity')
        console.log('Launched Dictation Activity')

    }

    this.typePage = async function(speed){
        console.log('typePage()...')
        if(speed == undefined){speed=''}

        let sentenceText=''
        if(speed.toUpperCase()=='FAST'){
            sentenceText = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way--in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.'
        }
        var header = $('#headerTitleDiv > h6')

        var textArea = $('textarea')
        await browser.wait(protractor.ExpectedConditions.presenceOf(textArea), 30000)
        console.log('Found text area...')

        // var currentLetterExists = true
        //var currentLetterText=''

        var currentLetterEl = $('.currentLetter')
        await browser.wait(protractor.ExpectedConditions.presenceOf(currentLetterEl), 30000)
        console.log('Found current letter ...')

        //let sentenceText = ''
        // turn on all letters
        let turnOnSentence = $('span[class="icon-visibility_outline options-icon"]')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await turnOnSentence), 30000)
        console.log('Found ShowSentence button...')
        await turnOnSentence.click()

        // get all letters
        let allLettersElems = $$('#textCell')
        await browser.wait(protractor.ExpectedConditions.presenceOf(await allLettersElems.first()), 30000)
        console.log('Found first textCell..')
        // let allLettersElems = $$('#textTyper > text-cell > span')
        // build sentence

        let currentLetterElem
        let currentLetterText

        console.log('allLettersElems.count(): ' + await allLettersElems.count())

        if(sentenceText.length==0){
            for(var x=0;x<await allLettersElems.count(); x++){
                currentLetterElem = allLettersElems.get(x)
                currentLetterText = currentLetterElem.getText()
                
                letterStyle = await currentLetterElem.getAttribute('style')
                // console.log('letter: ' + await currentLetterText + '  letterStyle: ' + await letterStyle)
                
    
                if(letterStyle.includes('transparent')){
                    // console.log('transparent character')
                    sentenceText += " "
                }else{
                    // console.log('letter: ' + await currentLetterText)
                    sentenceText += await currentLetterText
                }
    
                if(x%40==0){
                    console.log('sentence builder: ' + x + '/' + await allLettersElems.count())
                }
    
    
                // console.log('sentence builder: ' + await sentenceText)
            }
        }
        

        console.log('full sentence: ' + await sentenceText)

        while(await header.getText() == 'Dictation Activity'){

            let activityPaused = element(by.cssContainingText('span','Activity is paused, press any key to resume.'))

            if(await activityPaused.isPresent() == true){
                await textArea.sendKeys(' ')
            }
            
            await textArea.sendKeys(await sentenceText)

            await browser.sleep(5000)

            // currentLetterEl = $('.currentLetter')
            // letterStyle = await currentLetterEl.getAttribute('style')

            // if(letterStyle.includes('transparent')){
            //     currentLetterText = " "
            // }else{
            //     currentLetterText = await currentLetterEl.getText()
            // }

            // await textArea.sendKeys(currentLetterText)

                // currentLetterEl = $('.currentLetter')
                // await browser.wait(protractor.ExpectedConditions.presenceOf(currentLetterEl), 30000)

            header = $('#headerTitleDiv > h6')

        }

    }

}
module.exports = applicationPO





