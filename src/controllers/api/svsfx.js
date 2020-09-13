const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class SvsfxController extends BaseController {

  getSql () {
    return queries.svsfx
  }

}

module.exports = SvsfxController
