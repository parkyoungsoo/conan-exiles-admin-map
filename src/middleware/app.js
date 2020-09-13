const path = require('path')
const config = require('../config')

const applicationMiddleware = (app) => {

  app.set('port', config.SETTINGS.port)
  app.set('rootFolder', path.join(__dirname, '../../'))
  
  app.set('views', [path.join(__dirname, '../views'), path.join(__dirname, 'views')])
  // app.set('views', ['./views', '/views', './lib/views', path.join(__dirname, '../views')])

  
  app.engine('ejs', require('ejs').__express)
  app.set('view engine', 'ejs')

  // variable for index.ejs
  app.locals.langName = config.SETTINGS.language
  app.locals.admin = config.ADMIN.admin

}

module.exports = applicationMiddleware
