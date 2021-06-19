const { WebDriver } = require("selenium-webdriver")
const sleep = require('await-sleep')
const NP1485 = require('../pageobjects/nearpod/1485.po.js')
var np1485 = new NP1485()
const NP1601 = require('../pageobjects/nearpod/1601.po.js')
var np1601 = new NP1601()
const NP13030 = require('../pageobjects/nearpod/13030.po.js')
var np13030 = new NP13030()
const NP13032 = require('../pageobjects/nearpod/13032.po.js')
var np13032 = new NP13032()
const NP13034 = require('../pageobjects/nearpod/13034.po.js')
var np13034 = new NP13034()

describe('Lite-touch automation',  function() {
    browser.waitForAngularEnabled(false);

    it('Nearpod 1485', async function(){   
        
        await np1485.get()
        await np1485.typePage('fast')
        await sleep(1000)

    })

    it('Nearpod 1601', async function(){   

        await np1601.get()
        await np1601.typePage('fast')
        await sleep(1000)

    })

    it('Nearpod 13030', async function(){   

        await np13030.get()
        await np13030.typePage()
        await sleep(1000)

    })

    it('Nearpod 13032', async function(){   

        await np13032.get()
        await np13032.typePage()
        await sleep(1000)

    })

    it('Nearpod 13034', async function(){   

        await np13034.get()
        await np13034.typePage('fast')
        await sleep(1000)

    })



})

//references to pages to automate
// Lesson Introduction
// https://www.typesy.com/type/nearpod/1299
// page loads and video present

// Typing Activity DONE
// https://www.typesy.com/type/nearpod/1485

// Video Lesson
// https://www.typesy.com/type/nearpod/1297

// Dictation Activity DONE
// https://www.typesy.com/type/nearpod/1601

// Game (Falling Words) DONE
// https://www.typesy.com/type/nearpod/13030

// Game (Speed Builder) DONE
// https://www.typesy.com/type/nearpod/13032

// Game (Letter Train) DONE
// https://www.typesy.com/type/nearpod/13034

