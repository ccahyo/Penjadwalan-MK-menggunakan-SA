const hostname = '127.0.0.1';
const port = 8080;
const express = require('express')
const app = express()

app.get('/', (request, response) => response.send('Hello World!'))

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`))