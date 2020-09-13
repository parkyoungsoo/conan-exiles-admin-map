const PenguinsController = require('../../controllers/api/penguins')

module.exports = (app) => {

  const penguins = new PenguinsController()

  app.get('/api/penguins', async function (req, res) {
    return await penguins.getAll(req, res)
  })

}
