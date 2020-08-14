const {join} = require('path')
const express = require('express')

const staticMiddleware = (app) => {
  app.use('/assets', express.static(join(app.get('rootFolder'), 'public/assets')))
  app.use('/assets', express.static(join(app.get('rootFolder'),'conan-exiles-admin-map/public/assets')))
}

module.exports = staticMiddleware
