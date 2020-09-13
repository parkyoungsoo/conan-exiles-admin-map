const SvsfxController = require('../../controllers/api/svsfx')

module.exports = (app) => {

  const svsfx = new SvsfxController()

  app.get('/api/svsfx', async function (req, res) {
    return await svsfx.getAll(req, res)
  })

}
