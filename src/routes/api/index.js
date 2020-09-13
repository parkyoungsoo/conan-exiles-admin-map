const apiRoutes = (app) => {

  require('./all')(app)
  require('./altars')(app)
  require('./animalpens')(app)
  require('./beds')(app)
  require('./buildings')(app)
  require('./campfires')(app)
  require('./chests')(app)
  require('./crabpots')(app)
  require('./crafting')(app)
  require('./fishnets')(app)
  require('./horses')(app)
  require('./maprooms')(app)
  require('./penguins')(app)
  require('./pets')(app)
  require('./pippi/all')(app)
  require('./pippi/thespians')(app)
  require('./players')(app)
  require('./svsfx')(app)
  require('./tavernbags')(app)
  require('./thralls')(app)
  require('./thrallsinchest')(app)
  require('./thrones')(app)
  require('./trebuchets')(app)
  require('./vaults')(app)
  require('./waterfalls')(app)
  require('./waterwells')(app)
  require('./wheelsofpain')(app)

}

module.exports = apiRoutes
