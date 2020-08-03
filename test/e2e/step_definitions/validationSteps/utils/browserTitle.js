
"use strict";
let {Then} = require('cucumber');
const expect = require('chai').expect;
const { browser } = require('protractor');
const logger = require('../../../../../config/loggerConfig').logger;
const { titleIs } = require('./expectedConditions');

Then(/^Title of page should be "([^"]*)"$/, async (title) => {   
    logger.info(`${title} of the page`);  
    await titleIs(title);
    return expect(await browser.getTitle()).to.be.equal(title);
});
