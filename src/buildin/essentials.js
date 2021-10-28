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

const div = (inner, id, styles,  childs, onClick) => {
    return {
        ...essentials(inner, id, styles,  childs),
        onClick,
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

const img = (src, id, styles, childs) => {
    return {
        tag: 'img',
        src, 
        id, 
        styles, 
        childs
    }
}

const button = (inner, onClick, id, styles, childs) => {
    return { 
        ...essentials(inner, id, styles, childs),
        onClick,
        tag: 'button'
    }
}


module.exports = {
    essentials,
    p,
    div,
    label,
    section,
    button,
    img
}