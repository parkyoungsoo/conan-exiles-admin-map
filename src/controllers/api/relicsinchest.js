const sqlite = require('sqlite')
// const SmartBuffer = require('smart-buffer').SmartBuffer
const queries = require('../../config/sql')

class RelicsInChestController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.relicsinchest)

      data.map(async (relicsinchest) => {

        console.log(relicsinchest)
        relicsinchest.name = relicsinchest.class
        relicsinchest.info = getRelicsInChestInfo(relicsinchest, data)
        relicsinchest.owner = relicsinchest.owner_id
        return relicsinchest
      })

      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

function getRelicsInChestName (relicsinchest) {

  let uint8array  = new TextEncoder("utf-8").encode(relicsinchest.data)
  let string = new TextDecoder("utf-8").decode(uint8array)

  let name = string.substring(string.lastIndexOf("SpawnDataTable_") + 15)
  name = name.substring(0, name.indexOf("_Name"))

  return name
}

function getRelicsInChestInfo (relicsinchest, data) {
  
  let tmp = data.filter(o => o.item_id === relicsinchest.item_id)
  // let name = getRelicsInChestName(relicsinchest)
  let info = tmp.length + ' relic(s) '

  return info
}

function getRelicsInChestOwnerId (relicsinchest) {
  const relicsinchestOwner = SmartBuffer.fromBuffer(relicsinchest.owner)
  const ownerId = relicsinchestOwner.readUInt16LE(relicsinchestOwner.length - 8)

  return ownerId
}

module.exports = RelicsInChestController
