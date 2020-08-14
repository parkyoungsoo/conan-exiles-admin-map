const applicationMiddleware =  require('./app')
const authMiddleware =  require('./auth')
const databaseMiddleware =  require('./database')
const languageMiddleware =  require('./language')
const staticMiddleware =  require('./static')

const middleware = (app) => {

  applicationMiddleware(app)

  authMiddleware(app)
  databaseMiddleware(app)
  languageMiddleware(app)
  staticMiddleware(app)

}

module.exports = middleware
