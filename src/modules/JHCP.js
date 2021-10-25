const ElementFactory = require("./factories/ElementFactory")


const JHCP = (config = {}) => {


    const factory = new ElementFactory(config.identityManager);

    build = (data) => {

        root = factory.build(data)     
        console.log(root)
    }

    return {
        build
    }
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