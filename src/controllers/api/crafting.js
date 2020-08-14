const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class CraftingController extends BaseController {

  getSql () {
    return queries.crafting
  }

}

module.exports = CraftingController
