const HorsesController = require('../../controllers/api/horses')

module.exports = (app) => {

  const horses = new HorsesController()

  app.get('/api/horses', async function (req, res) {
    return await horses.getAll(req, res)
  })

}
