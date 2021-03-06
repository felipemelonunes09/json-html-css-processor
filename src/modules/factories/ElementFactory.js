const { IdentityManager, Visual } = require("../../utils");

class ElementFactory {

    constructor(identityManager = IdentityManager) {
        this.identityManager = IdentityManager();
    }

    build(element) {

        if (element.tag == undefined || element.tag == null)
            return false;
        
        let domElement = document.createElement(element.tag)
        domElement.id = (element.id == null || element.id == undefined) ? this.identityManager.genKey() : element.id;
        domElement.innerHTML = (element.inner == null || element.inner == undefined) ? '' : element.inner;

        // add itens
        if (element.src != null)
            domElement.src = element.src;

        if (element.onClick != null)
            domElement.addEventListener('click', element.onClick, false)

        Visual(domElement).apply(element.styles)
        return domElement;
    }
    

    
}

module.exports = ElementFactory;