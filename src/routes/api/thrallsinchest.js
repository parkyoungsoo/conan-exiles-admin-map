const ThrallsInChestController = require('../../controllers/api/thrallsinchest')

module.exports = (app) => {

  const thrallsinchest = new ThrallsInChestController()

  app.get('/api/thrallsinchest', async function (req, res) {
    return await thrallsinchest.getAll(req, res)
  })

}
