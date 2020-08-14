const BaseController = require('./BaseController')
const queries = require('../../config/sql')

class MapRoomsController extends BaseController {

  getSql () {
    return queries.mapRooms
  }

}

module.exports = MapRoomsController
