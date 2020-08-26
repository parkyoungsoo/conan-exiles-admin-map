const apiRoutes = (app) => {

  require('./all')(app)
  require('./altars')(app)
  require('./thrones')(app)
  require('./animalpens')(app)
  require('./beds')(app)
  require('./buildings')(app)
  require('./campfires')(app)
  require('./chests')(app)
  require('./crabpots')(app)
  require('./crafting')(app)
  require('./fishnets')(app)
  require('./maprooms')(app)
  require('./horses')(app)
  require('./pets')(app)
  require('./thralls')(app)
  require('./thrallsinchest')(app)
  require('./pippi/all')(app)
  require('./pippi/thespians')(app)
  require('./players')(app)
  require('./trebuchets')(app)
  require('./vaults')(app)
  require('./waterwells')(app)
  require('./wheelsofpain')(app)

}

module.exports = apiRoutes
