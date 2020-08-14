const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class AltarsController extends BaseController {

  getSql () {
    return queries.altars
  }

}

module.exports = AltarsController
