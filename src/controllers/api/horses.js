const sqlite = require('sqlite')
const SmartBuffer = require('smart-buffer').SmartBuffer
const queries = require('../../config/sql')

class HorsesController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.horses)

      data.map(async (horse) => {
        horse.name = getHorseName(horse)
        horse.info = getHorseInfo(horse)
        horse.owner = getHorseOwnerId(horse)
        horse.greater = horse.info.indexOf('Greater') > -1
        return horse
      })

      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

function getHorseName (horse) {
  const horseName = SmartBuffer.fromBuffer(horse.name)

  if (horseName.length > 21) {
    horseName.readOffset = 21
    let name = JSON.stringify(horseName.readString())
      .replace(/\\u[0-9a-f]{4}/gi, '')
      .replace(/\\[bfnr]/gi, '')
      .replace(/\"/gi, '')
      .replace('.Imo', '')
      .trim()

    return name
  }

  return "Unknown"
}

function getHorseInfo (horse) {
  const horseInfo = SmartBuffer.fromBuffer(horse.info).readString('utf8')
  const position = horseInfo.indexOf('_Name')

  let info = horseInfo.substr(position + 5, horseInfo.indexOf('ThrallIcon') - position - 5).trim()
  info = JSON.stringify(info)
    .replace(/\\u[0-9a-f]{4}/gi, '')
    .replace(/\\[bfnr]/gi, '')
    .replace(/\"/gi, '')

  return info
}

function getHorseOwnerId (horse) {
  const horseOwner = SmartBuffer.fromBuffer(horse.owner)
  const ownerId = horseOwner.readUInt16LE(horseOwner.length - 8)

  return ownerId
}

module.exports = HorsesController
