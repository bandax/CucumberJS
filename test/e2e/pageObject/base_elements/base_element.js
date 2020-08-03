class Element {
    constructor(elementName, selector) {
        if(element(by.css(selector)).isPresent()){
            this.element = element(by.css(selector));        
            this.elementName = elementName;       
        }else{
            this.element = null;        
            this.elementName = null;       
        }
    };
    click() {
        return this.element.click();
    };
    async getText() {
        const elementText = await this.element.getText();
        return elementText;
    }
}

module.exports = Element;