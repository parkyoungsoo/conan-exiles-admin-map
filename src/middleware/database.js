const {statSync} = require('fs')
const config = require('../config')

const databaseMiddleware = (app) => {

  const database = config.CONAN_EXILES.database

  app.set('database', database)

  app.use((req, res, next) => {
    res.database = {
      file: database,
      time: (() => {
        var update = statSync(database)
        update = new Date(update.mtime).toLocaleString()
        return update
      })()
    }
    next()
  })

}

module.exports = databaseMiddleware
