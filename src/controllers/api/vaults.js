const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class VaultsController extends BaseController {

  getSql () {
    return queries.vaults
  }

}

module.exports = VaultsController
