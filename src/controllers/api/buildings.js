const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class BuildingsController extends BaseController {

  getSql () {
    return queries.buildings
  }

}

module.exports = BuildingsController
