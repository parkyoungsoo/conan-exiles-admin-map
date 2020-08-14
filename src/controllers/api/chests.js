const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class ChestsController extends BaseController {

  getSql () {
    return queries.chests
  }

}

module.exports = ChestsController
