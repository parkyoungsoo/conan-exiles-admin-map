const express = require('express')

const middleware = require('./middleware')
const routes = require('./routes')

const app = express()

middleware(app)
routes(app)

app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}`))
