const essentials = (inner = '', styles = [], childs = [], id) => {

    let prelement = { 
        inner, 
        styles,
        childs,
        id
    }

    const p = () => {
        prelement.tag = 'p'
        return prelement;
    }
    
    const div = () => {
        prelement.tag = 'div'
        return prelement;
    }
    
    const label = () => {
        prelement.tag = 'label'
        return prelement;
    }
    
    const section = () => {
        prelement.tag = 'section'
        return prelement;
    }
    
    return {
        p,
        div,
        label,
        section
    }
}


module.exports = {
    essentials
}