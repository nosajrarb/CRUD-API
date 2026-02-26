const express = require("express")
const app = express()
const PORT = 2121

app.get('/', (req, res) => {
    res.send('🏠')
})

app.listen(PORT, () => {console.log('Server: ✅')})