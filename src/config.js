const { existsSync, readFileSync } = require('fs')
const {join} = require('path')
const ini = require('ini')

const configFile = join(process.cwd(), 'conan-exiles-admin-map.ini')

let config = {
  SETTINGS: {
    language: 'en',
    port: 3001
  },
  CONAN_EXILES: {
    database: join(process.cwd(), 'game.db')
  },
  USERS: {}
}

if (existsSync(configFile)) {
  const contents = ini.parse(readFileSync(configFile, 'UTF8'))
  config = Object.assign({}, config, contents)
}

module.exports = config
