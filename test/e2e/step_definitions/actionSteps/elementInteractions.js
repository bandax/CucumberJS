"use strict";
const { Then, Given } = require('cucumber');
const logger = require('../../../../config/loggerConfig').logger;
const { getTextElement, clickElement, setInputValues } = require('../validationSteps/utils/elementEvents');
const Collection = require('../../pageObject/base_elements/base_collection');
const Element = require('../../pageObject/base_elements/base_element');
const { elementToBeClickable, visibilityOf } = require('../validationSteps/utils/expectedConditions');
const { browser } = require('protractor');
const { scrollToView, scrollTo } = require('../validationSteps/utils/browserActions');


Then(/^There is a button with the text "([^"]*)"$/, async (text) => {
    logger.info(`Button with text  ${text}`);
    return getTextElement(".cta-button-ui");
});

Then("Click on the button", () =>{
    clickElement(".cta-button-ui");
});

Then(/^Click accept the cookies ([^"]*)$/, async (clickButton) =>{
    const acceptButtonCookie = new Element('Accept Cookie button', '.button__content');       
    if(clickButton === 'Yes')
    {     
        await elementToBeClickable(acceptButtonCookie.element);    
        return acceptButtonCookie.click();
    }   
    return;
});


Then(/^I fill out the form with ([^"]*),([^"]*),([^"]*),([^"]*),([^"]*)$/, async(firstName, lastName, email, reason, consent) => {    
    const arrayInputControls = [{
        Name: "user_first_name", //user_first_name
        Value: firstName
    },{
        Name: "user_last_name",
        Value: lastName
    },{
        Name: "user_email",
        Value: email
    }]
    await setInputValues(".layout-box__wrapper", arrayInputControls);

    
    const dropdownControls = new Collection("Contact dropdowns", ".dropdown-list__input");    
    const optionsSelector = "li.select2-results__option";
    await dropdownControls.clickElementByIndex(0); // reason
    const reasonOptions = new Collection("Reasons", optionsSelector);        
    await elementToBeClickable(reasonOptions.collection.get(0));
    await reasonOptions.clickElementByText(reason);    

    // todo: Implement all dropdowns and checkboxes selections
    
    // dropdownControls.clickElementByIndex(1); // position
    // dropdownControls.clickElementByIndex(2); // how heard about epam
    
   
        
    const checkboxControls = new Collection("Contact checkboxes", ".checkbox__label")
    if(consent === "Yes"){                
        await checkboxControls.clickElementByIndex(0);
    }
    await browser.sleep(3000); 

    
});
