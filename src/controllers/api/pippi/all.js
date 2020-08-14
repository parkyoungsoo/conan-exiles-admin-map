const BaseController = require('../BaseController')
const queries = require('../../../config/sql')

class PippiAllController extends BaseController {

  getSql () {
    return queries.pippiAll
  }

}

module.exports = PippiAllController
