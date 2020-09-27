const sqlite = require('sqlite')

const queries = require('../../config/sql')
const languages = require('../../languages')
const config = require('../../config')


const nullValue = 'NULL'
const dontshow = [6765000]

class FeatsController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.feats)

      let copydata = data

      copydata = copydata.filter(feat => {
        if (languages[config.SETTINGS.language].items[feat.feat_id] != undefined) {
          if (!dontshow.includes(feat.feat_id)) {
            return feat
          }
        }
      })
      
      copydata.map((feat) => {
        if (feat.guild_name) {
          if (feat.guild_name === nullValue || !feat.guild_name) {
            feat.guild_name = ''
          } else {
            feat.guild_name = feat.guild_name.slice(1, -1)
          }
        }
        if (feat.rank === nullValue || !feat.rank) feat.rank = ''
          feat.featname = languages[config.SETTINGS.language].items[feat.feat_id]

      })

      res.send({ data: copydata, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

module.exports = FeatsController
