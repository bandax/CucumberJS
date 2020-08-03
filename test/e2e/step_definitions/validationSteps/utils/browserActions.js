const { browser } = require('protractor');

async function scrollToBottom() {
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
}

async function scrollToView() {
    return await browser.executeScript(`window.scrollIntoView()`);
}

async function scrollTo(value) {
    return await browser.executeScript(`window.scrollIntoView(${value})`);
}


module.exports = { scrollToBottom, scrollToView, scrollTo }