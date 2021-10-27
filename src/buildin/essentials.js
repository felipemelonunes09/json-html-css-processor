const essentials = (inner = '', id, styles = [], childs = []) => {
    return { 
        inner,
        id,
        styles, 
        childs
    }
}

const p = (inner, id, styles,  childs) => {
    return {
        ...essentials(inner, id, styles,  childs),
        tag: 'p'
    }
}

const div = (inner, id, styles,  childs) => {
    return {
        ...essentials(inner, id, styles,  childs),
        tag: 'div'
    }
}
const label = (inner, id, styles,  childs) => {
    return {
        ...essentials(inner, id, styles,  childs),
        tag: 'label'
    }
}
const section = (inner, id, styles,  childs) => {
    return {
        ...essentials(inner, id, styles,  childs),
        tag: 'section'
    }
}


module.exports = {
    essentials,
    p,
    div,
    label,
    section
}