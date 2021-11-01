/* 
    list scructure 
    <ul>
        <li>
        <li>
        <li>
    <ul>
    
*/

const Element = require("./BaseElement");
class List extends Element { 

    constructor(title, area, itens, styles = [], id, config = { }) {
        super('ul', undefined, area, id, styles, config)
    }
}