const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class TrebuchetsController extends BaseController {

  getSql () {
    return queries.trebuchets
  }

}

module.exports = TrebuchetsController
