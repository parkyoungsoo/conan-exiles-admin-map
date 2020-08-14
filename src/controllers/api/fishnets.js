const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class FishnetsController extends BaseController {

  getSql () {
    return queries.fishNets
  }

}

module.exports = FishnetsController
