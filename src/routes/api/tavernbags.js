const TavernbagsController = require('../../controllers/api/tavernbags')

module.exports = (app) => {

  const tavernbags = new TavernbagsController()

  app.get('/api/tavernbags', async function (req, res) {
    return await tavernbags.getAll(req, res)
  })

}
