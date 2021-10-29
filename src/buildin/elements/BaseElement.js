const model = require("../../modules/JHCP.js")

const handler = {
    set: (obj, prop, value) => { 
        
        if (prop == 'tag' || prop == 'inner' ||  prop == 'styles') { 
            if (obj['area'] != undefined) {
                try  {
                    obj[prop] = value
                    obj['_holder'].reload();
                }
                catch (e) { 
                    console.log(e)
                    return true
                }
            }
        }

        obj[prop] = value
        return true
    }
}

class Element { 

    constructor(tag, inner, area, id, styles, config) {

        let _holder = this
        let preObject = {
            tag, 
            inner, 
            id,
            area, 
            styles,
            _holder
        }

        this.object = new Proxy(preObject, handler)
    }    

    build() {

        if (this.object == undefined)
            return false;

        const JHCP = model()

        let el = JHCP.build(this.object)
        let area = document.getElementById( this.object.area )

        if (this.object.area == undefined || area == undefined)
            return el

        this.object.id = el.id
        area.appendChild(el)

        console.log(this.object)

        return true;
    }

    reload() { 
        
        // missing validation insted use getValidObject()
        const JHCP = model();
        let el = JHCP.build( this.object )

        let area = document.getElementById( this.object.area )
        
        if (this.object.area == undefined || area == undefined)
            return el

        console.log(el)

        area.removeChild( document.getElementById( this.object.id ) )
        area.appendChild( el )
        

    }

    // warning wait for full implementation
    getValidObject() { 

    }
    
}

module.exports = Element