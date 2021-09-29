import { style } from "../utils/visual";

export default class ElementFactory {

    static buildParent (data) {

        if (data == undefined && data.root == null)
            return undefined;
        
        let element = document.createElement(data.root)
        element.id = data.id
        element.innerHtml = data.inner

        style(element).apply(data.style)

        return element;
    }

}