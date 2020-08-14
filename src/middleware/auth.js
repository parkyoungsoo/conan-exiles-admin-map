const auth =  require('basic-auth')
const config =  require('../config')

const authMiddleware = (app) => {

  const users = config.USERS

  app.use((req, res, next) => {
    const user = auth(req)

    if (!Object.keys(users).length) {
      return next()
    }

    if (!user || !users[user.name] || users[user.name] !== user.pass) {
      res.setHeader('WWW-Authenticate', 'Basic realm="ConanExilesAdminMap"')
      return res.status(401).send('Unauthorized')
    }

    return next()
  })

}

module.exports = authMiddleware
