const { browser, element } = require("protractor");
const EC = protractor.ExpectedConditions;
const timeout = 20000;

async function titleIs(title) {
    return await browser.wait(EC.titleIs(title), timeout);
};

async function elementToBeClickable(element) {
    return await browser.wait(EC.elementToBeClickable(element), timeout);
};

async function visibilityOf(element){
    return await browser.wait(EC.visibilityOf(element), timeout);
}

async function elementToBeSelected(element){
    return await browser.wait(EC.elementToBeSelected(element), timeout);
}


module.exports = { titleIs, elementToBeClickable, visibilityOf, elementToBeSelected }