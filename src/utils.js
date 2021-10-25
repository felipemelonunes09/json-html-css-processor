
// warning wait for full implementation
const IdentityManager = () => {

    const genKey = () => {
        return Math.random() * Date.now();
    }

    return { genKey }
}

const Visual = (element) => {

    const apply = (styles) => {

        if (styles == undefined || element == undefined || element.classList == undefined)
            return ;

        styles.forEach(sh => {
            element.classList.add(sh)
        })

        return element;
    }

    return { apply }
}

module.exports = {
    IdentityManager,
    Visual
}