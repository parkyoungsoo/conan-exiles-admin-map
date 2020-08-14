const sqlite3 = require('sqlite3')
// const { open } = require('sqlite')
const sqlite = require('sqlite')

class BaseController {

  getSql () {
    return ''
  }

  async getAll (req, res) {
    
    try {

      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(this.getSql())

      data.map((item) => {
        item.kind = item.class || null
      })

      
      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

module.exports = BaseController
