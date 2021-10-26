const ElementFactory = require("./factories/ElementFactory")


const JHCP = (config = {}) => {

    const factory = new ElementFactory(config.identityManager);

    const recursiveChildCreation = (data) => {

        let element = factory.build(data)
        if (data.childs != undefined || Array.isArray(data.child) == true) {
            data.childs.forEach((child) => {
                element.appendChild( recursiveChildCreation( child ) )
            })
        }

        return element;
    }

    const build = (data) => {
        
        root = factory.build(data) 
        if (data.childs == undefined || Array.isArray(data.childs) == false)
            return root;

        data.childs.forEach((child) => {
            root.appendChild(recursiveChildCreation(child))
        })

        return root;
    }

    return { build }
}

module.exports = JHCP;

/*
    ideal = {
        tag: 'tag',
        inner: 'inner element'
        id: 'id'
        styles: []
        childs: []
    }

*/