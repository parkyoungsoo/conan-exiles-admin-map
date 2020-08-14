const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class AnimalPensController extends BaseController {

  getSql () {
    return queries.animalpens
  }

}

module.exports = AnimalPensController
