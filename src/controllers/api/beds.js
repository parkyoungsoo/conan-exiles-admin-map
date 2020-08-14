const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class BedsController extends BaseController {

  getSql () {
    return queries.beds
  }

}

module.exports = BedsController
