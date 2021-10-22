const app = require('../src/app');
const cors = require('cors')

const PORT = process.env.PORT || 8081; // warning wait for env implementation

app.use(cors())
app.listen(PORT, () => {
    console.log(`Service running on port: ${PORT}`)
})