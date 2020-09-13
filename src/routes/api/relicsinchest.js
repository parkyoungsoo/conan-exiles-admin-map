const RelicsInChestController = require('../../controllers/api/relicsinchest')

module.exports = (app) => {

  const relicsinchest = new RelicsInChestController()

  app.get('/api/relicsinchest', async function (req, res) {
    return await relicsinchest.getAll(req, res)
  })

}
