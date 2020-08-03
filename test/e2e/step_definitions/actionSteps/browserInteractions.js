"use strict";
const { Given } = require('cucumber');
const logger = require('../../../../config/loggerConfig').logger;


Given(/^I open "([^"]*)" url$/, async (url) => {
    logger.info(`I open ${url} url`);
    browser.ignoreSynchronization = true;
    await browser.manage().window().maximize();
    return browser.get(url);
});



