const express = require('express')

const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'working'
    })
})

app.listen(PORT, () => console.log(`Server has been started at ${PORT} port`))