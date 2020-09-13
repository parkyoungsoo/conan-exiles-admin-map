const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class TavernbagsController extends BaseController {

  getSql () {
    return queries.tavernbags
  }

}

module.exports = TavernbagsController
