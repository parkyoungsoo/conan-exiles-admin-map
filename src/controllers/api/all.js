const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class AllController extends BaseController {

  getSql () {
    return queries.all
  }

}

module.exports = AllController
