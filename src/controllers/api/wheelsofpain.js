const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class WheelsOfPainController extends BaseController {

  getSql () {
    return queries.wheelsOfPain
  }

}

module.exports = WheelsOfPainController
