const Polyglot = require('node-polyglot')

const config = require('../config')
const languages = require('../languages')

const languageMiddleware = (app) => {

  let language = config.SETTINGS.language

  if (!languages[language]) {
    language = 'en'
  }

  const polyglot = new Polyglot({
    locale: language,
    phrases: languages[language]
  })

  app.use((req, res, next) => {
    res.lang = {
      locale: language,
      phrases: polyglot.phrases
    }
    return next()
  })

}

module.exports = languageMiddleware
