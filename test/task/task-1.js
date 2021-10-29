const { button } = require("../../src/buildin/essentials")

const task_1 = () => {
    const features = ['tag', 'inner', 'id']
    const expected = { 
        tag: 'button',
        inner: 'new button',
        id: 'button-1'
    }

    let obj_button = button('new button', () => console.log('testing item') , 'button-1', [], [])
    features.forEach(feat => {
        if (expected[ feat ] != obj_button[feat]) 
            throw new Error('Objeto com propriedade invalidas')
    })

    console.log('[TASK - 1] - SUCCESS')
}

module.exports = task_1;

