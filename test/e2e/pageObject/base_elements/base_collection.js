class Collection {
    constructor(elementName, selector) {
        this.collection = element.all(by.css(selector));
        this.elementName = elementName;
    };
    async getCount() {
        const collectionCount = await this.collection.count();
        return collectionCount;
    };
    async getTexts(){
        const arrayOfElementTexts = await this.collection.getText();
        return arrayOfElementTexts;
    };
    async setText(text) {
        return await this.element.sendKeys(text);        
    };       
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);        
        if(elementToClickIndex == -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        return this.collection.get(elementToClickIndex).click();
    };
    async clickElementByIndex(indexElement) {        
        return this.collection.get(indexElement).click();
    };
}

module.exports = Collection;