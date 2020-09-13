const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class PenguinsController extends BaseController {

  getSql () {
    return queries.penguins
  }

}

module.exports = PenguinsController
