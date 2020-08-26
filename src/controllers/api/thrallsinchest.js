const sqlite = require('sqlite')
// const SmartBuffer = require('smart-buffer').SmartBuffer
const queries = require('../../config/sql')

class ThrallsInChestController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.thrallsinchest)

      data.map(async (thrallsinchest) => {

        thrallsinchest.name = thrallsinchest.class
        thrallsinchest.info = getThrallsInChestInfo(thrallsinchest, data)
        thrallsinchest.owner = thrallsinchest.owner_id
        return thrallsinchest
      })

      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

function getThrallsInChestName (thrallsinchest) {

  let uint8array  = new TextEncoder("utf-8").encode(thrallsinchest.data)
  let string = new TextDecoder("utf-8").decode(uint8array)

  let name = string.substring(string.lastIndexOf("SpawnDataTable_") + 15)
  name = name.substring(0, name.indexOf("_Name"))

  return name
}

function getThrallsInChestInfo (thrallsinchest, data) {
  
  let tmp = data.filter(o => o.item_id === thrallsinchest.item_id)
  let name = getThrallsInChestName(thrallsinchest)
  let info = name
  if (tmp.length > 1) info = ' + ' + tmp.length + ' thrall(s) with ' +  name

  return info
}

function getThrallsInChestOwnerId (thrallsinchest) {
  const thrallsinchestOwner = SmartBuffer.fromBuffer(thrallsinchest.owner)
  const ownerId = thrallsinchestOwner.readUInt16LE(thrallsinchestOwner.length - 8)

  return ownerId
}

module.exports = ThrallsInChestController
