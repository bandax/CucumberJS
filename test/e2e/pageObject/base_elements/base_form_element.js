class FormElement {
    constructor(elementName, elementFormName) {
        this.element = element(by.name(elementFormName));            
        this.elementName = elementName;        
    };
    click() {
        return this.element.click();
    };
    async setText(text) {
        return await this.element.sendKeys(text);        
    };    
    async getText() {
        return await this.element.getAttribute("value");        
    };
}

module.exports = FormElement;