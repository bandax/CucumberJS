const BasePage = require('./base_page/base_page');
const HomePage = require('./home_page/home_page');
const ContactUsPage = require('./contactus_page/contactus_page');

class PageFactory {
    static getPage(pageName) {
        switch(pageName) {
            case "Home":
                return new HomePage();
            case "Contact Us":
                return new ContactUsPage();
            default:
                return new BasePage();
        }
    }
}

module.exports = PageFactory;