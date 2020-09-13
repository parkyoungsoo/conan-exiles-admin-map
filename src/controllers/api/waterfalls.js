const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class WaterfallsController extends BaseController {

  getSql () {
    return queries.waterfalls
  }

}

module.exports = WaterfallsController
