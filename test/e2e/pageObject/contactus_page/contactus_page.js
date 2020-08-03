const BasePage = require('../base_page/base_page');
const FormElement = require('../base_elements/base_form_element');
const XPathElement = require('../base_elements/base_xpath_element');
const Element = require('../base_elements/base_element');
const Collection = require('../base_elements/base_collection');

class ContactUsPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.epam.com/about/who-we-are/contact";        
        this.firstName = new FormElement("FirstName", "user_first_name");
        this.lastName = new FormElement("LastName", "user_last_name");
        this.email = new FormElement("Email", "user_email");
        this.phone = new FormElement("Phone", "user_phone");
        this.company = new FormElement("Company", "user_company");
        this.city = new FormElement("City", "user_city");
        this.comments = new FormElement("Comments", "user_comment");        
        this.subjectOptions = new Collection("Subject", "li.select2-results__option")
        this.positionOptions = new Collection("Position", "li.select2-results__option")
        this.heardAboutEpamOptions = new Collection("HeardAboutEpam", "li.select2-results__option")
        this.submitButton = new Element("Submit", ".button-ui");

        this.dropdownSubject = new XPathElement("Subject", 
        "(//div[@class='dropdown-list__input form-component__input'])[1]");

        this.dropdownPosition = new XPathElement("Position", 
        "(//div[@class='dropdown-list__input form-component__input'])[2]");

        this.dropdownHearAboutEpam = new XPathElement("Position", 
        "(//div[@class='dropdown-list__input form-component__input'])[3]");

        this.checkboxConsent = new XPathElement("Consent", 
        "(//label[@class='checkbox__label checkbox-custom-label checkbox__label-text'])[1]")

        this.checkboxSubscribe = new XPathElement("Susbcribe", 
        "(//label[@class='checkbox__label checkbox-custom-label checkbox__label-text'])[2]")

    };
    open() {
        return super.open(this.url);
    };       
}

module.exports = ContactUsPage;