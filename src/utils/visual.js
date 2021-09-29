
export const style = (element) => {

    const apply = (styles) => {
        if (typeof styles == Array) {
            styles.forEach(cssClass => {
                element.classList.add(cssClass)
            })
        }
    }

    return { 
        apply
    }
}