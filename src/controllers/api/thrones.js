const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class ThronesController extends BaseController {

    getSql() {
        return queries.thrones
    }

}

module.exports = ThronesController