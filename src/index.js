const Element = require('./buildin/elements/BaseElement.js');
const { essentials, p, div, section, img, button } = require('./buildin/essentials.js');
const model = require('./modules/JHCP.js');
const JHCP = model()

const element = new Element('div', 'minha div', 'body', undefined, ['class-1'], { })

const obj = { tag: 'div', inner: 'nested child div inserted after build' }

element.addChild({ tag: 'div', inner: 'div por objeto bruto' }, true)
element.addChild(div('div por buildin object') , true)
element.addChild(new Element('div', 'div por elementBase class'), true)
console.log(element.addChild('banana', true))

element.build();
//element.removeChild(0)
//element.object.childs[0].inner = 'teste mudando div child de forma dinamica'

element.addChild({ tag: 'div', inner: 'div depois da build' }, true)

const btn = button('mudar dinamicamente', () => {
    element.object.inner = 'Div que mudou de forma dinamica'
    element.object.childs.push( obj )
    element.reload();

    //element.destroy();
    element.show(false)
})


document.querySelector('body').appendChild( JHCP.build(btn) )


/*const object = { 
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

//const element = JHCP.build(object)
//document.querySelector('body').appendChild(element)

const obj1 = { 
    ...div('Div teste', 'div-teste', ['class-1', 'class-2'], 
    [
        p('Texto teste', undefined, ['p'], [
            section('uma section aqui', 'section-id', ['section-class'])
        ]),
        div('div-1', undefined, ['class-3'], [
            div('Um texto super refinado para minha div'),
            img('https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg')
        ]),
        button('Aperte me', () => alert('Opa eu sou um botão gerado totalmente via javascript'))
    ])
}

const el1 = JHCP.build(obj1)
console.log(el1);

document.querySelector('body').appendChild(el1)*/