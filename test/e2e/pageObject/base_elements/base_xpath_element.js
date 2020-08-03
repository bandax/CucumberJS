class XPathElement {
    constructor(elementName, XPathSelector) {        
        this.elementName = elementName;
        this.element = element(by.xpath(XPathSelector))
    };
    click() {
        return this.element.click();
    };        
}

module.exports = XPathElement;