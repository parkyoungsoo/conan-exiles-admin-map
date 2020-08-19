const sqlite = require('sqlite')
const SmartBuffer = require('smart-buffer').SmartBuffer
const queries = require('../../config/sql')

class ThrallsController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.thralls)

      data.map(async (thrall) => {
        thrall.name = getThrallName(thrall)
        thrall.info = getThrallInfo(thrall)
        thrall.owner = getThrallOwnerId(thrall)
        thrall.greater = thrall.info.indexOf('Greater') > -1
        return thrall
      })

      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

function getThrallName (thrall) {
  const thrallName = SmartBuffer.fromBuffer(thrall.name)

  if (thrallName.length > 21) {
    thrallName.readOffset = 21
    let name = JSON.stringify(thrallName.readString())
      .replace(/\\u[0-9a-f]{4}/gi, '')
      .replace(/\\[bfnr]/gi, '')
      .replace(/\"/gi, '')
      .replace('.Imo', '')
      .trim()

    return name
  }

  return "Unknown"
}

function getThrallInfo (thrall) {
  const thrallInfo = SmartBuffer.fromBuffer(thrall.info).readString('utf8')
  const position = thrallInfo.indexOf('_Name')

  let info = thrallInfo.substr(position + 5, thrallInfo.indexOf('ThrallIcon') - position - 5).trim()
  info = JSON.stringify(info)
    .replace(/\\u[0-9a-f]{4}/gi, '')
    .replace(/\\[bfnr]/gi, '')
    .replace(/\"/gi, '')

  return info
}

function getThrallOwnerId (thrall) {
  const thrallOwner = SmartBuffer.fromBuffer(thrall.owner)
  const ownerId = thrallOwner.readUInt16LE(thrallOwner.length - 8)

  return ownerId
}

module.exports = ThrallsController
