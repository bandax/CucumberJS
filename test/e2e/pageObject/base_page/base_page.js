const Header = require('../base_page/header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    wait(waitingInMiliSeconds) {
        return browser.sleep(waitingInMiliSeconds);
    };
    async getCurrentUrl() {
        const currentUrl = browser.getCurrentUrl();
        return currentUrl;
    };
    open(url) {
        return browser.get(url);
    };
    async getTitle() {
        const titlePage = await browser.getTitle();
        return titlePage;
    };
}

module.exports = BasePage;