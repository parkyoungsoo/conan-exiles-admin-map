const FeatsController = require('../../controllers/api/feats')

module.exports = (app) => {

  const feats = new FeatsController()

  app.get('/api/feats', async function (req, res) {
    return await feats.getAll(req, res)
  })

}
