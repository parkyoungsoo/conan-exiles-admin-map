const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class CrabPotsController extends BaseController {

  getSql () {
    return queries.crabPots
  }

}

module.exports = CrabPotsController
