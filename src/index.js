const model = require('./modules/JHCP.js');
const JHCP = model()

object = { 
    tag: 'div',
    id: 'div-1',
    inner: 'Minha div 1',
    styles: ['class-1', 'class-2'],
    childs: [
        {
            tag: 'div',
            id: 'div-1',
            inner: 'Minha div 1',
            styles: ['class-1', 'class-2']
        },
        {
            tag: 'div',
            id: 'div-2',
            inner: 'Minha div 2',
            styles: ['class-teste', 'class-teste'],
        }
    ]
};

JHCP.build(object)


