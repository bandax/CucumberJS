const { browser, element } = require("protractor");
const Collection = require('../../../pageObject/base_elements/base_collection');

async function sendKeys(name, value) {
    return await element(by.name(name)).sendKeys(value);
};

async function getValue(name) {
    return await element(by.name(name)).getAttribute("value");
};

module.exports = { sendKeys, getValue }