const WaterfallsController = require('../../controllers/api/waterfalls')

module.exports = (app) => {

  const waterfalls = new WaterfallsController()

  app.get('/api/waterfalls', async function (req, res) {
    return await waterfalls.getAll(req, res)
  })

}
