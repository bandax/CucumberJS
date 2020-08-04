
"use strict";
let {Then} = require('cucumber');
const expect = require('chai').expect;
const { browser, element } = require('protractor');
const { getValue } = require('../utils/formElements');

Then(/^All fields are filled out with values ([^"]*),([^"]*),([^"]*),([^"]*),([^"]*)$/, async (firstName, lastName, email, reason, consent) => {      
    const inputFirstName = await getValue('user_first_name');
    const inputLastName = await getValue('user_last_name');
    const inputEmail = await getValue('user_email');
    expect(inputFirstName).to.be.equal(firstName);
    expect(inputLastName).to.be.equal(lastName);
    expect(inputEmail).to.be.equal(email);

});
