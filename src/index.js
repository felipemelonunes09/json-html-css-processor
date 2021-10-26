const model = require('./modules/JHCP.js');
const JHCP = model()

object = { 
    tag: 'div',
    styles: ['class-1', 'class-2'],
    childs: [
        {
            tag: 'div',
            inner: 'Minha div 2',
            styles: ['class-3', 'class-5'],
            childs: [
                {
                    tag: 'img',
                    styles: ['img-class-1']
                }
            ]
        },
        {
            tag: 'div',
            inner: 'Minha div 3',
            childs: [ 
                {
                    tag: 'div',
                    id: 'minha-div',
                    childs: [
                        {
                            tag: 'p',
                            inner: 'Texto criado com muito amor e carinho'
                        }
                    ]
                }
            ]
        }
    ]
};

const element = JHCP.build(object)
document.querySelector('body').appendChild(element)


