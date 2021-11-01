const model = require("../../modules/JHCP.js")

const handler = {
    set: (obj, prop, value) => { 
        if (prop == 'tag' || prop == 'inner' ||  prop == 'styles' || prop == 'childs') { 
            if (obj['area'] != undefined || obj['_ischild'] == true) {
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

    constructor(tag, inner, area, id, styles = [], config) {

        let _holder = this
        let preObject = {
            tag, 
            inner, 
            id,
            area, 
            styles,
            childs: [],
            _holder
        }

        this.object = new Proxy(preObject, handler)
    }    

    build() {

        if ( this.getValidObject()) {

            const JHCP = model()
            let el = JHCP.build(this.object)
            let area = document.getElementById( this.object.area )

            if (this.object.area == undefined || area == undefined)
                return el

            this.object.id = el.id
            area.appendChild(el)

            return true;
        }

        return false;
    }

    reload() { 
        
        if ( this.getValidObject() ) {
            const JHCP = model();
            let el = JHCP.build( this.object )

            let area = document.getElementById( this.object.area )
            
            if (this.object.area == undefined || area == undefined)
                return el

            try {
                area.removeChild( document.getElementById( this.object.id ) )
                area.appendChild( el )
            }
            catch (e) {

            }
        }
    }

    addChild(data, sync = true) {
        
        if (this.getValidObject() == false || data == undefined || ( data.tag == undefined && data.object == undefined ))
            return false;

        let preObject = (data.tag != undefined) ? data : { ...data.object }
        preObject._holder = this; // changing to the main holder
        preObject._ischild = true;

        if (sync) 
            preObject = new Proxy(preObject, handler) 
        
        this.object.childs.push( preObject )
        this.reload();
        
        return true
    }

    removeChild(id) { 
        if (this.getValidObject() && this.object.childs != undefined) {
            let aux = []
            this.object.childs[id] = undefined
            this.object.childs.forEach(obj => {
                if (obj != undefined)
                    aux.push(obj)
            })
            this.object.childs = aux;

            this.reload()
        }
    }

    show (yesOrNo = true) {

        if (this.getValidObject()) {
            let object = document.getElementById( this.object.id )
            if (object) {
                object.hidden = yesOrNo;
            }
        }
    }

    destroy() {
        if ( this.getValidObject()){

            let area = document.getElementById( this.object.area )
            let object = document.getElementById( this.object.id )

            try  { 
                area.removeChild(object)
            } catch(e) { console.log(e) }

        }
    }

    getValidObject() { 
        if ( this.object == undefined || this.object.tag == undefined ) 
            return false
        return this.object;
    }
    
}

module.exports = Element