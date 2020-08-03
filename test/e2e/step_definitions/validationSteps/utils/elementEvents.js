const { browser, element } = require("protractor");
const { sendKeys } = require('./formElements');

function clickElement(selector) {
    return element(by.css(selector)).click();
};

async function getTextElement(selector) {
    return await element(by.css(selector)).getText();
};

async function setInputValues(selector, arrayControls) {   
    for(let i = 0; i < arrayControls.length; i++){
        await sendKeys(arrayControls[i].Name, arrayControls[i].Value)
    }    
};

module.exports = { clickElement, getTextElement, setInputValues }