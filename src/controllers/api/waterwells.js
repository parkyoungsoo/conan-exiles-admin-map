const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class WaterWellsController extends BaseController {

  getSql () {
    return queries.waterWells
  }

}

module.exports = WaterWellsController
