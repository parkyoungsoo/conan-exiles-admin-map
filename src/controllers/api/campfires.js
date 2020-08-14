const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class CampfiresController extends BaseController {

  getSql () {
    return queries.campfires
  }

}

module.exports = CampfiresController
